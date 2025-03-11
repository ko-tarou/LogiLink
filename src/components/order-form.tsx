"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Trash2 } from "lucide-react"

// サンプルデータ
const partners = [
  { id: 1, name: "鈴木材料株式会社", type: "materials" },
  { id: 2, name: "高橋素材株式会社", type: "materials" },
  { id: 3, name: "山田製造株式会社", type: "manufacturing" },
  { id: 4, name: "伊藤工業株式会社", type: "manufacturing" },
  { id: 5, name: "佐藤物流株式会社", type: "sales" },
  { id: 6, name: "渡辺販売株式会社", type: "sales" },
]

const products = [
  { id: 1, name: "製品A", unit: "個" },
  { id: 2, name: "製品B", unit: "箱" },
  { id: 3, name: "製品C", unit: "kg" },
  { id: 4, name: "製品D", unit: "セット" },
]

interface OrderItem {
  id: number
  productId: number
  quantity: number
  notes: string
}

export function OrderForm() {
  const [partner, setPartner] = useState("")
  const [orderItems, setOrderItems] = useState<OrderItem[]>([{ id: 1, productId: 1, quantity: 10, notes: "" }])
  const [deliveryDate, setDeliveryDate] = useState("")
  const [notes, setNotes] = useState("")

  const addOrderItem = () => {
    const newId = orderItems.length > 0 ? Math.max(...orderItems.map((item) => item.id)) + 1 : 1
    setOrderItems([...orderItems, { id: newId, productId: 1, quantity: 0, notes: "" }])
  }

  const removeOrderItem = (id: number) => {
    if (orderItems.length > 1) {
      setOrderItems(orderItems.filter((item) => item.id !== id))
    }
  }

  const updateOrderItem = (id: number, field: keyof OrderItem, value: any) => {
    setOrderItems(orderItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  const getProductById = (id: number) => {
    return products.find((product) => product.id === id)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで注文送信のロジックを実装
    console.log({ partner, orderItems, deliveryDate, notes })

    // Sonnerを使用して通知を表示
    if (!partner) {
      toast.error("取引先を選択してください")
      return
    }

    if (!deliveryDate) {
      toast.error("納期を入力してください")
      return
    }

    if (orderItems.some((item) => item.quantity <= 0)) {
      toast.error("数量は1以上を入力してください")
      return
    }

    toast.success("注文が正常に送信されました", {
      description: `注文番号: ORD-${Math.floor(Math.random() * 10000)}`,
      action: {
        label: "詳細を見る",
        onClick: () => console.log("注文詳細を表示"),
      },
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="partner">取引先</Label>
          <Select value={partner} onValueChange={setPartner}>
            <SelectTrigger id="partner">
              <SelectValue placeholder="取引先を選択" />
            </SelectTrigger>
            <SelectContent>
              {partners.map((p) => (
                <SelectItem key={p.id} value={p.id.toString()}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="delivery-date">納期</Label>
          <Input
            id="delivery-date"
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>注文アイテム</Label>
          <Button type="button" variant="outline" size="sm" onClick={addOrderItem}>
            <Plus className="h-4 w-4 mr-2" />
            アイテム追加
          </Button>
        </div>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>製品</TableHead>
                  <TableHead>数量</TableHead>
                  <TableHead>単位</TableHead>
                  <TableHead>備考</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderItems.map((item) => {
                  const product = getProductById(item.productId)
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Select
                          value={item.productId.toString()}
                          onValueChange={(value) => updateOrderItem(item.id, "productId", Number.parseInt(value))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product.id} value={product.id.toString()}>
                                {product.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateOrderItem(item.id, "quantity", Number.parseInt(e.target.value) || 0)}
                        />
                      </TableCell>
                      <TableCell>{product?.unit}</TableCell>
                      <TableCell>
                        <Input
                          placeholder="備考"
                          value={item.notes}
                          onChange={(e) => updateOrderItem(item.id, "notes", e.target.value)}
                        />
                      </TableCell>
                      <TableCell>
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeOrderItem(item.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">削除</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">備考</Label>
        <Textarea
          id="notes"
          placeholder="注文に関する追加情報があれば入力してください"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={() => toast.info("変更はキャンセルされました")}>
          キャンセル
        </Button>
        <Button type="submit">注文を送信</Button>
      </div>
    </form>
  )
}

