import Link from "next/link";
import { ArrowUpRight, Check, Mail, Search, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FoundationsStrip />
        <ComponentsShowcase />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ─────────────────────────────────────────────── HERO ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Marca geométrica sutil: una sola línea vertical ámbar en el lado izquierdo */}
      <div
        aria-hidden
        className="absolute left-0 top-0 h-40 w-px bg-gradient-to-b from-accent-500 via-accent-500/40 to-transparent md:h-60"
      />
      {/* Retícula decorativa extremadamente sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative grid gap-16 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:py-36">
        <div className="relative max-w-3xl">
          <div className="mb-10 flex items-center gap-3 text-2xs uppercase tracking-[0.22em] text-text-tertiary">
            <span className="font-mono">01</span>
            <span className="h-px w-8 bg-border-strong" />
            <span>Design System · AndesIA</span>
          </div>

          <h1 className="max-w-[14ch] text-balance text-5xl font-light leading-[0.95] tracking-[-0.045em] text-text md:text-6xl lg:text-7xl">
            La base sobre la que construimos{" "}
            <em className="font-medium italic tracking-[-0.05em] text-accent-600 dark:text-accent-400">
              lo esencial
            </em>
            .
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Cumbre es el sistema de diseño de <strong className="font-medium text-text">AndesIA</strong>:
            tokens, componentes y patrones con la precisión que nuestros
            productos exigen. Consistencia sin fricción. Carácter sin ruido.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/docs" className="group">
                Explorar documentación
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform duration-base ease-expressive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/docs/foundations/colores">Ver fundaciones</Link>
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-6 text-xs text-text-tertiary">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-success-500" />
              <span>v0.1 · en desarrollo activo</span>
            </div>
            <div className="hidden h-4 w-px bg-border md:block" />
            <div className="hidden items-center gap-2 md:flex">
              <Check className="size-3.5 text-success-500" aria-hidden />
              <span>WCAG 2.1 AA</span>
            </div>
            <div className="hidden h-4 w-px bg-border md:block" />
            <div className="hidden items-center gap-2 md:flex">
              <Check className="size-3.5 text-success-500" aria-hidden />
              <span>Dark mode</span>
            </div>
          </div>
        </div>

        {/* Panel de sample cards a la derecha */}
        <div className="relative hidden lg:flex lg:items-center lg:justify-center">
          <div className="relative w-full max-w-sm">
            <Card variant="elevated" accent="top" className="rotate-[-1deg]">
              <CardHeader>
                <Badge variant="accent" size="sm" dot className="self-start">
                  Destacado
                </Badge>
                <CardTitle className="mt-2">Expediente N° 4287</CardTitle>
                <CardDescription>
                  Licitación pública pendiente de aprobación.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-md bg-primary-100 dark:bg-primary-800/40" />
                <div className="text-sm">
                  <p className="font-medium text-text">María Fernández</p>
                  <p className="text-text-tertiary">Aprobadora · Rango 3</p>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Badge variant="success" dot>
                  En revisión
                </Badge>
                <Button size="sm" variant="ghost">
                  Ver detalle
                </Button>
              </CardFooter>
            </Card>

            <Card
              variant="default"
              className="absolute -bottom-10 -left-10 w-64 rotate-[2deg] p-5 shadow-xl"
            >
              <div className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-accent-500/15 text-accent-700 dark:text-accent-400">
                  <Sparkles className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text">Sugerencia IA</p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Detectamos 3 expedientes similares en los últimos 30 días.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────── FOUNDATIONS STRIP ──────────────────────────────────────── */
function FoundationsStrip() {
  const tones = [
    { name: "primary-800", label: "#17203F", class: "bg-primary-800" },
    { name: "primary-600", label: "600", class: "bg-primary-600" },
    { name: "primary-400", label: "400", class: "bg-primary-400" },
    { name: "primary-200", label: "200", class: "bg-primary-200" },
    { name: "accent-500", label: "ámbar", class: "bg-accent-500" },
    { name: "success-500", label: "ok", class: "bg-success-500" },
    { name: "danger-500", label: "err", class: "bg-danger-500" },
    { name: "neutral-900", label: "900", class: "bg-neutral-900" },
    { name: "neutral-500", label: "500", class: "bg-neutral-500" },
    { name: "neutral-200", label: "200", class: "bg-neutral-200" },
  ];

  return (
    <section className="border-b border-border bg-surface-subtle/40">
      <div className="container py-16 md:py-24">
        <div className="flex items-end justify-between gap-8 pb-10">
          <div>
            <p className="mb-3 text-2xs font-mono uppercase tracking-[0.2em] text-text-tertiary">
              02 · Fundaciones
            </p>
            <h2 className="max-w-[18ch] text-balance text-3xl font-light leading-[1.05] tracking-[-0.035em] text-text md:text-5xl">
              Tokens primero.{" "}
              <em className="font-light italic text-text-secondary">
                Todo lo demás
              </em>{" "}
              viene después.
            </h2>
          </div>
          <Link
            href="/docs/foundations/colores"
            className="hidden items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text md:inline-flex"
          >
            Ver todas
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-10">
          {tones.map((tone) => (
            <div
              key={tone.name}
              className="group flex flex-col bg-background"
              title={tone.name}
            >
              <div className={`${tone.class} h-20`} />
              <div className="px-2 py-2">
                <p className="truncate text-2xs font-mono text-text-tertiary">
                  {tone.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FoundationCard
            number="A"
            title="Tipografía"
            description="Geist Sans + Fraunces Display. Jerarquía por tamaño, no por color."
            href="/docs/foundations/tipografia"
          />
          <FoundationCard
            number="B"
            title="Espaciado"
            description="Base 4 con escala armónica. Ritmo vertical consistente."
            href="/docs/foundations/espaciado"
          />
          <FoundationCard
            number="C"
            title="Elevación"
            description="Sombras tintadas con navy para coherencia cromática."
            href="/docs/foundations/sombras"
          />
          <FoundationCard
            number="D"
            title="Movimiento"
            description="Easings expresivos. Duración honesta con la acción."
            href="/docs/foundations/movimiento"
          />
        </div>
      </div>
    </section>
  );
}

function FoundationCard({
  number,
  title,
  description,
  href,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-lg border border-border bg-surface p-5 transition-all duration-base ease-precise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
    >
      <div>
        <span className="font-mono text-2xs uppercase tracking-widest text-text-tertiary">
          {number}
        </span>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-text">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary">{description}</p>
      </div>
      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors group-hover:text-accent-600 dark:group-hover:text-accent-400">
        Explorar
        <ArrowUpRight className="size-3.5 transition-transform duration-base ease-expressive group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────── COMPONENTS SHOWCASE ─────────────────────────────────────── */
function ComponentsShowcase() {
  return (
    <section className="border-b border-border">
      <div className="container py-16 md:py-24">
        <div className="flex items-end justify-between gap-8 pb-10">
          <div>
            <p className="mb-3 text-2xs font-mono uppercase tracking-[0.2em] text-text-tertiary">
              03 · Componentes
            </p>
            <h2 className="max-w-[18ch] text-balance text-3xl font-light leading-[1.05] tracking-[-0.035em] text-text md:text-5xl">
              Cinco piezas.{" "}
              <em className="font-light italic text-text-secondary">
                Cada una pulida.
              </em>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="default" padding="md" className="lg:col-span-2">
            <p className="mb-4 text-2xs font-mono uppercase tracking-widest text-text-tertiary">
              Button · 6 variantes · 4 tamaños
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link →</Button>
              <Button loading>Guardando…</Button>
              <Button size="sm" leadingIcon={<Sparkles />}>Small</Button>
              <Button size="lg">Large</Button>
            </div>
          </Card>

          <Card variant="default" padding="md">
            <p className="mb-4 text-2xs font-mono uppercase tracking-widest text-text-tertiary">
              Input · Label · Hint · Error
            </p>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="demo-email" required>
                  Correo institucional
                </Label>
                <Input
                  id="demo-email"
                  type="email"
                  placeholder="tu.nombre@andesia.ar"
                  leadingIcon={<Mail />}
                  hint="Usá el correo oficial de tu organismo"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="demo-search" optional>
                  Buscar expediente
                </Label>
                <Input
                  id="demo-search"
                  placeholder="N° o palabra clave"
                  leadingIcon={<Search />}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="demo-error">Código de organismo</Label>
                <Input
                  id="demo-error"
                  defaultValue="XY-99"
                  error="Formato inválido. Usá AA-123."
                />
              </div>
            </div>
          </Card>

          <Card variant="default" padding="md">
            <p className="mb-4 text-2xs font-mono uppercase tracking-widest text-text-tertiary">
              Checkbox · Badge
            </p>
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox id="c1" defaultChecked />
                  <Label htmlFor="c1" className="cursor-pointer">
                    Notificar a aprobadores por email
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="c2" defaultChecked="indeterminate" />
                  <Label htmlFor="c2" className="cursor-pointer">
                    Incluir documentos adjuntos (parcial)
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="c3" />
                  <Label htmlFor="c3" className="cursor-pointer">
                    Habilitar firma digital automática
                  </Label>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 border-t border-border-subtle pt-4">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="accent" dot>
                  Accent
                </Badge>
                <Badge variant="success" dot>
                  Aprobado
                </Badge>
                <Badge variant="warning" dot>
                  Pendiente
                </Badge>
                <Badge variant="danger" dot>
                  Rechazado
                </Badge>
                <Badge variant="info">42 nuevos</Badge>
                <Badge variant="outline">Draft</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── CTA ─────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary-900 text-neutral-50">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent"
      />
      <div className="container relative grid gap-10 py-20 md:grid-cols-[1.5fr_1fr] md:py-28">
        <div>
          <p className="mb-3 text-2xs font-mono uppercase tracking-[0.2em] text-neutral-400">
            04 · Empezar
          </p>
          <h2 className="max-w-[16ch] text-balance text-4xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl">
            Instalá Cumbre y empezá a{" "}
            <em className="font-medium italic tracking-[-0.045em] text-accent-400">
              construir
            </em>
            .
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-4">
          <pre className="overflow-x-auto rounded-md border border-primary-700 bg-primary-950/60 p-4 font-mono text-xs text-neutral-200">
            <code>{`npm install @andesia/cumbre`}</code>
          </pre>
          <div className="flex flex-wrap gap-3">
            <Button variant="accent" asChild>
              <Link href="/docs/instalacion">Guía de instalación</Link>
            </Button>
            <Button variant="secondary" className="border-primary-700 bg-primary-800 text-neutral-100 hover:bg-primary-700" asChild>
              <Link href="/docs">Ver documentación</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
