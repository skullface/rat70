"use client";

import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "./tooltip";

const PHOTOS = [
  { src: "/bread-and-roses-speech-two.jpg", alt: "Anti-war rally photograph" },
  {
    src: "/bread-and-roses-speech.jpg",
    alt: "Bread and Roses speech at the rally",
  },
  { src: "/harvard-stadium.jpg", alt: "Harvard Stadium" },
] as const;

const DEFAULT_FEATURED_INDEX = 1;

export function BreadAndRosesPhotos() {
  const [featuredIndex, setFeaturedIndex] = useState(DEFAULT_FEATURED_INDEX);
  const featured = PHOTOS[featuredIndex];

  return (
    <>
      <Tooltip
        as="div"
        className="mb-6"
        panelClassName="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mt-2 bg-background! text-foreground! shadow-sm font-mono! text-xs!"
        content="35mm photographs by Jeff Albertson. Anti-war rally at Soldier’s Field, Harvard University, May 8, 1970."
      >
        <Image
          key={featured.src}
          src={featured.src}
          alt={featured.alt}
          width={1600}
          height={1016}
        />
      </Tooltip>
      <div className="mb-6 grid grid-cols-3 gap-6 items-center">
        {PHOTOS.map((photo, index) => {
          const selected = index === featuredIndex;
          return (
            <button
              key={photo.src}
              type="button"
              aria-pressed={selected}
              aria-label={`Show photograph ${index + 1} of ${PHOTOS.length}`}
              onClick={() => setFeaturedIndex(index)}
              className={[
                "cursor-pointer invert",
                selected ? "opacity-100" : "opacity-40 hover:opacity-100",
              ].join(" ")}
            >
              <Image src={photo.src} alt="" width={1600} height={1016} />
            </button>
          );
        })}
      </div>
    </>
  );
}
