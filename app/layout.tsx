import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vijaya Kumar S | UI Developer",
  description: "Portfolio website for Vijaya Kumar S, a UI Developer with 9+ years of front-end web development experience.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
