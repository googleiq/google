import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google",
  description: "Search the world's information",
  icons: {
    icon: "https://www.google.com/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
