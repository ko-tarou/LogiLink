"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Truck, ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const [companyType, setCompanyType] = useState<string>("sales")
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 入力検証
    if (!companyName.trim()) {
      toast.error("会社名を入力してください")
      setIsSubmitting(false)
      return
    }

    if (!email.trim()) {
      toast.error("メールアドレスを入力してください")
      setIsSubmitting(false)
      return
    }

    if (!password || password.length < 8) {
      toast.error("パスワードは8文字以上で入力してください")
      setIsSubmitting(false)
      return
    }

    // 登録処理（実際にはAPIリクエストなど）
    setTimeout(() => {
      toast.success("登録が完了しました", {
        description: "ログイン画面に移動します",
      })
      setIsSubmitting(false)
      // 実際の実装では、ここでログインページにリダイレクトする
    }, 1500)
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12 px-4 md:px-6">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" />
        <span>戻る</span>
      </Link>
      <div className="flex items-center gap-2 mb-8">
        <Truck className="h-6 w-6" />
        <span className="font-bold text-xl">LogiLink</span>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">会社登録</CardTitle>
          <CardDescription>LogiLinkに会社を登録して、サプライチェーンネットワークに参加しましょう。</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">会社名</Label>
              <Input
                id="company-name"
                placeholder="株式会社ロジリンク"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                placeholder="info@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">パスワード</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>会社タイプ</Label>
              <RadioGroup defaultValue="sales" onValueChange={setCompanyType} className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="materials" id="materials" />
                  <Label htmlFor="materials" className="flex-1 cursor-pointer font-normal">
                    材料サプライヤー
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="manufacturing" id="manufacturing" />
                  <Label htmlFor="manufacturing" className="flex-1 cursor-pointer font-normal">
                    製造会社
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="sales" id="sales" />
                  <Label htmlFor="sales" className="flex-1 cursor-pointer font-normal">
                    販売会社
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "登録中..." : "登録する"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        すでにアカウントをお持ちですか？{" "}
        <Link href="/login" className="underline underline-offset-4">
          ログイン
        </Link>
      </p>
    </div>
  )
}

