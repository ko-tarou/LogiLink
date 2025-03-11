import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OrderForm } from "@/components/order-form"
import { BackToDashboard } from "@/components/back-to-dashboard"

export default function OrdersPage() {
  return (
    <div className="container mx-auto max-w-6xl py-10">
      <BackToDashboard />
      <h1 className="text-3xl font-bold mb-6">注文管理</h1>
      <Card>
        <CardHeader>
          <CardTitle>注文の作成と管理</CardTitle>
          <CardDescription>新規注文の作成、既存注文の管理、注文履歴の確認ができます。</CardDescription>
        </CardHeader>
        <CardContent>
          <OrderForm />
        </CardContent>
      </Card>
    </div>
  )
}

