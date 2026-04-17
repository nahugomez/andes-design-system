import * as React from "react";
import { cn } from "@/lib/utils";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  background?: "default" | "muted" | "grid";
  align?: "start" | "center";
  minHeight?: number;
}

export function Preview({
  children,
  className,
  label,
  background = "default",
  align = "center",
  minHeight = 180,
}: PreviewProps) {
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-surface">
      {label ? (
        <figcaption className="flex items-center justify-between border-b border-border-subtle bg-surface-subtle/60 px-5 py-2.5 text-2xs font-mono uppercase tracking-[0.18em] text-text-tertiary">
          <span>{label}</span>
        </figcaption>
      ) : null}
      <div
        className={cn(
          "flex w-full flex-wrap gap-4 overflow-x-auto p-4 md:p-8",
          align === "center" ? "items-center justify-center" : "items-start justify-start",
          background === "muted" && "bg-surface-subtle",
          background === "grid" &&
            "bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]",
          className,
        )}
        style={{ minHeight }}
      >
        {children}
      </div>
    </figure>
  );
}

export function PreviewGrid({
  children,
  columns = 2,
  className,
}: {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}) {
  const cols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
  }[columns];

  return (
    <div className={cn("not-prose my-6 grid gap-4", cols, className)}>
      {children}
    </div>
  );
}
