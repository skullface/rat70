"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const REST_ANGLE_DEG = 25;
const SPIN_DURATION_MS = 24_000;

function getRotationDegrees(element: HTMLElement): number {
  const { transform } = getComputedStyle(element);
  if (transform === "none") return REST_ANGLE_DEG;

  const matrix2d = transform.match(/^matrix\((.+)\)$/);
  if (matrix2d) {
    const [a, b] = matrix2d[1].split(",").map((value) => parseFloat(value.trim()));
    return (Math.atan2(b, a) * 180) / Math.PI;
  }

  const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    const values = matrix3d[1].split(",").map((value) => parseFloat(value.trim()));
    const a = values[0];
    const b = values[1];
    return (Math.atan2(b, a) * 180) / Math.PI;
  }

  return REST_ANGLE_DEG;
}

export function StatueLiberty() {
  const [spinning, setSpinning] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  const toggleSpin = useCallback(() => {
    setSpinning((active) => !active);
  }, []);

  useEffect(() => {
    const element = spanRef.current;
    if (!element || !spinning) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const fromAngle = getRotationDegrees(element);
    const animation = element.animate(
      [
        { transform: `rotate(${fromAngle}deg)` },
        { transform: `rotate(${fromAngle + 360}deg)` },
      ],
      {
        duration: SPIN_DURATION_MS,
        iterations: Infinity,
        easing: "linear",
      },
    );

    return () => {
      animation.commitStyles();
      animation.cancel();
    };
  }, [spinning]);

  return (
    <button
      type="button"
      onClick={toggleSpin}
      className="absolute -top-32 z-10 -ml-90 border-0 bg-transparent p-0 cursor-pointer"
      aria-label="Statue of Liberty"
      aria-pressed={spinning}
    >
      <span
        ref={spanRef}
        className="inline-block origin-center"
        style={{ transform: `rotate(${REST_ANGLE_DEG}deg)` }}
      >
        <Image
          src="/statue-liberty.png"
          alt=""
          width={400}
          height={400}
          draggable={false}
          className="pointer-events-none"
        />
      </span>
    </button>
  );
}
