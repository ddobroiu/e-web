import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții - e-Web | Contracte & Servicii Dezvoltare Web",
  description: "Termenii și condițiile pentru serviciile e-Web. Contracte, responsabilități, garantii și condiții de utilizare conform legislației române.",
};

export default function TermeniConditiiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}