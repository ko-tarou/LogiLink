// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { usePathname, useRouter } from "next/navigation"
// import Link from "next/link"
// import {
//   LayoutDashboard,
//   Package,
//   MessageSquare,
//   BarChart,
//   Settings,
//   LogOut,
//   Menu,
//   X,
//   Truck,
//   ShoppingBag,
//   Warehouse,
//   Factory,
// } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// // import { useSupabase } from "@/components/supabase-provider"
// // import { useToast } from "@/components/ui/use-toast"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// interface DashboardLayoutProps {
//   children: React.ReactNode
// }

// export function DashboardLayout({ children }: DashboardLayoutProps) {
//   const pathname = usePathname()
//   const router = useRouter()
//   const { supabase, user, loading } = useSupabase()
//   const { toast } = useToast()
//   const [companyName, setCompanyName] = useState("")
//   const [companyType, setCompanyType] = useState<string | null>(null)
//   const [open, setOpen] = useState(false)

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push("/login")
//     }
//   }, [user, loading, router])

//   useEffect(() => {
//     const getCompanyDetails = async () => {
//       if (user) {
//         const { data, error } = await supabase.from("companies").select("name, type").eq("id", user.id).single()

//         if (data) {
//           setCompanyName(data.name)
//           setCompanyType(data.type)
//         }
//       }
//     }

//     getCompanyDetails()
//   }, [user, supabase])

//   const handleLogout = async () => {
//     await supabase.auth.signOut()
//     toast({
//       title: "ログアウト成功",
//       description: "ログアウトしました。",
//     })
//     router.push("/")
//   }

//   const getCompanyTypeIcon = () => {
//     switch (companyType) {
//       case "delivery":
//         return <Truck className="h-5 w-5 text-blue-500" />
//       case "supplier":
//         return <Warehouse className="h-5 w-5 text-green-500" />
//       case "retailer":
//         return <ShoppingBag className="h-5 w-5 text-purple-500" />
//       case "manufacturer":
//         return <Factory className="h-5 w-5 text-orange-500" />
//       default:
//         return <Package className="h-5 w-5" />
//     }
//   }

//   const getCompanyTypeLabel = () => {
//     switch (companyType) {
//       case "delivery":
//         return "配送会社"
//       case "supplier":
//         return "材料供給者"
//       case "retailer":
//         return "販売店"
//       case "manufacturer":
//         return "製造業者"
//       default:
//         return "企業"
//     }
//   }

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((part) => part.charAt(0))
//       .join("")
//       .toUpperCase()
//       .substring(0, 2)
//   }

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen">読み込み中...</div>
//   }

//   if (!user) {
//     return null
//   }

//   const navigation = [
//     { name: "ダッシュボード", href: "/dashboard", icon: LayoutDashboard },
//     { name: "在庫・需要管理", href: "/dashboard/inventory", icon: Package },
//     { name: "チャット", href: "/dashboard/chat", icon: MessageSquare },
//     { name: "物流フロー", href: "/dashboard/flow", icon: BarChart },
//     { name: "設定", href: "/dashboard/settings", icon: Settings },
//   ]

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* サイドバー (デスクトップ) */}
//       <div className="hidden md:flex md:w-64 md:flex-col">
//         <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
//           <div className="flex items-center flex-shrink-0 px-4">
//             <div className="flex items-center space-x-2">
//               {getCompanyTypeIcon()}
//               <span className="text-xl font-semibold">{companyName}</span>
//             </div>
//           </div>
//           <div className="px-4 mt-2">
//             <span className="text-sm text-muted-foreground flex items-center gap-1">
//               {getCompanyTypeIcon()}
//               {getCompanyTypeLabel()}
//             </span>
//           </div>
//           <div className="mt-6 flex flex-col flex-1">
//             <nav className="flex-1 px-2 space-y-1">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`
//                     group flex items-center px-2 py-2 text-sm font-medium rounded-md
//                     ${
//                       pathname === item.href
//                         ? "bg-gray-100 text-primary"
//                         : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                     }
//                   `}
//                 >
//                   <item.icon
//                     className={`
//                       mr-3 flex-shrink-0 h-5 w-5
//                       ${pathname === item.href ? "text-primary" : "text-gray-400 group-hover:text-gray-500"}
//                     `}
//                   />
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//           <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
//             <div className="flex items-center">
//               <Avatar>
//                 <AvatarFallback>{getInitials(companyName)}</AvatarFallback>
//               </Avatar>
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-700 truncate">{companyName}</p>
//                 <p className="text-xs text-gray-500 truncate">{user.email}</p>
//               </div>
//             </div>
//             <Button variant="ghost" size="icon" className="ml-auto" onClick={handleLogout}>
//               <LogOut className="h-5 w-5 text-gray-500" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* モバイルサイドバー */}
//       <Sheet open={open} onOpenChange={setOpen}>
//         <SheetTrigger asChild>
//           <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-40">
//             <Menu className="h-6 w-6" />
//             <span className="sr-only">メニューを開く</span>
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="left" className="p-0">
//           <div className="flex flex-col h-full">
//             <div className="flex items-center justify-between p-4 border-b">
//               <div className="flex items-center space-x-2">
//                 {getCompanyTypeIcon()}
//                 <span className="font-semibold">{companyName}</span>
//               </div>
//               <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
//                 <X className="h-5 w-5" />
//               </Button>
//             </div>
//             <div className="px-4 py-2">
//               <span className="text-sm text-muted-foreground flex items-center gap-1">
//                 {getCompanyTypeIcon()}
//                 {getCompanyTypeLabel()}
//               </span>
//             </div>
//             <nav className="flex-1 px-2 py-4 space-y-1">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`
//                     group flex items-center px-2 py-2 text-sm font-medium rounded-md
//                     ${
//                       pathname === item.href
//                         ? "bg-gray-100 text-primary"
//                         : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                     }
//                   `}
//                   onClick={() => setOpen(false)}
//                 >
//                   <item.icon
//                     className={`
//                       mr-3 flex-shrink-0 h-5 w-5
//                       ${pathname === item.href ? "text-primary" : "text-gray-400 group-hover:text-gray-500"}
//                     `}
//                   />
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>
//             <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
//               <div className="flex items-center">
//                 <Avatar>
//                   <AvatarFallback>{getInitials(companyName)}</AvatarFallback>
//                 </Avatar>
//                 <div className="ml-3">
//                   <p className="text-sm font-medium text-gray-700 truncate">{companyName}</p>
//                   <p className="text-xs text-gray-500 truncate">{user.email}</p>
//                 </div>
//               </div>
//               <Button variant="ghost" size="icon" className="ml-auto" onClick={handleLogout}>
//                 <LogOut className="h-5 w-5 text-gray-500" />
//               </Button>
//             </div>
//           </div>
//         </SheetContent>
//       </Sheet>

//       {/* メインコンテンツ */}
//       <div className="flex flex-col flex-1 overflow-hidden">
//         <main className="flex-1 relative overflow-y-auto focus:outline-none">
//           <div className="py-6">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

