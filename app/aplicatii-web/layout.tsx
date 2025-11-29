import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplicații Web Custom - Dezvoltare Platforme Enterprise | e-Web",
  description: "Creăm aplicații web personalizate cu arhitectură robustă, API-uri moderne și interfețe intuitive. Soluții enterprise adaptate perfect nevoilor tale.",
};

export default function AplicatiiWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}