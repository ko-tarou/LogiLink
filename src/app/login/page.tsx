"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Truck, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 入力検証
    if (!email.trim()) {
      toast.error("メールアドレスを入力してください")
      setIsSubmitting(false)
      return
    }

    if (!password) {
      toast.error("パスワードを入力してください")
      setIsSubmitting(false)
      return
    }

    // ログイン処理（実際にはAPIリクエストなど）
    setTimeout(() => {
      toast.success("ログインしました", {
        description: "ダッシュボードに移動します",
      })
      setIsSubmitting(false)
      // 実際の実装では、ここでダッシュボードにリダイレクトする
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
          <CardTitle className="text-2xl">ログイン</CardTitle>
          <CardDescription>LogiLinkにログインして、サプライチェーンネットワークに接続しましょう。</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
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
            <div className="flex items-center justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-primary underline underline-offset-4"
                onClick={(e) => {
                  e.preventDefault()
                  toast.info("パスワードリセット機能は現在開発中です")
                }}
              >
                パスワードをお忘れですか？
              </Link>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "ログイン中..." : "ログイン"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        アカウントをお持ちでないですか？{" "}
        <Link href="/register" className="underline underline-offset-4">
          登録する
        </Link>
      </p>
    </div>
  )
}

