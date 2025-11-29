import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magazine Online Complete - e-Web | E-commerce Performant & Securizat",
  description: "Construim magazine online complete cu sisteme de plată securizate, gestionare stocuri și design convertibil. Soluții e-commerce care generează vânzări reale.",
};

export default function MagazineOnlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}