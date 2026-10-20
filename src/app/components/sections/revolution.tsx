import Image from "next/image";
import type { CSSProperties } from "react";
import { Tooltip } from "../tooltip";

const POEM: string[][] = [
  [
    "Take five friends, hold hands",
    "and run down the street together.",
    "Never go",
    "thru revolving doors.",
  ],
  [
    "Take five friends",
    "and stop the traffic Broadway.",
    "Put up posters, explain to the people",
    "why this city must grind to a halt.",
  ],
  ["\u00A0\u00A0\u00A0Why our lives cannot go on as before."],
  [
    "Seize CBS, liberate a subway stop.",
    "\u00A0\u00A0\u00A0(hear about the guy that tried to free a porpoise?)",
    "Drive around in a sound truck",
    "\u00A0\u00A0\u00A0playing music.",
    "Cook breakfast for a thousand children",
    "\u00A0\u00A0\u00A0in the university kitchens.",
    "Never go anywhere without a tambourine.",
  ],
  [
    "Organize a community meal tomorrow",
    "\u00A0\u00A0\u00A0– on the A & P",
    "No insurance, no preservatives, no credits.",
    "No accumulation but the smell of our skin,",
    "the touching of our hair.",
    "To save the moment is to loose it.",
  ],
  [
    "Take those five friends",
    "and spend the day with Mao",
    "with Lao Tzu and Tong Fu.",
    "Be a fist at the demonstration.",
  ],
  [
    "Learn and teach,",
    "carburetors and silk screening.",
    "Find new places to make love.",
  ],
  [
    "Move in together, so we can",
    "move out together.",
    "If you wander off",
    "\u00A0\u00A0\u00A0we will lose each other.",
  ],
];

const LINE_TOOLTIPS: Record<
  string,
  { src: string; alt: string; width: number; height: number }
> = {
  "Put up posters, explain to the people": {
    src: "/revolutionary-wall-painting-small.png",
    alt: "Corners are better than the middle of the block; walking is better than driving; brick or concrete walls are best; sidewalks are okay; windows should be ignored or broken; paint washes off. Short slogans are better than long slogans. There’s a lot of unfinished ”Bring…” and “Power…” around on the walls.",
    width: 240,
    height: 400,
  },
  "carburetors and silk screening.": {
    src: "/bumper-stickers.png",
    alt: "“LEAVE CAMBODIA ALONE” “WHERE HAVE ALL THE FLOWERS GONE?” “I AIN’T MARCHING ANY MORE” bumperstickers, 50¢ each (wholesale too) nice colors. HEX Brotherhood, R Box 68, Burnham, Pa. 17009.",
    width: 224,
    height: 100,
  },
};

function lineIndexBefore(stanzaIndex: number) {
  return POEM.slice(0, stanzaIndex).reduce(
    (sum, stanza) => sum + stanza.length,
    0,
  );
}

export default function PoemRevolutionInOurLifetime() {
  return (
    <section className="relative flex flex-row-reverse items-start justify-end mt-32 lg:ml-72">
      <Image
        src="/blam.gif"
        loading="eager"
        alt=""
        width={519}
        height={800}
        className="-z-10 absolute -top-26 -left-72 -ml-20 rotate-180"
      />
      <Image
        src="/revolution-now.png"
        alt=""
        width={200}
        height={104}
        className="-z-10 absolute top-90 -left-56 -ml-20 -rotate-90 invert"
      />
      <Tooltip
        as="div"
        className="z-10 -mt-24 -ml-26"
        triggerClassName="block cursor-help"
        panelClassName="top-1/2 right-full lg:left-full -translate-y-1/2"
        content={
          <Image
            src="/flag-description.png"
            alt="Almost all flag poles are the same. They have a continuous loop of
          rope passing over a pulley at the top. The loop of rope has a pair of
          clips attached from three to six feet apart for attaching the flag."
            width={240}
            height={400}
            className="invert"
          />
        }
      >
        <Image
          src="/flag.png"
          loading="eager"
          alt=""
          width={240}
          height={400}
        />
      </Tooltip>
      <div className="leading-[1.75] p-6 mb-20" data-text="revolution">
        {POEM.map((stanza, stanzaIndex) => (
          <p key={stanzaIndex}>
            {stanza.map((line, lineInStanza) => {
              const index = lineIndexBefore(stanzaIndex) + lineInStanza;
              const lineStyle = {
                "--line-index": index,
              } as CSSProperties & { "--line-index": number };

              const tooltip = LINE_TOOLTIPS[line];
              if (tooltip) {
                return (
                  <Tooltip
                    key={lineInStanza}
                    className="poem-line block z-50 isolate"
                    style={lineStyle}
                    triggerClassName="cursor-help border-b-2 border-dotted border-(--lime)"
                    panelClassName="top-full left-0 mt-2"
                    content={
                      <Image
                        src={tooltip.src}
                        alt={tooltip.alt}
                        width={tooltip.width}
                        height={tooltip.height}
                        className="invert"
                      />
                    }
                  >
                    {line}
                  </Tooltip>
                );
              }

              return (
                <span
                  key={lineInStanza}
                  className="poem-line block"
                  style={lineStyle}
                >
                  {line}
                </span>
              );
            })}
          </p>
        ))}
      </div>
      <Image
        src="/kent-state.png"
        alt="Jackson, Augusta, Kent State, People’s Park, Santa Barbara, Chicago, Cambodia, Laos, Vietnam, Korea, Biafra, Rhodesia, South Africa, Greece, Puerto Rico, Bolivia, Brazil, Cuba, Haiti, Colombia, Panama, Dominican Republic, Philippines"
        width={261}
        height={626}
        className="absolute bottom-0 -ml-72"
      />
    </section>
  );
}
