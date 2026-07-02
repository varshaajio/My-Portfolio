import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 inline-block rounded-full border border-border px-4 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Error 404
        </div>
        <h1 className="text-7xl font-bold grad-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This route doesn't exist. Let's get you back to the portfolio.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;if(d)document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0b0f1a" },
      { title: "Varshaa S B — Full Stack Developer (MERN, Java) & GenAI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Varshaa S B — Full Stack Developer specialising in MERN, TypeScript, Java, AWS, and GenAI. IT undergraduate at Vellalar College for Women. Open to internships and freelance.",
      },
      {
        name: "keywords",
        content:
          "Varshaa S B, Full Stack Developer, MERN, Java, GenAI, LangChain, AWS, Cloud, Portfolio, Software Engineer",
      },
      { name: "author", content: "Varshaa S B" },
      { property: "og:title", content: "Varshaa S B — Full Stack Developer (MERN, Java) & GenAI Engineer" },
      {
        property: "og:description",
        content:
          "MERN + Java Full Stack Developer, AWS & Cloud enthusiast, GenAI practitioner. Building intelligent, scalable software.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Varshaa S B" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Varshaa S B — Full Stack Developer (MERN, Java) & GenAI Engineer" },
      {
        name: "twitter:description",
        content: "MERN + Java Full Stack Developer, AWS & Cloud enthusiast, GenAI practitioner.",
      },
      { name: "description", content: "Full-Stack Developer specialized in MERN stack & Cloud hosting. Actively contributing freelance services to clients." },
      { property: "og:description", content: "Full-Stack Developer specialized in MERN stack & Cloud hosting. Actively contributing freelance services to clients." },
      { name: "twitter:description", content: "Full-Stack Developer specialized in MERN stack & Cloud hosting. Actively contributing freelance services to clients." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cd692e51-ba11-48ea-87d2-164d81b51ff0/id-preview-ef5f0e06--88ee2e2a-dd05-4fe2-a618-7911e6182da5.lovable.app-1783003167920.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cd692e51-ba11-48ea-87d2-164d81b51ff0/id-preview-ef5f0e06--88ee2e2a-dd05-4fe2-a618-7911e6182da5.lovable.app-1783003167920.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      { children: themeInit },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Varshaa S B",
          jobTitle: "Full Stack Developer (MERN & Java) | GenAI Engineer",
          email: "mailto:varshaajio@gmail.com",
          url: "/",
          sameAs: ["https://www.linkedin.com/in/varshaajio/"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Erode",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Vellalar College for Women",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
