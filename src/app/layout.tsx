import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SonnerProvider } from "@/components/sonner-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LogiLink - 物流業界のためのSNSプラットフォーム",
  description: "LogiLinkは、サプライチェーン全体の企業をつなぎ、情報の流れをスムーズにするプラットフォームです。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SonnerProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

