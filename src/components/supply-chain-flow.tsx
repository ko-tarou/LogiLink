"use client"

import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import { Package, Factory, Truck, ArrowRight, MessageSquare } from "lucide-react"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// サンプルデータ
const sampleCompanies = [
  { id: 1001, company_name: "サンプル材料会社", company_type: "materials", isSample: true },
  { id: 1002, company_name: "サンプル製造会社", company_type: "manufacturing", isSample: true },
  { id: 1003, company_name: "サンプル販売会社", company_type: "sales", isSample: true },
]

export function SupplyChainFlow() {
  const [companies, setCompanies] = useState<{ id: number; company_name: string; company_type: string; isSample: boolean }[]>([])
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null)
  const [filter, setFilter] = useState<"all" | "sample" | "supabase">("all")

  useEffect(() => {
    const fetchCompanies = async () => {
      const { data, error } = await supabase.from("companies").select("id, company_name, company_type")
      if (error) {
        console.error("Error fetching companies:", error)
        setCompanies(sampleCompanies) // エラー時はサンプルデータのみ
      } else {
        setCompanies([...sampleCompanies, ...data.map((c) => ({ ...c, isSample: false }))])
      }
    }

    fetchCompanies()
  }, [])

  // フィルタリングされた企業リスト
  const filteredCompanies = companies.filter((c) => {
    if (filter === "sample") return c.isSample
    if (filter === "supabase") return !c.isSample
    return true
  })

  // 企業カテゴリごとに分類
  const categorizedCompanies = {
    materials: filteredCompanies.filter((c) => c.company_type === "materials"),
    manufacturing: filteredCompanies.filter((c) => c.company_type === "manufacturing"),
    sales: filteredCompanies.filter((c) => c.company_type === "sales"),
  }

  // アイコン取得関数
  const getIconForType = (type: string) => {
    switch (type) {
      case "materials":
        return <Package className="h-5 w-5" />
      case "manufacturing":
        return <Factory className="h-5 w-5" />
      case "sales":
        return <Truck className="h-5 w-5" />
      default:
        return null
    }
  }

  // 色取得関数
  const getColorForType = (type: string) => {
    switch (type) {
      case "materials":
        return "bg-blue-100 text-blue-600"
      case "manufacturing":
        return "bg-amber-100 text-amber-600"
      case "sales":
        return "bg-green-100 text-green-600"
      default:
        return ""
    }
  }

  const categories = ["materials", "manufacturing", "sales"] as const

  return (
    <div className="space-y-6">
      {/* フィルタリングボタン */}
      <div className="flex gap-2">
        <Button onClick={() => setFilter("all")} variant={filter === "all" ? "default" : "outline"}>すべて</Button>
        <Button onClick={() => setFilter("sample")} variant={filter === "sample" ? "default" : "outline"}>サンプルのみ</Button>
        <Button onClick={() => setFilter("supabase")} variant={filter === "supabase" ? "default" : "outline"}>データベースのみ</Button>
      </div>

      {/* 企業リスト */}
      <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
        {categories.map((category) => (
          <div key={category} className="w-full md:w-1/3 space-y-2">
            <h3 className="text-center font-medium">
              {category === "materials" ? "材料サプライヤー" : category === "manufacturing" ? "製造会社" : "販売会社"}
            </h3>
            <div className="space-y-2">
              {categorizedCompanies[category].map((company) => (
                <Button
                  key={company.id}
                  variant="outline"
                  className={`w-full justify-start ${selectedCompany === company.id ? "border-blue-500 bg-blue-50" : ""} ${company.isSample ? "opacity-70" : ""}`}
                  onClick={() => setSelectedCompany(company.id)}
                >
                  <div className={`mr-2 rounded-full p-1 ${getColorForType(company.company_type)}`}>
                    {getIconForType(company.company_type)}
                  </div>
                  {company.company_name}
                  {company.isSample && <span className="ml-2 text-xs text-gray-500">(サンプル)</span>}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 選択した企業の詳細情報 */}
      {selectedCompany && (
        <div className="mt-6 rounded-lg border p-4">
          <h3 className="font-medium">企業詳細</h3>
          <p className="text-sm text-muted-foreground">選択した企業の詳細情報や取引履歴がここに表示されます。</p>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              メッセージを送る
            </Button>
            <Button size="sm">
              <Package className="mr-2 h-4 w-4" />
              注文を作成
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
