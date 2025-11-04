import type { Metadata } from "next";
import { Fira_Sans, Inter } from "next/font/google";
import "./globals.css";

const fira = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Caterpillar | Metamorphosis Explorer",
  description:
    "Dive into the lifecycle of a caterpillar with immersive visuals, timelines, and interactive learning moments."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fira.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
