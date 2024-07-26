import React from "react";
import Navbar from "@/components/navbar";
import { Recursive } from 'next/font/google'
import "./globals.css";

const recursive = Recursive({ subsets: ['latin'] })

export default function RootLayout({children}:Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className}`}>
        <Navbar />
        <main>
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
