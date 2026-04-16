import Link from "next/link";
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center py-16 md:py-24">
        <div className="container text-center">
          <p className="mb-6 font-mono text-2xs uppercase tracking-[0.22em] text-text-tertiary">
            Error 404
          </p>
          <h1 className="mx-auto max-w-[14ch] text-balance text-5xl font-light leading-[0.98] tracking-[-0.045em] text-text md:text-7xl">
            No encontramos{" "}
            <em className="font-medium italic tracking-[-0.05em] text-accent-600 dark:text-accent-400">
              esa página
            </em>
            .
          </h1>
          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-text-secondary">
            Puede que se haya movido o que nunca haya existido. Volvé al inicio
            o explorá la documentación.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/">Volver al inicio</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/docs">Ver documentación</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
