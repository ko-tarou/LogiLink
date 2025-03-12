"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

// サンプルデータ
const chatData = [
  {
    id: 1,
    company: "山田製造株式会社",
    type: "manufacturing",
    lastMessage: "注文 #1234 の納期について確認したいのですが、いつ頃になりますか？",
    time: "14:30",
    unread: true,
  },
  {
    id: 2,
    company: "佐藤物流株式会社",
    type: "sales",
    lastMessage: "配送スケジュールを調整しました。詳細をご確認ください。",
    time: "昨日",
    unread: true,
  },
  {
    id: 3,
    company: "鈴木材料株式会社",
    type: "materials",
    lastMessage: "来週の納品について、数量の変更は可能でしょうか？",
    time: "2日前",
    unread: false,
  },
  {
    id: 4,
    company: "高橋素材株式会社",
    type: "materials",
    lastMessage: "新しい素材のサンプルをお送りします。ご検討いただけますか？",
    time: "3日前",
    unread: false,
  },
]

// サンプルメッセージデータ
const messageData = [
  {
    id: 1,
    sender: "山田製造株式会社",
    content: "お世話になっております。注文 #1234 の納期について確認したいのですが、いつ頃になりますか？",
    time: "14:30",
    isMe: false,
  },
  {
    id: 2,
    sender: "自社",
    content: "お問い合わせありがとうございます。現在確認中です。明日までにご連絡いたします。",
    time: "14:35",
    isMe: true,
  },
  {
    id: 3,
    sender: "山田製造株式会社",
    content: "承知しました。よろしくお願いいたします。",
    time: "14:40",
    isMe: false,
  },
]

export function ChatList() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1)
  const [message, setMessage] = useState("")

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

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // ここでメッセージ送信のロジックを実装
      toast.success("メッセージを送信しました")
      setMessage("")
    } else {
      toast.error("メッセージを入力してください")
    }
  }

  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden">
      <div className="w-1/3 border-r">
        <div className="p-3 border-b">
          <Input placeholder="チャットを検索..." />
        </div>
        <div className="overflow-y-auto h-[calc(600px-57px)]">
          {chatData.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 ${
                selectedChat === chat.id ? "bg-muted" : ""
              }`}
              onClick={() => {
                setSelectedChat(chat.id)
                if (chat.unread) {
                  // 未読メッセージを既読にする処理
                  toast.info(`${chat.company}とのチャットを開きました`)
                }
              }}
            >
              <Avatar>
                <AvatarFallback className={getColorForType(chat.type)}>{getInitials(chat.company)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium truncate">{chat.company}</p>
                  <p className="text-xs text-muted-foreground">{chat.time}</p>
                </div>
                <p className="text-sm truncate text-muted-foreground">{chat.lastMessage}</p>
              </div>
              {chat.unread && <div className="w-2 h-2 rounded-full bg-primary" />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <div className="p-3 border-b flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-amber-100 text-amber-600">
                  {getInitials("山田製造株式会社")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">山田製造株式会社</p>
                <p className="text-xs text-muted-foreground">製造会社</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messageData.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className="text-xs text-right mt-1 opacity-70">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t flex gap-2">
              <Input
                placeholder="メッセージを入力..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
                <span className="sr-only">送信</span>
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">チャットを選択してください</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

