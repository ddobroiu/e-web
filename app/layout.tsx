import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e-Web - Aplicații Web, Site-uri & Chatboți | Dezvoltare Digitală Profesională",
  description: "Specializați în aplicații web custom, site-uri moderne, magazine online complete și chatboți inteligenti. Soluții digitale inovatoare care accelerează business-ul tău. Expertiză, calitate și rezultate garantate.",
  keywords: "aplicații web, site-uri web, magazine online, chatboți WhatsApp, dezvoltare web, e-commerce, soluții digitale, România",
  authors: [{ name: "e-Web Team" }],
  creator: "e-Web",
  publisher: "e-Web",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "e-Web - Soluții Digitale Complete pentru Business",
    description: "Aplicații web, site-uri moderne, magazine online și chatboți inteligenti. Transformăm ideile în succes digital.",
    url: "https://e-web.ro",
    siteName: "e-Web",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "e-Web - Dezvoltare Digitală Profesională",
    description: "Specializați în aplicații web, site-uri, magazine online și chatboți. Soluții digitale inovatoare pentru business-ul tău.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
