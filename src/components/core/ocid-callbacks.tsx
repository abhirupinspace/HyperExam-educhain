"use client"

import type { ReactNode } from "react"
import { LoginCallBack, useOCAuth } from "@opencampus/ocid-connect-js"

interface OCIDCallbackProps {
  successCallback: () => void
  errorCallback?: (error: Error) => void
  customLoadingComponent?: ReactNode
  customErrorComponent?: ReactNode
}

function DefaultLoadingComponent() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
    </div>
  )
}

function DefaultErrorComponent() {
  const { authState } = useOCAuth()

  return (
    <div className="p-4 bg-destructive/10 text-destructive rounded-md">
      Error logging in: {authState.error?.message || "Unknown error"}
    </div>
  )
}

export default function OCIDCallback({
  successCallback,
  errorCallback,
  customLoadingComponent,
  customErrorComponent,
}: OCIDCallbackProps) {
  const LoadingComponent = customLoadingComponent || <DefaultLoadingComponent />
  const ErrorComponent = customErrorComponent || <DefaultErrorComponent />

  return (
    <LoginCallBack
      successCallback={successCallback}
      errorCallback={errorCallback}
      customLoadingComponent={LoadingComponent}
      customErrorComponent={ErrorComponent}
    />
  )
}

