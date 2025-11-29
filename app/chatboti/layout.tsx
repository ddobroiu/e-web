import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatboți Inteligenti - e-Web | WhatsApp & Live Chat Automatizat",
  description: "Dezvoltăm chatboți inteligenti pentru WhatsApp și site-uri web. Automatizează conversațiile, crește satisfacția clienților și economisește timp prețios.",
};

export default function ChatbotiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}