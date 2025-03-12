"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"
import { toast } from "sonner"
import { BackToDashboard } from "@/components/back-to-dashboard"

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)

  // プロフィール設定のステート
  const [profileData, setProfileData] = useState({
    companyName: "株式会社サンプル",
    email: "sample@example.com",
    phone: "03-1234-5678",
  })

  // 通知設定のステート
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    systemUpdates: false,
  })

  // 入力変更ハンドラ
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  // スイッチ変更ハンドラ
  const handleNotificationChange = (key: string, checked: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [key]: checked }))
  }

  // 設定保存ハンドラ
  const handleSaveSettings = (section: string) => {
    setLoading(true)

    // メールアドレスのバリデーション
    if (section === "プロフィール" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profileData.email)) {
      toast.error("有効なメールアドレスを入力してください。")
      setLoading(false)
      return
    }

    // 電話番号のバリデーション
    if (section === "プロフィール" && !/^[0-9-]+$/.test(profileData.phone)) {
      toast.error("有効な電話番号を入力してください。")
      setLoading(false)
      return
    }

    // 保存処理のシミュレーション
    setTimeout(() => {
      setLoading(false)
      toast.success(`${section}設定が保存されました！`)
    }, 1000)
  }

  return (
    <div className="container mx-auto max-w-3xl py-10">
      <BackToDashboard />
      <h1 className="text-3xl font-bold mb-6">設定</h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">プロフィール</TabsTrigger>
          <TabsTrigger value="notifications">通知</TabsTrigger>
          <TabsTrigger value="security">セキュリティ</TabsTrigger>
          <TabsTrigger value="company">会社情報</TabsTrigger>
          <TabsTrigger value="shipping">配送</TabsTrigger>
          <TabsTrigger value="inventory">在庫</TabsTrigger>
          <TabsTrigger value="partners">取引先</TabsTrigger>
          <TabsTrigger value="reports">レポート</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>プロフィール設定</CardTitle>
              <CardDescription>企業の基本情報を管理します。この情報は他の企業に表示されます。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="companyName">会社名</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={profileData.companyName}
                  onChange={handleProfileChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">電話番号</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={profileData.phone}
                  onChange={handleProfileChange}
                  placeholder="03-1234-5678"
                  required
                />
                <p className="text-sm text-muted-foreground">ハイフン（-）を含めた形式で入力してください</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleSaveSettings("プロフィール")}
                disabled={loading}
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                {loading ? "保存中..." : "保存"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>通知設定</CardTitle>
              <CardDescription>システムからの通知設定を管理します。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emailNotifications">メール通知</Label>
                  <p className="text-sm text-muted-foreground">システムからのメール通知を受け取ります。</p>
                </div>
                <Switch
                  id="emailNotifications"
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={(checked) => handleNotificationChange("emailNotifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="systemUpdates">システムアップデート</Label>
                  <p className="text-sm text-muted-foreground">システムの新機能や更新情報の通知を受け取ります。</p>
                </div>
                <Switch
                  id="systemUpdates"
                  checked={notificationSettings.systemUpdates}
                  onCheckedChange={(checked) => handleNotificationChange("systemUpdates", checked)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSaveSettings("通知")} disabled={loading} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                {loading ? "保存中..." : "保存"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* セキュリティ設定 */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>セキュリティ設定</CardTitle>
              <CardDescription>アカウントのセキュリティ設定を管理します。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="twoFactorAuth">二要素認証</Label>
                  <p className="text-sm text-muted-foreground">ログイン時に追加の認証を要求します。</p>
                </div>
                <Switch id="twoFactorAuth" checked={false} onCheckedChange={(checked) => {}} />
              </div>

              {/* <Separator /> */}

              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">セッションタイムアウト（分）</Label>
                <p className="text-sm text-muted-foreground">
                  非アクティブ状態が続いた場合に自動的にログアウトするまでの時間を設定します。
                </p>
                <Input
                  id="sessionTimeout"
                  name="sessionTimeout"
                  type="number"
                  value={30}
                  onChange={() => {}}
                  min="5"
                  max="120"
                />
              </div>

              {/* <Separator /> */}

              <div className="space-y-2">
                <Label>パスワード変更</Label>
                <p className="text-sm text-muted-foreground">アカウントのパスワードを変更します。</p>
                <Button variant="outline">パスワード変更メールを送信</Button>
              </div>

              {/* <Separator /> */}

              <div className="space-y-2">
                <Label className="text-destructive">アカウント削除</Label>
                <p className="text-sm text-muted-foreground">
                  アカウントを完全に削除します。この操作は取り消せません。
                </p>
                <Button variant="destructive" onClick={() => {}} className="flex items-center gap-2">
                  {/* <Trash2 className="h-4 w-4" /> */}
                  アカウントを削除
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {}} disabled={loading} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                {loading ? "保存中..." : "保存"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* 会社情報 */}
        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle>会社情報</CardTitle>
              <CardDescription>会社の詳細情報を管理します。この情報は他の企業に表示されます。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="description">会社概要</Label>
                <textarea
                  id="description"
                  name="description"
                  value={"サンプル企業の説明文です。"}
                  onChange={() => {}}
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="foundedYear">設立年</Label>
                <Input id="foundedYear" name="foundedYear" value={"2020"} onChange={() => {}} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="employeeCount">従業員数</Label>
                <Input id="employeeCount" name="employeeCount" value={"10-50"} onChange={() => {}} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="businessHours">営業時間</Label>
                <Input id="businessHours" name="businessHours" value={"平日 9:00-18:00"} onChange={() => {}} />
              </div>

              {/* <Separator className="my-4" /> */}

              <div className="space-y-2">
                <Label>データ管理</Label>
                <p className="text-sm text-muted-foreground">会社データのエクスポートとインポートを行います。</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => {}} className="flex items-center gap-2">
                    {/* <Download className="h-4 w-4" /> */}
                    データをエクスポート
                  </Button>
                  <Button variant="outline" onClick={() => {}} className="flex items-center gap-2">
                    {/* <Upload className="h-4 w-4" /> */}
                    データをインポート
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {}} disabled={loading} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                {loading ? "保存中..." : "保存"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* 配送設定 */}
        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>配送設定</CardTitle>
              <CardDescription>配送方法、配送エリア、配送スケジュールなどの設定を管理します。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="defaultShippingMethod">デフォルト配送方法</Label>
                <Select value={"standard"} onValueChange={() => {}}>
                  <SelectTrigger>
                    <SelectValue placeholder="配送方法を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">標準配送</SelectItem>
                    <SelectItem value="express">速達配送</SelectItem>
                    <SelectItem value="same-day">当日配送</SelectItem>
                    <SelectItem value="economy">エコノミー配送</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* <Separator /> */}

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoRouteOptimization">自動ルート最適化</Label>
                  <p className="text-sm text-muted-foreground">
                    配送ルートを自動的に最適化して効率的な配送を実現します。
                  </p>
                </div>
                <Switch id="autoRouteOptimization" checked={true} onCheckedChange={() => {}} />
              </div>

              {/* <Separator /> */}

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="deliveryTimeWindow">配送時間枠（時間）</Label>
                  <span className="text-sm font-medium">2時間</span>
                </div>
                <p className="text-sm text-muted-foreground">顧客に提供する配送時間枠の長さを設定します。</p>
                <div className="relative mt-1">
                  <input
                    type="range"
                    min="1"
                    max="8"
                    step="1"
                    value={2}
                    onChange={() => {}}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* <Separator /> */}

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="trackingNotifications">配送追跡通知</Label>
                  <p className="text-sm text-muted-foreground">配送状況の変更時に自動的に通知を送信します。</p>
                </div>
                <Switch id="trackingNotifications" checked={true} onCheckedChange={() => {}} />
              </div>

              {/* <Separator /> */}

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="deliveryAreaRestriction">配送エリア制限</Label>
                  <p className="text-sm text-muted-foreground">特定の地域への配送を制限します。</p>
                </div>
                <Switch id="deliveryAreaRestriction" checked={false} onCheckedChange={() => {}} />
              </div>

              {false && (
                <div className="pl-6 border-l-2 border-muted mt-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    {/* <MapPin className="h-4 w-4" /> */}
                    配送エリアを設定
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={() => {}} disabled={loading} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                {loading ? "保存中..." : "保存"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* 在庫管理設定 */}
        <TabsContent value="inventory">
          <Card>
            <CardHeader>
              <CardTitle>在庫管理設定</CardTitle>
              <CardDescription>在庫管理方法、在庫アラート、自動発注などの設定を管理します。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="lowStockThreshold">在庫アラートしきい値</Label>
                  <span className="text-sm font-medium">10個</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  在庫が指定した数量以下になった場合にアラートを表示します。
                </p>
                <div className="relative mt-1">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={10}
                    onChange={() => {}}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* <Separator /> */}

              <div className="space-y-2">
                <Label htmlFor="inventoryMethod">在庫管理方法</Label>
                <p className="text-sm text-muted-foreground">在庫の出入りを管理する方法を選択します。</p>
                <Select value={"fifo"} onValueChange={() => {}}>
                  <SelectTrigger>
                    <SelectValue placeholder="在庫管理方法を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fifo">先入れ先出し (FIFO)</SelectItem>
                    <SelectItem value="lifo">後入れ先出し (LIFO)</SelectItem>
                    <SelectItem value="fefo">先期限先出し (FEFO)</SelectItem>
                    <SelectItem value="average">平均原価法</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* <Separator /> */}

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoReorder">自動発注</Label>
                  <p className="text-sm text-muted-foreground">在庫が一定量以下になった場合に自動的に発注します。</p>
                </div>
                <Switch id="autoReorder" checked={true} onCheckedChange={() => {}} />
              </div>

              {true && (
                <div className="pl-6 border-l-2 border-muted mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="reorderThreshold">発注しきい値</Label>
                    <span className="text-sm font-medium">20個</span>
                  </div>
                  <div className="relative mt-1">
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={20}
                      onChange={() => {}}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* <Separator /> */}

              <div className="space-y-2">
                <Label htmlFor="inventorySyncFrequency">在庫同期頻度</Label>
                <p className="text-sm text-muted-foreground">在庫データを他のシステムと同期する頻度を設定します。</p>
                <Select value={"daily"} onValueChange={() => {}}>
                  <SelectTrigger>
                    <SelectValue placeholder="同期頻度を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">リアルタイム</SelectItem>
                    <SelectItem value="hourly">1時間ごと</SelectItem>
                    <SelectItem value="daily">1日ごと</SelectItem>
                    <SelectItem value="weekly">1週間ごと</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {}} disabled={loading} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                {loading ? "保存中..." : "保存"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* 取引先設定 */}
        <TabsContent value="partners">
          <Card>
            <CardHeader>
              <CardTitle>取引先設定</CardTitle>
              <CardDescription>取引先との連携、データ共有、API連携などの設定を管理します。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoApprovePartners">取引先自動承認</Label>
                  <p className="text-sm text-muted-foreground">新しい取引先リクエストを自動的に承認します。</p>
                </div>
                <Switch id="autoApprovePartners" checked={false} onCheckedChange={() => {}} />
              </div>

              {/* <Separator /> */}

              <div className="space-y-2">
                <Label htmlFor="dataSharing">データ共有レベル</Label>
                <p className="text-sm text-muted-foreground">取引先と共有するデータの範囲を設定します。</p>
                <Select value={"limited"} onValueChange={() => {}}>
                  <SelectTrigger>
                    <SelectValue placeholder="データ共有レベルを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">共有なし</SelectItem>
                    <SelectItem value="limited">限定的（注文情報のみ）</SelectItem>
                    <SelectItem value="standard">標準（注文・在庫情報）</SelectItem>
                    <SelectItem value="full">完全（すべての情報）</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* <Separator /> */}

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="apiIntegration">API連携</Label>
                  <p className="text-sm text-muted-foreground">取引先のシステムとのAPI連携を有効にします。</p>
                </div>
                <Switch id="apiIntegration" checked={true} onCheckedChange={() => {}} />
              </div>

              {true && (
                <div className="pl-6 border-l-2 border-muted mt-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    {/* <LinkIcon className="h-4 w-4" /> */}
                    API設定を管理
                  </Button>
                </div>
              )}

              {/* <Separator /> */}

              <div className="space-y-2">
                <Label htmlFor="partnerVisibility">取引先の可視性</Label>
                <p className="text-sm text-muted-foreground">
                  他の取引先に対する自社の取引先情報の表示範囲を設定します。
                </p>
                <Select value={"all"} onValueChange={() => {}}>
                  <SelectTrigger>
                    <SelectValue placeholder="可視性を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">非表示</SelectItem>
                    <SelectItem value="limited">限定的（名前のみ）</SelectItem>
                    <SelectItem value="all">すべて表示</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* <Separator /> */}

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="partnerNotifications">取引先通知</Label>
                  <p className="text-sm text-muted-foreground">取引先の活動に関する通知を受け取ります。</p>
                </div>
                <Switch id="partnerNotifications" checked={true} onCheckedChange={() => {}} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {}} disabled={loading} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                {loading ? "保存中..." : "保存"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* レポート設定 */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>レポート設定</CardTitle>
              <CardDescription>
                レポートの自動生成、データ分析、エクスポート形式などの設定を管理します。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoGenerateReports">レポート自動生成</Label>
                  <p className="text-sm text-muted-foreground">定期的にレポートを自動生成します。</p>
                </div>
                <Switch id="autoGenerateReports" checked={true} onCheckedChange={() => {}} />
              </div>

              {true && (
                <div className="pl-6 border-l-2 border-muted mt-2 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reportFrequency">レポート生成頻度</Label>
                    <Select value={"weekly"} onValueChange={() => {}}>
                      <SelectTrigger>
                        <SelectValue placeholder="頻度を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">毎日</SelectItem>
                        <SelectItem value="weekly">毎週</SelectItem>
                        <SelectItem value="biweekly">隔週</SelectItem>
                        <SelectItem value="monthly">毎月</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* <Separator /> */}

              <div className="space-y-2">
                <Label htmlFor="reportFormat">レポート形式</Label>
                <p className="text-sm text-muted-foreground">レポートのデフォルト出力形式を設定します。</p>
                <Select value={"pdf"} onValueChange={() => {}}>
                  <SelectTrigger>
                    <SelectValue placeholder="形式を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* <Separator /> */}

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="dataRetentionPeriod">データ保持期間（月）</Label>
                  <span className="text-sm font-medium">6ヶ月</span>
                </div>
                <p className="text-sm text-muted-foreground">レポートデータを保持する期間を設定します。</p>
                <div className="relative mt-1">
                  <input
                    type="range"
                    min="1"
                    max="36"
                    step="1"
                    value={6}
                    onChange={() => {}}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* <Separator /> */}

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="includeAnalytics">分析データを含める</Label>
                  <p className="text-sm text-muted-foreground">レポートに詳細な分析データとグラフを含めます。</p>
                </div>
                <Switch id="includeAnalytics" checked={true} onCheckedChange={() => {}} />
              </div>

              {/* <Separator /> */}

              <div className="space-y-2">
                <Label>レポートテンプレート</Label>
                <p className="text-sm text-muted-foreground">カスタムレポートテンプレートを管理します。</p>
                <Button variant="outline" className="flex items-center gap-2">
                  {/* <FileText className="h-4 w-4" /> */}
                  テンプレートを管理
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {}} disabled={loading} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                {loading ? "保存中..." : "保存"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

