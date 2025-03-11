"use client"

import Link from "next/link"
import { toast } from "sonner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Truck } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
          <Truck className="h-6 w-6" />
          <span>LogiLink</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              toast.info("新着通知が3件あります", {
                description: "山田製造株式会社から新しいメッセージがあります",
                action: {
                  label: "確認する",
                  onClick: () => console.log("通知を確認"),
                },
              })
            }}
          >
            <Bell className="h-5 w-5" />
            <span className="sr-only">通知</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">株式会社ロジリンク</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@logilink.jp</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => toast.info("プロフィール機能は現在開発中です")}>
                プロフィール
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info("設定機能は現在開発中です")}>設定</DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info("招待機能は現在開発中です")}>招待</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => toast.success("ログアウトしました")}>ログアウト</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}

