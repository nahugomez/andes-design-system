import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-subtle/30">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-text">
            Cumbre · Design System de AndesIA
          </p>
          <p className="text-xs text-text-tertiary">
            Construido con precisión para productos que importan.
          </p>
        </div>
        <div className="flex items-center gap-5 text-xs text-text-tertiary">
          <Link href="/docs" className="hover:text-text">
            Docs
          </Link>
          <Link href="/docs/fundaciones/colores" className="hover:text-text">
            Fundaciones
          </Link>
          <Link href="/docs/componentes/button" className="hover:text-text">
            Componentes
          </Link>
          <span className="text-2xs uppercase tracking-widest">v0.1.0</span>
        </div>
      </div>
    </footer>
  );
}
