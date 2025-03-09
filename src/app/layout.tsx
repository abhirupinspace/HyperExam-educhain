import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import OCIDAuthProvider from "@/components/provider/ocid-auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HyperExam - AI-Powered, Web3-Secured Online Exams",
  description: "Secure, transparent, and rewarding online examination platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
    <OCIDAuthProvider redirectUri="http://localhost:3000/redirect" referralCode="PARTNER6" sandboxMode={true}>

    {children}

</OCIDAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

