import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis Feliciano | Software Developer",
  description:
    "Portfolio website for Luis Feliciano, a software developer focused on elegant and intuitive digital experiences.",
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
