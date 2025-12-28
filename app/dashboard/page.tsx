"use client"

import { Suspense } from "react"
import DashboardContent from "./dashboard-content"
import { Loader } from "lucide-react"

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center fade-in">
          <div className="glassmorphic p-8 rounded-2xl border-foreground/10 scale-in">
            <div className="flex items-center gap-3">
              <Loader className="w-5 h-5 text-foreground animate-spin" />
              <span className="text-foreground font-medium">Loading dashboard...</span>
            </div>
          </div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  )
}
