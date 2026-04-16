import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm",
    "font-medium tracking-tight",
    "border transition-colors duration-fast ease-precise",
  ],
  {
    variants: {
      variant: {
        neutral: "border-border bg-surface-muted text-text-secondary",
        primary: "border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-700 dark:bg-primary-800/40 dark:text-primary-200",
        accent: "border-accent-300 bg-accent-50 text-accent-800 dark:border-accent-600 dark:bg-accent-500/15 dark:text-accent-200",
        success: "border-success-100 bg-success-100/60 text-success-700 dark:border-success-700/50 dark:bg-success-500/15 dark:text-success-500",
        warning: "border-warning-100 bg-warning-100/60 text-warning-700 dark:border-warning-700/50 dark:bg-warning-500/15 dark:text-warning-500",
        danger: "border-danger-100 bg-danger-100/60 text-danger-700 dark:border-danger-700/50 dark:bg-danger-500/15 dark:text-danger-500",
        info: "border-info-100 bg-info-100/60 text-info-700 dark:border-info-700/50 dark:bg-info-500/15 dark:text-info-500",
        outline: "border-border-strong bg-transparent text-text",
      },
      size: {
        sm: "h-5 px-1.5 text-2xs",
        md: "h-6 px-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  },
);

const dotColorMap: Record<NonNullable<BadgeProps["variant"]>, string> = {
  neutral: "bg-neutral-500",
  primary: "bg-primary-600 dark:bg-primary-300",
  accent: "bg-accent-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  danger: "bg-danger-500",
  info: "bg-info-500",
  outline: "bg-neutral-500",
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(
    { className, variant, size, dot = false, children, ...props },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {dot ? (
          <span
            aria-hidden
            className={cn(
              "inline-block h-1.5 w-1.5 rounded-full",
              dotColorMap[variant ?? "neutral"],
            )}
          />
        ) : null}
        {children}
      </span>
    );
  },
);

export { badgeVariants };
