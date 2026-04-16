"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IconCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  size?: "sm" | "md";
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(function Checkbox({ className, size = "md", ...props }, ref) {
  const dimensions = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";
  const iconSize = size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";
  const barSize = size === "sm" ? "h-0.5 w-2" : "h-0.5 w-2.5";

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer group inline-flex shrink-0 items-center justify-center rounded-xs border",
        "border-border-strong bg-surface",
        "transition-colors duration-fast ease-precise",
        "hover:border-primary-800 dark:hover:border-neutral-100",
        "focus-visible:outline-none focus-visible:shadow-focus",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-primary-800 data-[state=checked]:bg-primary-800 data-[state=checked]:text-text-on-primary",
        "data-[state=indeterminate]:border-primary-800 data-[state=indeterminate]:bg-primary-800 data-[state=indeterminate]:text-text-on-primary",
        "dark:data-[state=checked]:border-accent-500 dark:data-[state=checked]:bg-accent-500 dark:data-[state=checked]:text-primary-950",
        "dark:data-[state=indeterminate]:border-accent-500 dark:data-[state=indeterminate]:bg-accent-500 dark:data-[state=indeterminate]:text-primary-950",
        dimensions,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <IconCheckFilled
          aria-hidden
          className={cn(
            "group-data-[state=indeterminate]:hidden",
            iconSize,
          )}
        />
        <span
          aria-hidden
          className={cn(
            "hidden rounded-sm bg-current group-data-[state=indeterminate]:block",
            barSize,
          )}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
