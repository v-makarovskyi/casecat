import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Recursive } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${recursive.className}`}>
        <Navbar />
        <main className="flex flex-col grainy-light min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
