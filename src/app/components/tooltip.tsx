"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useId } from "react";

export const TOOLTIP_PANEL_CLASS =
  "absolute z-50 isolate w-64 pointer-events-auto bg-foreground text-background p-4 text-pretty rounded-md font-sans text-sm opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100";

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  className?: string;
  panelClassName?: string;
  triggerClassName?: string;
  style?: CSSProperties;
  as?: ElementType;
};

export function Tooltip({
  content,
  children,
  className,
  panelClassName,
  triggerClassName,
  style,
  as: Wrapper = "span",
}: TooltipProps) {
  const id = useId();

  return (
    <Wrapper
      className={`group relative ${className}`}
      style={style}
    >
      <button aria-describedby={id} className={`block cursor-help background-transparent appearance-none ${triggerClassName}`}>
        {children}
      </button>
      <span
        id={id}
        role="tooltip"
        className={[TOOLTIP_PANEL_CLASS, panelClassName]
          .filter(Boolean)
          .join(" ")}
      >
        {content}
      </span>
    </Wrapper>
  );
}
