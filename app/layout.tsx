import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Dra. Ana Carolina | Cirurgiã-Dentista", description: "Atendimento odontológico acolhedor, com planejamento individual e cuidado em cada detalhe.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
