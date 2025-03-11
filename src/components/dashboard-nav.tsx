import Link from "next/link"
import { LayoutDashboard, MessageSquare, Users, Package, Truck, BarChart3, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "ダッシュボード",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "メッセージ",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    title: "取引先",
    href: "/dashboard/partners",
    icon: Users,
  },
  {
    title: "注文管理",
    href: "/dashboard/orders",
    icon: Package,
  },
  {
    title: "配送",
    href: "/dashboard/shipping",
    icon: Truck,
  },
  {
    title: "レポート",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "設定",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="py-2">
          <h2 className="px-4 text-lg font-semibold tracking-tight">メインメニュー</h2>
          <div className="mt-3 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn("w-full justify-start", item.href === "/dashboard" && "bg-muted font-medium")}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

