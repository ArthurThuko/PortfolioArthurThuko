import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import FundoDinamico from "@/components/FundoDinamico";

export const metadata: Metadata = {
  title: "Portfólio Arthur/Thuko",
  description:
    "Portfólio pessoal de Arthur/Thuko, desenvolvedor web, mobile, desktop e entusiasta de tecnologia. Explore meus projetos, habilidades e experiências profissionais. Bem-vindo ao meu espaço digital!",
};

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-Regular.ttf",
      weight: "400",
    },
        {
      path: "../public/fonts/Inter-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-inter",
});

const firaCode = localFont({
  src: [
    {
      path: "../public/fonts/FiraCode-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${inter.variable} ${firaCode.variable}`}
      >
        <FundoDinamico />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
