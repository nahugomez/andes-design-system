import {
  IconAlertTriangleFilled,
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "success" | "warning" | "danger" | "do" | "dont";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<
  CalloutVariant,
  { wrap: string; icon: React.ReactNode; titleDefault: string }
> = {
  info: {
    wrap: "border-info-100 bg-info-100/40 dark:border-info-700/40 dark:bg-info-500/10",
    icon: (
      <IconInfoCircleFilled
        size={16}
        className="text-info-700 dark:text-info-500"
        aria-hidden
      />
    ),
    titleDefault: "Nota",
  },
  success: {
    wrap: "border-success-100 bg-success-100/40 dark:border-success-700/40 dark:bg-success-500/10",
    icon: (
      <IconCircleCheckFilled
        size={16}
        className="text-success-700 dark:text-success-500"
        aria-hidden
      />
    ),
    titleDefault: "Recomendado",
  },
  warning: {
    wrap: "border-warning-100 bg-warning-100/40 dark:border-warning-700/40 dark:bg-warning-500/10",
    icon: (
      <IconAlertTriangleFilled
        size={16}
        className="text-warning-700 dark:text-warning-500"
        aria-hidden
      />
    ),
    titleDefault: "Atención",
  },
  danger: {
    wrap: "border-danger-100 bg-danger-100/40 dark:border-danger-700/40 dark:bg-danger-500/10",
    icon: (
      <IconCircleXFilled
        size={16}
        className="text-danger-700 dark:text-danger-500"
        aria-hidden
      />
    ),
    titleDefault: "Crítico",
  },
  do: {
    wrap: "border-success-100 bg-success-100/30 dark:border-success-700/30 dark:bg-success-500/5",
    icon: (
      <IconCircleCheckFilled
        size={16}
        className="text-success-700 dark:text-success-500"
        aria-hidden
      />
    ),
    titleDefault: "Cuándo usar",
  },
  dont: {
    wrap: "border-danger-100 bg-danger-100/30 dark:border-danger-700/30 dark:bg-danger-500/5",
    icon: (
      <IconCircleXFilled
        size={16}
        className="text-danger-700 dark:text-danger-500"
        aria-hidden
      />
    ),
    titleDefault: "Cuándo NO usar",
  },
};

export function Callout({ variant = "info", title, children, className }: CalloutProps) {
  const style = styles[variant];
  return (
    <div
      className={cn(
        "not-prose my-6 rounded-md border px-5 py-4 text-sm",
        style.wrap,
        className,
      )}
    >
      <div className="flex items-start gap-2.5">
        <span className="flex h-5 shrink-0 items-center">{style.icon}</span>
        <div className="min-w-0 flex-1">
          <p className="mb-1.5 text-sm font-semibold leading-5 text-text">
            {title ?? style.titleDefault}
          </p>
          <div className="text-text-secondary">{children}</div>
        </div>
      </div>
    </div>
  );
}
