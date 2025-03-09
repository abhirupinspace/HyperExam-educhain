"use client"

import { useRouter } from "next/navigation"
import OCIDCallback from "@/components/core/ocid-callbacks"

export default function RedirectPage() {
  const router = useRouter()

  const handleLoginSuccess = () => {
    router.push("/")
  }

  const handleLoginError = (error: Error) => {
    console.error("Login error:", error)
    // You could redirect to an error page or handle the error differently
  }

  return (
    <div className="container mx-auto py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Completing Login</h1>
      <OCIDCallback successCallback={handleLoginSuccess} errorCallback={handleLoginError} />
    </div>
  )
}

