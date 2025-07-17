"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import React from "react";

import { cn } from "@/lib/utils";

interface VelocityScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultVelocity?: number;
  className?: string;
  numRows?: number;
}

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  baseVelocity: number;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxRow({
  children,
  baseVelocity = 100,
  ...props
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = React.useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap flex"
      {...props}
    >
      <motion.div className="flex space-x-4 pr-4" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  defaultVelocity = 5,
  children,
  className,
  ...props
}: VelocityScrollProps) {
  const childrenArray = React.Children.toArray(children);
  const firstRow = childrenArray.slice(0, Math.ceil(childrenArray.length / 2));
  const secondRow = childrenArray.slice(Math.ceil(childrenArray.length / 2));

  return (
    <div
      className={cn(
        "relative w-full flex flex-col gap-4",
        className,
      )}
      {...props}
    >
        <ParallaxRow
          baseVelocity={defaultVelocity}
        >
          {firstRow}
        </ParallaxRow>
        <ParallaxRow
          baseVelocity={-defaultVelocity}
        >
          {secondRow}
        </ParallaxRow>
    </div>
  );
}
