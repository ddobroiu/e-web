import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate - e-Web | Protecția Datelor Personale",
  description: "Politica de confidențialitate e-Web conform GDPR. Cum colectăm, procesăm și protejăm datele tale personale în conformitate cu legislația română și europeană.",
};

export default function PoliticaConfidentialitatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}