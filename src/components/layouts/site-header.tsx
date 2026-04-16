import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        "border-b border-border bg-background/80 backdrop-blur-md backdrop-saturate-150",
        className,
      )}
    >
      <div className="container flex h-16 items-center gap-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:shadow-focus"
          aria-label="Cumbre · Inicio"
        >
          <Logo withWordmark size={26} />
          <span
            aria-hidden
            className="hidden text-2xs uppercase tracking-[0.18em] text-text-tertiary sm:inline"
          >
            v0.1 · AndesIA
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-6 text-sm font-medium text-text-secondary md:flex">
          <Link
            href="/docs"
            className="transition-colors duration-fast ease-precise hover:text-text"
          >
            Documentación
          </Link>
          <Link
            href="/docs/foundations/colores"
            className="transition-colors duration-fast ease-precise hover:text-text"
          >
            Fundaciones
          </Link>
          <Link
            href="/docs/components/button"
            className="transition-colors duration-fast ease-precise hover:text-text"
          >
            Componentes
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
