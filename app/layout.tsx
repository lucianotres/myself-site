"use client";

import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head />

      <body className="dark:bg-black">
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


