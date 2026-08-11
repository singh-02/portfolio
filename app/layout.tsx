import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidhant Deep Singh | Portfolio",
  description:
    "Portfolio of Sidhant Deep Singh — IT Support, Software Development and Technical Operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}