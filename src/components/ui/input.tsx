"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "peer flex w-full items-center rounded-md border bg-surface text-text",
    "placeholder:text-text-tertiary",
    "transition-colors duration-fast ease-precise",
    "focus-visible:outline-none focus-visible:shadow-focus focus-visible:border-primary-800 dark:focus-visible:border-neutral-100",
    "disabled:cursor-not-allowed disabled:bg-surface-subtle disabled:text-text-tertiary",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-2.5 text-xs",
        md: "h-10 px-3 text-sm",
        lg: "h-11 px-4 text-base",
      },
      invalid: {
        true: "border-danger-500 focus-visible:border-danger-500",
        false: "border-border hover:border-border-strong",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
    },
  },
);

type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export interface InputProps
  extends NativeInputProps,
    VariantProps<typeof inputVariants> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      className,
      containerClassName,
      size,
      invalid,
      leadingIcon,
      trailingIcon,
      hint,
      error,
      id,
      "aria-describedby": ariaDescribedByProp,
      ...props
    },
    ref,
  ) {
    const reactId = React.useId();
    const inputId = id ?? reactId;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [ariaDescribedByProp, hintId, errorId]
      .filter(Boolean)
      .join(" ");
    const isInvalid = Boolean(error) || invalid === true;

    return (
      <div className={cn("flex w-full flex-col gap-1.5", containerClassName)}>
        <div className="relative flex items-center">
          {leadingIcon ? (
            <span
              aria-hidden
              className="pointer-events-none absolute left-3 flex items-center text-text-tertiary [&_svg]:size-4"
            >
              {leadingIcon}
            </span>
          ) : null}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={isInvalid || undefined}
            aria-describedby={describedBy || undefined}
            className={cn(
              inputVariants({ size, invalid: isInvalid }),
              leadingIcon && "pl-9",
              trailingIcon && "pr-9",
              className,
            )}
            {...props}
          />
          {trailingIcon ? (
            <span
              aria-hidden
              className="pointer-events-none absolute right-3 flex items-center text-text-tertiary [&_svg]:size-4"
            >
              {trailingIcon}
            </span>
          ) : null}
        </div>
        {hint && !error ? (
          <p id={hintId} className="text-xs text-text-tertiary">
            {hint}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} className="text-xs text-danger-700 dark:text-danger-500" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);
