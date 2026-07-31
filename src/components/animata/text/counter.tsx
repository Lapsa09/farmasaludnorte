import {
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { Formatter } from "@/utils/formatter";

interface CounterProps {
  /**
   * A function to format the counter value. By default, it will format the
   * number with commas.
   */
  format?: (value: number) => string;

  /**
   * The target value of the counter.
   */
  targetValue: number;

  /**
   * The direction of the counter. If "up", the counter will start from 0 and
   * go up to the target value. If "down", the counter will start from the target
   * value and go down to 0.
   */
  direction?: "up" | "down";

  /**
   * The delay in milliseconds before the counter starts counting.
   */
  delay?: number;

  /**
   * Additional classes for the counter.
   */
  className?: string;

  /** Text or symbol placed before the number, e.g. "+" or "$". */
  prefix?: string;

  /** Text or symbol placed after the number, e.g. "%" or "hs". */
  suffix?: string;

  /** Additional classes for the prefix span. */
  prefixClassName?: string;

  /** Additional classes for the suffix span. */
  suffixClassName?: string;
}

export default function Counter({
  format = Formatter.number,
  targetValue = 1000,
  direction = "up",
  delay = 0,
  className,
  prefix,
  suffix,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isGoingUp = direction === "up";
  const motionValue = useMotionValue(isGoingUp ? 0 : targetValue);

  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 80,
  });
  const isInView = useInView(ref, { margin: "0px", once: true });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const timer = setTimeout(() => {
      motionValue.set(isGoingUp ? targetValue : 0);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, delay, isGoingUp, targetValue, motionValue]);

  useMotionValueEvent(springValue, "change", (value) => {
    if (ref.current) {
      ref.current.textContent = format ? format(value) : String(value);
    }
  });

  const initialDisplay = format
    ? format(isGoingUp ? 0 : targetValue)
    : String(isGoingUp ? 0 : targetValue);

  return (
    <span className="inline-flex items-baseline gap-0.5">
      {prefix && (
        <span className={cn("text-4xl font-bold text-foreground", className)}>
          {prefix}
        </span>
      )}
      <span
        ref={ref}
        className={cn("text-4xl font-bold text-foreground", className)}
      >
        {initialDisplay}
      </span>
      {suffix && (
        <span className={cn("text-4xl font-bold text-foreground", className)}>
          {suffix}
        </span>
      )}
    </span>
  );
}
