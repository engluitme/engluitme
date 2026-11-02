import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eng Lui — Software Engineer & Technopreneur",
  description:
    "The portfolio of Eng Lui, Software Engineer, technopreneur, and Founder and CEO of The Market Engineers.",
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
