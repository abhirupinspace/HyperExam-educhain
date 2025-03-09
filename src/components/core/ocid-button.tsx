"use client";

import { useState } from "react";
import { useOCAuth } from "@opencampus/ocid-connect-js";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface OCIDButtonProps {
  text?: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  state?: string;
  onLoginStart?: () => void;
  onLoginError?: (error: Error) => void;
}

export default function OCIDButton({
  text = "Login with OCID",
  className = "",
  variant = "default",
  size = "default",
  state = "opencampus",
  onLoginStart,
  onLoginError,
}: OCIDButtonProps) {
  const { ocAuth, isInitialized } = useOCAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!isInitialized) {
      console.warn("OCID SDK is not initialized yet");
      return;
    }

    try {
      setIsLoading(true);
      if (onLoginStart) onLoginStart();

      await ocAuth.signInWithRedirect({ state });
    } catch (error) {
      setIsLoading(false);
      console.error("Login error:", error);
      if (onLoginError && error instanceof Error) {
        onLoginError(error);
      }
    }
  };

  return (
    <Button
      onClick={handleLogin}
      disabled={isLoading || !isInitialized}
      variant={variant}
      size={size}
      className={className}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connecting...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
