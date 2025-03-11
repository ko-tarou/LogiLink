import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function BackToDashboard() {
  return (
    <Button variant="ghost" asChild className="mb-4">
      <Link href="/dashboard" className="flex items-center">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ダッシュボードに戻る
      </Link>
    </Button>
  )
}