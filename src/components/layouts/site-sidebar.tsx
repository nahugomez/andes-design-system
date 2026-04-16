"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function SiteSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-60 shrink-0 overflow-y-auto border-r border-border bg-surface-subtle/40 lg:block">
      <nav className="px-6 py-8">
        {docsNavigation.map((section) => (
          <div key={section.title} className="mb-8 last:mb-0">
            <h4 className="mb-3 text-2xs font-semibold uppercase tracking-[0.15em] text-text-tertiary">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative block rounded-sm px-3 py-1.5 text-sm transition-colors duration-fast ease-precise",
                        active
                          ? "bg-surface-muted text-text"
                          : "text-text-secondary hover:bg-surface-muted/50 hover:text-text",
                      )}
                    >
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-y-1 left-0 w-0.5 bg-accent-500"
                        />
                      ) : null}
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
