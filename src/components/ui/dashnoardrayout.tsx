// import React from "react";
// import { Sidebar } from "@/components/ui/sidebar"; // Assuming a sidebar component exists or needs creation
// import { Outlet } from "react-router-dom"; // For routing, adjust if using Next.js App Router

// interface DashboardLayoutProps {
//   children?: React.ReactNode;
// }

// export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <main className="flex-1 overflow-auto">
//         <div className="p-6">
//           {children || <Outlet />} {/* Render children or Outlet for routing */}
//         </div>
//       </main>
//     </div>
//   );
// };

// // Optional Sidebar Component (if not already present)
// export const Sidebar = () => {
//   return (
//     <div className="w-64 bg-white shadow-md">
//       <nav className="p-4">
//         <h2 className="text-xl font-bold mb-4">ダッシュボード</h2>
//         <ul className="space-y-2">
//           <li>
//             <a href="/dashboard" className="text-blue-600 hover:underline">
//               ホーム
//             </a>
//           </li>
//           <li>
//             <a href="/dashboard/settings" className="text-blue-600 hover:underline">
//               設定
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };