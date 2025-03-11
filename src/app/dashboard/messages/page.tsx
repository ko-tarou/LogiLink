import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatList } from "@/components/chat-list"
import { BackToDashboard } from "@/components/back-to-dashboard"

export default function MessagesPage() {
  return (
    <div className="container mx-auto max-w-6xl py-10">
      <BackToDashboard />
      <h1 className="text-3xl font-bold mb-6">メッセージ</h1>
      <Card>
        <CardHeader>
          <CardTitle>取引先とのコミュニケーション</CardTitle>
          <CardDescription>メッセージを送受信し、取引先との効率的なコミュニケーションを実現します。</CardDescription>
        </CardHeader>
        <CardContent>
          <ChatList />
        </CardContent>
      </Card>
    </div>
  )
}

