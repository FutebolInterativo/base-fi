import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Base FI — Aprenda a construir sua carreira no mercado do futebol",
  description:
    "Formação 100% online e prática para entrar ou crescer no mercado do futebol em 30 dias. Linguagem técnica, cases reais e networking com profissionais da indústria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060A14] text-white">
        <div className="grain-fixed" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
