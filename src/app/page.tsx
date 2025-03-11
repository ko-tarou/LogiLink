import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Factory, Package } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Truck className="h-6 w-6" />
            <span>LogiLink</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">ログイン</Button>
            </Link>
            <Link href="/register">
              <Button>登録する</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  物流業界のためのSNSプラットフォーム
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  LogiLinkは、サプライチェーン全体の企業をつなぎ、情報の流れをスムーズにするプラットフォームです。FAXや電話に頼らず、リアルタイムで正確な情報共有を実現します。
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="gap-1">
                      今すぐ始める
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      詳細を見る
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-muted p-2">
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-background p-4">
                    <div className="grid gap-4 w-full max-w-md">
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <Package className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">材料サプライヤー</h3>
                          <p className="text-sm text-muted-foreground">原材料の供給から始まるサプライチェーン</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <Factory className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">製造会社</h3>
                          <p className="text-sm text-muted-foreground">材料を製品に変換する製造プロセス</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <Truck className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">販売・物流会社</h3>
                          <p className="text-sm text-muted-foreground">最終製品を消費者に届ける</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                サプライチェーンの課題を解決
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                LogiLinkは、物流業界特有の課題に対応するために設計されています。情報の断絶を解消し、効率的なコミュニケーションを実現します。
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">招待制コミュニティ</h3>
                <p className="text-muted-foreground">
                  Slackのような招待制システムで、信頼できる企業のみがネットワークに参加できます。
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">リアルタイムコミュニケーション</h3>
                <p className="text-muted-foreground">
                  FAXや電話に代わる、効率的でトレーサブルなコミュニケーションツールを提供します。
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                    <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                    <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                    <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">サプライチェーンの可視化</h3>
                <p className="text-muted-foreground">
                  材料の流れに沿って企業を表示し、サプライチェーン全体を可視化します。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 LogiLink. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              利用規約
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

