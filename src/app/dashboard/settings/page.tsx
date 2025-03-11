import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BackToDashboard } from "@/components/back-to-dashboard"

export default function SettingsPage() {
  return (
    <div className="container mx-auto max-w-6xl py-10">
      <BackToDashboard />
      <h1 className="text-3xl font-bold mb-6">設定</h1>
      <Card>
        <CardHeader>
          <CardTitle>アカウント設定</CardTitle>
          <CardDescription>プロフィール情報、通知設定、セキュリティ設定を管理します。</CardDescription>
        </CardHeader>
        <CardContent>
          <p>設定機能は現在開発中です。今後のアップデートをお待ちください。</p>
        </CardContent>
      </Card>
    </div>
  )
}

