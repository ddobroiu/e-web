import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site-uri Web Moderne - e-Web | Design Responsive & Performanță Optimă",
  description: "Dezvoltăm site-uri web moderne, responsive și optimizate SEO. Design atractiv, încărcare rapidă și experiență utilizator excepțională pentru afacerea ta.",
};

export default function SiteuriWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}