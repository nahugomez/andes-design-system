import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  name: string;
  token: string;
  className: string;
  hex?: string;
  contrast?: "light" | "dark";
}

export function ColorSwatch({
  name,
  token,
  className,
  hex,
  contrast = "light",
}: ColorSwatchProps) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <div
        className={cn(
          "flex h-24 items-end p-3 text-xs font-medium",
          className,
          contrast === "light" ? "text-text" : "text-neutral-50",
        )}
      >
        {hex ? (
          <span className="font-mono tracking-tight opacity-80">{hex}</span>
        ) : null}
      </div>
      <div className="flex flex-col gap-0.5 bg-surface px-3 py-2.5">
        <span className="text-sm font-medium text-text">{name}</span>
        <span className="font-mono text-2xs text-text-tertiary">{token}</span>
      </div>
    </div>
  );
}

interface ColorScaleStep {
  step: number | string;
  className: string;
  hex?: string;
}

interface ColorScaleProps {
  name: string;
  steps: ColorScaleStep[];
}

export function ColorScale({ name, steps }: ColorScaleProps) {
  return (
    <div className="not-prose my-6">
      <p className="mb-3 text-2xs font-mono uppercase tracking-[0.18em] text-text-tertiary">
        {name}
      </p>
      <div className="grid grid-cols-6 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-11">
        {steps.map((s) => (
          <div key={s.step} className="flex flex-col bg-background">
            <div className={cn("h-16", s.className)} />
            <div className="px-2 py-1.5">
              <p className="font-mono text-2xs text-text-tertiary">{s.step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
