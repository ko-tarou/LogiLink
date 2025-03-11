import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, MessageSquare, Users, Package, Truck, Factory, BarChart3, Plus } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { SupplyChainFlow } from "@/components/supply-chain-flow"
import { ChatList } from "@/components/chat-list"
import { OrderForm } from "@/components/order-form"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">ダッシュボード</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                通知
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                新規注文
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">概要</TabsTrigger>
              <TabsTrigger value="supply-chain">サプライチェーン</TabsTrigger>
              <TabsTrigger value="messages">メッセージ</TabsTrigger>
              <TabsTrigger value="orders">注文管理</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">取引先企業</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">先月から+3社</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">進行中の注文</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">23</div>
                    <p className="text-xs text-muted-foreground">先週から+5件</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">未読メッセージ</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">今日+3件</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">完了した注文</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">今月の合計</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>最近のアクティビティ</CardTitle>
                    <CardDescription>過去7日間のサプライチェーンアクティビティ</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 rounded-lg border p-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Package className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">新規注文 #1234</p>
                          <p className="text-xs text-muted-foreground">山田製造株式会社から新しい注文がありました</p>
                        </div>
                        <div className="text-xs text-muted-foreground">2時間前</div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Truck className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">配送状況更新</p>
                          <p className="text-xs text-muted-foreground">注文 #1230 が配送中になりました</p>
                        </div>
                        <div className="text-xs text-muted-foreground">5時間前</div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">新規メッセージ</p>
                          <p className="text-xs text-muted-foreground">佐藤物流株式会社からメッセージがあります</p>
                        </div>
                        <div className="text-xs text-muted-foreground">昨日</div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Factory className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">生産完了</p>
                          <p className="text-xs text-muted-foreground">注文 #1228 の生産が完了しました</p>
                        </div>
                        <div className="text-xs text-muted-foreground">2日前</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>取引先企業</CardTitle>
                    <CardDescription>あなたのサプライチェーンネットワーク</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-blue-100 p-2">
                          <Package className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">鈴木材料株式会社</p>
                          <p className="text-xs text-muted-foreground">材料サプライヤー</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-amber-100 p-2">
                          <Factory className="h-4 w-4 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">山田製造株式会社</p>
                          <p className="text-xs text-muted-foreground">製造会社</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-green-100 p-2">
                          <Truck className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">佐藤物流株式会社</p>
                          <p className="text-xs text-muted-foreground">販売会社</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-blue-100 p-2">
                          <Package className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">高橋素材株式会社</p>
                          <p className="text-xs text-muted-foreground">材料サプライヤー</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-center">
                        <Button variant="link" size="sm">
                          すべての取引先を表示
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="supply-chain">
              <Card>
                <CardHeader>
                  <CardTitle>サプライチェーンフロー</CardTitle>
                  <CardDescription>材料の流れに沿った企業の表示</CardDescription>
                </CardHeader>
                <CardContent>
                  <SupplyChainFlow />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>メッセージ</CardTitle>
                  <CardDescription>取引先とのコミュニケーション</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChatList />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>注文管理</CardTitle>
                  <CardDescription>注文の作成と管理</CardDescription>
                </CardHeader>
                <CardContent>
                  <OrderForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

