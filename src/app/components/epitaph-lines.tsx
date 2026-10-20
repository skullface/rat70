"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Gap between lines within a stanza (revolution uses 840ms). */
const EPITAPH_LINE_STEP_MS = 840;

/** Pause after the last line fades in before the next stanza may start. */
const STANZA_GAP_MS = 1200;

/** Matches `[data-text="epitaph"] .poem-line` transition duration in globals.css. */
const LINE_FADE_MS = 480;

function stanzaTouchesViewport(stanza: Element) {
  const { top, bottom } = stanza.getBoundingClientRect();
  return top < window.innerHeight && bottom > 0;
}

function stanzaLineRevealDuration(stanza: Element) {
  const lineCount = stanza.querySelectorAll(".poem-line").length;
  if (lineCount === 0) return 0;
  return (lineCount - 1) * EPITAPH_LINE_STEP_MS + LINE_FADE_MS;
}

export function EpitaphLines({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const stanzas = [...root.querySelectorAll(".poem-stanza")];
    if (!stanzas.length) return;

    const observers: IntersectionObserver[] = [];
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const revealStanza = (stanza: Element) => {
      if (stanza.hasAttribute("data-visible")) return;
      stanza.setAttribute("data-visible", "");

      const lines = stanza.querySelectorAll(".poem-line");
      lines.forEach((line, lineIndex) => {
        timeouts.push(
          setTimeout(() => {
            line.setAttribute("data-visible", "");
          }, lineIndex * EPITAPH_LINE_STEP_MS),
        );
      });
    };

    const scheduleNextStanza = (index: number) => {
      const nextIndex = index + 1;
      if (nextIndex >= stanzas.length) return;

      const delay = stanzaLineRevealDuration(stanzas[index]) + STANZA_GAP_MS;

      timeouts.push(
        setTimeout(() => {
          const next = stanzas[nextIndex];
          if (next.hasAttribute("data-visible")) return;

          if (stanzaTouchesViewport(next)) {
            revealStanza(next);
            scheduleNextStanza(nextIndex);
          } else {
            watchStanza(nextIndex);
          }
        }, delay),
      );
    };

    const watchStanza = (index: number) => {
      const stanza = stanzas[index];
      if (stanza.hasAttribute("data-visible")) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            observer.unobserve(entry.target);
            revealStanza(entry.target);
            scheduleNextStanza(index);
          }
        },
        { threshold: 0.2 },
      );

      observers.push(observer);
      observer.observe(stanza);
    };

    const beginEpitaph = () => {
      const first = stanzas[0];
      first.setAttribute("data-visible", "");

      const lines = first.querySelectorAll(".poem-line");
      lines.forEach((line, lineIndex) => {
        if (lineIndex === 0) {
          line.setAttribute("data-visible", "");
          return;
        }

        timeouts.push(
          setTimeout(() => {
            line.setAttribute("data-visible", "");
          }, lineIndex * EPITAPH_LINE_STEP_MS),
        );
      });

      scheduleNextStanza(0);
    };

    beginEpitaph();

    return () => {
      observers.forEach((observer) => observer.disconnect());
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div ref={ref} className="leading-[1.75] p-6 mb-20" data-text="epitaph">
      {children}
    </div>
  );
}
