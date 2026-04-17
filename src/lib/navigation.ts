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
      { title: "Colores", href: "/docs/fundaciones/colores" },
      { title: "Tipografía", href: "/docs/fundaciones/tipografia" },
      { title: "Iconos", href: "/docs/fundaciones/iconos" },
      { title: "Espaciado", href: "/docs/fundaciones/espaciado" },
      { title: "Bordes y radios", href: "/docs/fundaciones/bordes" },
      { title: "Sombras y elevación", href: "/docs/fundaciones/sombras" },
      { title: "Movimiento", href: "/docs/fundaciones/movimiento" },
      { title: "Breakpoints", href: "/docs/fundaciones/breakpoints" },
    ],
  },
  {
    title: "Patrones",
    items: [
      { title: "Layout y grillas", href: "/docs/patrones/layout" },
      { title: "Navegación", href: "/docs/patrones/navegacion" },
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
      { title: "Button", href: "/docs/componentes/button" },
      { title: "Input", href: "/docs/componentes/input" },
      { title: "Checkbox", href: "/docs/componentes/checkbox" },
      { title: "Badge", href: "/docs/componentes/badge" },
    ],
  },
  {
    title: "Componentes · Moléculas",
    items: [{ title: "Card", href: "/docs/componentes/card" }],
  },
];
