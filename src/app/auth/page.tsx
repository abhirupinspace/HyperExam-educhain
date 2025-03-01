"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || "student"
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)
    // Simulate OCID authentication
    setTimeout(() => {
      setIsLoading(false)
      if (role === "institution") {
        router.push("/institution/dashboard")
      } else {
        router.push("/student/dashboard")
      }
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 p-4">
      <div className="absolute top-8 left-8 flex items-center gap-2 font-bold text-xl">
        <Shield className="h-6 w-6 text-primary" />
        <span>HyperExam</span>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Connect with OCID</CardTitle>
          <CardDescription>Use your Open Campus ID to access the HyperExam platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg?height=40&width=40" alt="OCID Logo" className="h-10 w-10" />
                <span className="text-lg font-medium">Open Campus ID</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Secure, decentralized authentication for educational platforms
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <div className="flex-1 h-px bg-muted"></div>
              <span className="px-2 text-sm text-muted-foreground">Login as</span>
              <div className="flex-1 h-px bg-muted"></div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={role === "student" ? "default" : "outline"}
                className="w-full"
                onClick={() => router.push("/auth?role=student")}
              >
                Student
              </Button>
              <Button
                variant={role === "institution" ? "default" : "outline"}
                className="w-full"
                onClick={() => router.push("/auth?role=institution")}
              >
                Institution
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg" onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Connecting..." : "Connect"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

