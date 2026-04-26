import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Client Project | Built by Matt2Build",
  description: "Premium website built with Next.js and modern tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
