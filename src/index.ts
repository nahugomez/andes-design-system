/**
 * @andesia/cumbre — Design System de AndesIA
 *
 * Barrel de exports para consumo externo. Importá solo lo que usás:
 *   import { Button, Card } from "@andesia/cumbre";
 */

// Utilities
export { cn } from "./lib/utils";

// Atoms
export { Button, buttonVariants, type ButtonProps } from "./components/ui/button";
export { Input, type InputProps } from "./components/ui/input";
export { Label, type LabelProps } from "./components/ui/label";
export { Checkbox, type CheckboxProps } from "./components/ui/checkbox";
export { Badge, badgeVariants, type BadgeProps } from "./components/ui/badge";

// Molecules
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
  type CardProps,
} from "./components/ui/card";

// Theme
export { ThemeProvider } from "./components/providers/theme-provider";
export { ThemeToggle } from "./components/ui/theme-toggle";

// Tailwind preset (para el consumer tailwind.config)
export { cumbrePreset } from "./tokens/preset";
