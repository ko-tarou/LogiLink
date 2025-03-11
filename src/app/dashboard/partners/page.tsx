import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SupplyChainFlow } from "@/components/supply-chain-flow"
import { BackToDashboard } from "@/components/back-to-dashboard"

export default function PartnersPage() {
  return (
    <div className="container mx-auto max-w-6xl py-10">
      <BackToDashboard />
      <h1 className="text-3xl font-bold mb-6">取引先</h1>
      <Card>
        <CardHeader>
          <CardTitle>サプライチェーンネットワーク</CardTitle>
          <CardDescription>取引先企業の一覧とサプライチェーンの可視化を提供します。</CardDescription>
        </CardHeader>
        <CardContent>
          <SupplyChainFlow />
        </CardContent>
      </Card>
    </div>
  )
}

