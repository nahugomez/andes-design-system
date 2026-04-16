# Cumbre

**Design System de AndesIA** — tokens, componentes y patrones para construir
interfaces coherentes, accesibles y con carácter propio en todos los productos
de AndesIA.

Este repositorio contiene:

1. **La librería** (`@andesia/cumbre`) — componentes React + Tailwind preset +
   CSS tokens, consumibles desde cualquier proyecto AndesIA.
2. **El sitio de documentación** (Next.js App Router) — la vidriera pública del
   sistema, con fundaciones, componentes y guías de uso.

---

## Requisitos

- Node.js `>=18.17`
- React `^18` o `^19`
- Next.js `^14` (recomendado) o Vite + React
- Tailwind CSS `^3.4`

## Instalación en un proyecto AndesIA

```bash
npm install @andesia/cumbre
```

1. Importá la hoja de tokens en el entry de tu app:

```ts
// app/layout.tsx (Next.js) o main.tsx (Vite)
import "@andesia/cumbre/styles.css";
```

2. Aplicá el preset de Tailwind:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import { cumbrePreset } from "@andesia/cumbre/tailwind-preset";

export default {
  darkMode: "class",
  presets: [cumbrePreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@andesia/cumbre/dist/**/*.js",
  ],
} satisfies Config;
```

3. (Opcional) Envolvé tu app con `ThemeProvider` para soporte de dark mode:

```tsx
import { ThemeProvider } from "@andesia/cumbre";

<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
  {children}
</ThemeProvider>;
```

4. Usá los componentes:

```tsx
import { Button, Card, CardHeader, CardTitle } from "@andesia/cumbre";
```

Guía completa en [`/docs/instalacion`](./app/docs/instalacion/page.mdx).

---

## Desarrollo local

```bash
# Instalar deps
npm install

# Correr el docs site (http://localhost:3000)
npm run dev

# Type check
npm run type-check

# Bundlear la librería para distribución (dist/)
npm run build:lib

# Build del site de docs (producción)
npm run build:site
```

## Estructura

```
.
├── app/                        # Next.js docs site
│   ├── docs/                   # Páginas MDX de documentación
│   ├── layout.tsx
│   ├── page.tsx                # Landing
│   └── globals.css             # CSS del docs site (incluye Tailwind directives)
├── src/
│   ├── components/
│   │   ├── ui/                 # Componentes del DS (se exportan)
│   │   ├── brand/              # Logo y marca (se exporta)
│   │   ├── layouts/            # Layouts del docs site (NO se exporta)
│   │   ├── docs/               # Helpers MDX (NO se exporta)
│   │   └── providers/          # ThemeProvider (se exporta)
│   ├── tokens/
│   │   ├── tokens.css          # CSS variables → dist/styles.css
│   │   └── preset.ts           # Tailwind preset → dist/tailwind-preset.*
│   ├── lib/
│   │   ├── utils.ts            # cn() helper
│   │   └── navigation.ts
│   └── index.ts                # Barrel de exports de la librería
├── tailwind.config.ts          # Config del docs site
├── tsup.config.ts              # Config de bundle de librería
└── package.json
```

## Principios

1. Concepto antes que código.
2. Precisión sobre decoración.
3. Jerarquía por contraste, no por color.
4. Accesibilidad (WCAG 2.1 AA) como línea base.
5. Coherencia sobre individualidad.

Ver [`/docs/principios`](./app/docs/principios/page.mdx) para el detalle.

## Versionado

Semantic Versioning. Los tokens y APIs públicas de componentes son contrato.
Cambios breaking → major bump con notas de migración.

## Licencia

Uso interno AndesIA. No distribuir fuera de la organización sin autorización.
