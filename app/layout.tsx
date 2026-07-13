import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campus Contact Book",
  description: "研究室向けの架空連絡先管理デモ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
