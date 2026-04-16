"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "inline-flex items-center gap-1.5 text-sm font-medium text-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
  optional?: boolean;
}

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(function Label(
  { className, size, required, optional, children, ...props },
  ref,
) {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ size }), className)}
      {...props}
    >
      {children}
      {required ? (
        <span aria-hidden className="text-danger-500">
          *
        </span>
      ) : null}
      {optional ? (
        <span className="text-2xs font-normal uppercase tracking-wider text-text-tertiary">
          opcional
        </span>
      ) : null}
    </LabelPrimitive.Root>
  );
});
