import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/sections.css";

/*
 * Plus Jakarta Sans servida do próprio projeto (src/fonts, licença OFL).
 * Antes vinha de next/font/google, que baixa a fonte do Google durante o build
 * e quebrava a compilação quando esse download falhava.
 */
const jakarta = localFont({
  src: [
    { path: "../fonts/PlusJakartaSans-Variable.woff2", weight: "200 800", style: "normal" },
    { path: "../fonts/PlusJakartaSans-Variable-Italic.woff2", weight: "200 800", style: "italic" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.ogDescription,
    locale: "pt_BR",
    type: "website",
    url: "/",
    siteName: site.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mesa com pratos coloridos e alimentos frescos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.ogDescription,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1d4733",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  sameAs: [site.links.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={jakarta.variable} suppressHydrationWarning>
      <head>
        {/* Sem JS, o conteúdo aparece direto: as revelações só ativam com a classe .js */}
        <script dangerouslySetInnerHTML={{ __html: "var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('jt-intro')){d.classList.add('intro-seen')}else{d.classList.add('intro-on');sessionStorage.setItem('jt-intro','1')}}catch(e){d.classList.add('intro-on')}" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
