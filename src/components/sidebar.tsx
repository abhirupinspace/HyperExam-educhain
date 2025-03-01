"use client"

import { cn } from "@/lib/utils"
import { Award, BarChart, Calendar, FileText, Home, Settings, Shield, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

interface SidebarProps {
  role: "student" | "institution"
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()

  const studentLinks = [
    {
      title: "Dashboard",
      href: "/student/dashboard",
      icon: Home,
    },
    {
      title: "Upcoming Exams",
      href: "/student/exams/upcoming",
      icon: Calendar,
    },
    {
      title: "Past Exams",
      href: "/student/exams/past",
      icon: FileText,
    },
    {
      title: "Rewards & NFTs",
      href: "/student/rewards",
      icon: Award,
    },
  ]

  const institutionLinks = [
    {
      title: "Dashboard",
      href: "/institution/dashboard",
      icon: Home,
    },
    {
      title: "Create Exam",
      href: "/institution/exams/create",
      icon: FileText,
    },
    {
      title: "Monitor Exams",
      href: "/institution/exams/monitor",
      icon: Shield,
    },
    {
      title: "Results & Verification",
      href: "/institution/results",
      icon: BarChart,
    },
  ]

  const links = role === "student" ? studentLinks : institutionLinks

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link
          href={role === "student" ? "/student/dashboard" : "/institution/dashboard"}
          className="flex items-center gap-2 font-bold"
        >
          <Shield className="h-5 w-5 text-primary" />
          <span>HyperExam</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                pathname === link.href && "bg-muted font-medium text-foreground",
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">{role === "student" ? "John Doe" : "Acme University"}</p>
              <p className="text-xs text-muted-foreground">{role === "student" ? "Student" : "Institution"}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/settings">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

