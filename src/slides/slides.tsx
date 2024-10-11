"use client";

import { atom, useSetAtom } from "jotai";
import { ReactNode, useCallback, useEffect, useRef } from "react";

function clamp(min: number, max: number, value: number) {
  return Math.max(min, Math.min(max, value));
}

const slidesAtom = atom<(() => void)[]>([]);
const activeSlideAtomRaw = atom<number>(0);

export const activeSlideAtom = atom(
  null,
  (get, set, arg: ((n: number) => number) | number) => {
    const slides = get(slidesAtom);
    const index = clamp(
      0,
      slides.length - 1,
      typeof arg === "function" ? arg(get(activeSlideAtomRaw)) : arg,
    );
    console.log("set active slide", index, slides[index]);
    set(activeSlideAtomRaw, index);
    slides[index]?.();
  },
);

export function Slide({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const focus = useCallback(
    () => ref.current?.scrollIntoView({ behavior: "smooth" }),
    [ref],
  );
  const setSlides = useSetAtom(slidesAtom);
  useEffect(() => {
    setSlides((prev) => [...prev, focus]);
    return () => {
      setSlides((prev) => prev.filter((fn) => fn !== focus));
    };
  }, [focus, setSlides]);
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}
