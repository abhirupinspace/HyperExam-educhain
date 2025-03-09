"use client"

import type { ReactNode } from "react"
import { OCConnect } from "@opencampus/ocid-connect-js"

interface OCIDAuthProviderProps {
  children: ReactNode
  redirectUri: string
  referralCode?: string
  domain?: string
  sameSite?: boolean
  sandboxMode?: boolean
}

export default function OCIDAuthProvider({
  children,
  redirectUri,
  referralCode = "PARTNER6",
  domain,
  sameSite,
  sandboxMode = true,
}: OCIDAuthProviderProps) {
  const opts = {
    redirectUri,
    referralCode,
    domain,
    sameSite,
  }

  return (
    <OCConnect opts={opts} sandboxMode={sandboxMode}>
      {children}
    </OCConnect>
  )
}

