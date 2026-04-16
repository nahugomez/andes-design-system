import { SiteHeader } from "@/components/layouts/site-header";
import { SiteSidebar } from "@/components/layouts/site-sidebar";
import { SiteFooter } from "@/components/layouts/site-footer";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex gap-12">
        <SiteSidebar />
        <main className="min-w-0 flex-1 py-10 lg:py-14">
          <article className="prose-cumbre max-w-3xl">{children}</article>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
