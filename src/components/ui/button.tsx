import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium tracking-tight select-none",
    "rounded-md border transition-all duration-fast ease-precise",
    "focus-visible:outline-none focus-visible:shadow-focus",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-[1.05em] [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: [
          "border-transparent bg-action-primary text-text-on-primary",
          "hover:bg-action-primary-hover",
          "active:bg-action-primary-active",
        ],
        accent: [
          "border-transparent bg-action-accent text-text-on-accent",
          "hover:bg-action-accent-hover",
          "active:bg-action-accent-active",
        ],
        secondary: [
          "border-border-strong bg-surface text-text",
          "hover:border-primary-800 hover:bg-surface-subtle dark:hover:border-neutral-100",
          "active:bg-surface-muted",
        ],
        ghost: [
          "border-transparent bg-transparent text-text-secondary",
          "hover:bg-surface-muted hover:text-text",
          "active:bg-surface-muted",
        ],
        destructive: [
          "border-transparent bg-danger-500 text-white",
          "hover:bg-danger-700",
          "active:bg-danger-700",
        ],
        link: [
          "border-transparent bg-transparent text-text",
          "underline-offset-4 hover:underline",
          "h-auto p-0",
        ],
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    compoundVariants: [
      { variant: "link", size: "sm", className: "h-auto p-0 text-xs" },
      { variant: "link", size: "md", className: "h-auto p-0 text-sm" },
      { variant: "link", size: "lg", className: "h-auto p-0 text-base" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leadingIcon,
      trailingIcon,
      disabled,
      children,
      ...props
    },
    ref,
  ) {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    const content = asChild ? (
      children
    ) : (
      <>
        {loading ? (
          <span
            aria-hidden
            className="size-[1.05em] animate-spin rounded-full border-2 border-current border-t-transparent"
          />
        ) : leadingIcon ? (
          <span aria-hidden className="inline-flex">
            {leadingIcon}
          </span>
        ) : null}
        {children}
        {!loading && trailingIcon ? (
          <span aria-hidden className="inline-flex">
            {trailingIcon}
          </span>
        ) : null}
      </>
    );

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {content}
      </Comp>
    );
  },
);

export { buttonVariants };
