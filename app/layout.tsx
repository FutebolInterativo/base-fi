import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
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
  title: "Base FI — Entre no mercado do futebol em 30 dias",
  description:
    "A formação do Futebol Interativo que mostra como clubes e empresas do setor realmente contratam — e o caminho exato pra sua primeira oportunidade. Com certificado de conclusão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060A14] text-white">
        <div className="grain-fixed" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
