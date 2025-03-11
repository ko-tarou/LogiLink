import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BackToDashboard } from "@/components/back-to-dashboard"

export default function ShippingPage() {
  return (
    <div className="container mx-auto max-w-6xl py-10">
      <BackToDashboard />
      <h1 className="text-3xl font-bold mb-6">配送</h1>
      <Card>
        <CardHeader>
          <CardTitle>配送管理</CardTitle>
          <CardDescription>配送スケジュール、ルート最適化、配送状況のリアルタイム追跡を管理します。</CardDescription>
        </CardHeader>
        <CardContent>
          <p>配送管理機能は現在開発中です。今後のアップデートをお待ちください。</p>
        </CardContent>
      </Card>
    </div>
  )
}

