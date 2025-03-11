import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BackToDashboard } from "@/components/back-to-dashboard"

export default function ReportsPage() {
  return (
    <div className="container mx-auto max-w-6xl py-10">
      <BackToDashboard />
      <h1 className="text-3xl font-bold mb-6">レポート</h1>
      <Card>
        <CardHeader>
          <CardTitle>分析とレポート</CardTitle>
          <CardDescription>取引データの分析、パフォーマンス指標、トレンド予測を提供します。</CardDescription>
        </CardHeader>
        <CardContent>
          <p>レポート機能は現在開発中です。今後のアップデートをお待ちください。</p>
        </CardContent>
      </Card>
    </div>
  )
}

