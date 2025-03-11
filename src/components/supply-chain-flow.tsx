"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Package, Factory, Truck, ArrowRight, MessageSquare } from "lucide-react"

// サンプルデータ
const supplyChainData = {
  materials: [
    { id: 1, name: "鈴木材料株式会社", type: "materials" },
    { id: 2, name: "高橋素材株式会社", type: "materials" },
    { id: 3, name: "田中原料株式会社", type: "materials" },
  ],
  manufacturing: [
    { id: 4, name: "山田製造株式会社", type: "manufacturing" },
    { id: 5, name: "伊藤工業株式会社", type: "manufacturing" },
  ],
  sales: [
    { id: 6, name: "佐藤物流株式会社", type: "sales" },
    { id: 7, name: "渡辺販売株式会社", type: "sales" },
  ],
}

export function SupplyChainFlow() {
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null)

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

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
        <div className="w-full md:w-1/3 space-y-2">
          <h3 className="text-center font-medium">材料サプライヤー</h3>
          <div className="space-y-2">
            {supplyChainData.materials.map((company) => (
              <Button
                key={company.id}
                variant="outline"
                className={`w-full justify-start ${selectedCompany === company.id ? "border-blue-500 bg-blue-50" : ""}`}
                onClick={() => setSelectedCompany(company.id)}
              >
                <div className={`mr-2 rounded-full p-1 ${getColorForType(company.type)}`}>
                  {getIconForType(company.type)}
                </div>
                {company.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ArrowRight className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="w-full md:w-1/3 space-y-2">
          <h3 className="text-center font-medium">製造会社</h3>
          <div className="space-y-2">
            {supplyChainData.manufacturing.map((company) => (
              <Button
                key={company.id}
                variant="outline"
                className={`w-full justify-start ${
                  selectedCompany === company.id ? "border-amber-500 bg-amber-50" : ""
                }`}
                onClick={() => setSelectedCompany(company.id)}
              >
                <div className={`mr-2 rounded-full p-1 ${getColorForType(company.type)}`}>
                  {getIconForType(company.type)}
                </div>
                {company.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ArrowRight className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="w-full md:w-1/3 space-y-2">
          <h3 className="text-center font-medium">販売会社</h3>
          <div className="space-y-2">
            {supplyChainData.sales.map((company) => (
              <Button
                key={company.id}
                variant="outline"
                className={`w-full justify-start ${
                  selectedCompany === company.id ? "border-green-500 bg-green-50" : ""
                }`}
                onClick={() => setSelectedCompany(company.id)}
              >
                <div className={`mr-2 rounded-full p-1 ${getColorForType(company.type)}`}>
                  {getIconForType(company.type)}
                </div>
                {company.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
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

