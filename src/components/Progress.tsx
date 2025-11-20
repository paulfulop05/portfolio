import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
}

function Progress({ className, value, ...props }: ProgressProps) {
  const [displayValue, setDisplayValue] = React.useState(0);
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView]);

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setDisplayValue(value || 0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      style={{ backgroundColor: "var(--color-surface-borders)" }}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 transition-all duration-1000 ease-out"
        style={{
          transform: `translateX(-${100 - displayValue}%)`,
          backgroundColor: "var(--color-text-secondary)",
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
