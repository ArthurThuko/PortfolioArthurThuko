import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio Arthur/Thuko",
  description:
    "Portfólio pessoal de Arthur/Thuko, desenvolvedor web, mobile, desktop e entusiasta de tecnologia. Explore meus projetos, habilidades e experiências profissionais. Bem-vindo ao meu espaço digital!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
