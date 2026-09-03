import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/Providers/SmoothScrollProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Fergie Era — Manchester United (1986–2013) | An Editorial Retrospective",
  description: "An AWWWARDS-style interactive editorial chronicling Sir Alex Ferguson's 26-year dynasty, 38 trophies, and the transformation of modern football.",
  openGraph: {
    title: "The Fergie Era — Manchester United (1986–2013)",
    description: "26 Years. 38 Trophies. One Manager. An interactive scroll-driven chronicle of football's greatest dynasty.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-[#FAFAFA] antialiased selection:bg-[#DA291C] selection:text-white">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
