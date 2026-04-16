export type NavItem = {
  title: string;
  href: string;
  description?: string;
  badge?: "nuevo" | "beta" | "próximamente";
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const docsNavigation: NavSection[] = [
  {
    title: "Introducción",
    items: [
      { title: "Qué es Cumbre", href: "/docs" },
      { title: "Principios de diseño", href: "/docs/principios" },
      { title: "Instalación", href: "/docs/instalacion" },
    ],
  },
  {
    title: "Fundaciones",
    items: [
      { title: "Colores", href: "/docs/foundations/colores" },
      { title: "Tipografía", href: "/docs/foundations/tipografia" },
      { title: "Iconos", href: "/docs/foundations/iconos" },
      { title: "Espaciado", href: "/docs/foundations/espaciado" },
      { title: "Bordes y radios", href: "/docs/foundations/bordes" },
      { title: "Sombras y elevación", href: "/docs/foundations/sombras" },
      { title: "Movimiento", href: "/docs/foundations/movimiento" },
      { title: "Breakpoints", href: "/docs/foundations/breakpoints" },
    ],
  },
  {
    title: "Patrones",
    items: [
      { title: "Layout y grillas", href: "/docs/patterns/layout" },
      { title: "Navegación", href: "/docs/patterns/navegacion" },
    ],
  },
  {
    title: "Escritura",
    items: [
      { title: "Voz y tono", href: "/docs/escritura/voz-y-tono" },
    ],
  },
  {
    title: "Componentes · Átomos",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Badge", href: "/docs/components/badge" },
    ],
  },
  {
    title: "Componentes · Moléculas",
    items: [{ title: "Card", href: "/docs/components/card" }],
  },
];
