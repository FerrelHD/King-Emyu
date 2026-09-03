import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/Providers/SmoothScrollProvider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
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
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="bg-[#0A0A0A] text-[#FAFAFA] antialiased selection:bg-[#DA291C] selection:text-white">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
