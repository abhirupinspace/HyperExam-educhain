"use client"

import { useOCAuth } from "@opencampus/ocid-connect-js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface OCIDUserProfileProps {
  title?: string
  description?: string
  className?: string
}

export default function OCIDUserProfile({
  title = "User Profile",
  description = "Your OpenCampus ID information",
  className = "",
}: OCIDUserProfileProps) {
  const { isInitialized, authState, OCId, ethAddress } = useOCAuth()

  if (!isInitialized) {
    return <ProfileSkeleton />
  }

  if (authState.error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-destructive/10 text-destructive rounded-md">
            Error: {authState.error.message || "Unknown error"}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!authState.isAuthenticated) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>You are not logged in.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">OpenCampus ID</h4>
            <p className="text-sm bg-muted p-2 rounded-md overflow-x-auto">{OCId}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">ETH Address</h4>
            <p className="text-sm bg-muted p-2 rounded-md overflow-x-auto">{ethAddress}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ProfileSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-[150px]" />
        <Skeleton className="h-4 w-[250px]" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Skeleton className="h-4 w-[100px] mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-[100px] mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

