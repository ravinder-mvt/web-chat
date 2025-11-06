// // src/components/Sidebar/Sidebar.tsx
// import { Home, ShoppingBag, Settings, LogOut } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Handshake } from 'lucide-react';
// import { FolderGit } from 'lucide-react';
// import { Phone } from 'lucide-react';
// import { MessageCircle } from 'lucide-react';
// import type {SidebarItems} from "../types/components.type"



// const sidebarItems: SidebarItems[] = [
//     { icon: Home, label: "Overview", path: "/overview" },
//     // { icon: ShoppingBag, label: "Products", path: "/products" },
//     { icon: Settings, label: "Settings", path: "/settings" },
//     { icon: Handshake, label: "Teams", path: "/teams" },
//     {
//         icon: FolderGit,
//         label: "Projects",
//         path: "/projects",
//     },{
//         icon: Phone,
//         label: "call",
//         path: "/call",
//     },{
//         icon: MessageCircle,
//         label: "Messages",
//         path: "/messages",
//     }
// ];

// const Sidebar = () => {
//     const [active, setActive] = useState("/");

//     return (
//         <div className="fixed left-0 top-0 h-screen w-64 border-r shadow-sm flex flex-col justify-between">
//             <div className="p-4">
//                 <h1 className="text-2xl font-bold mb-8 text-gray-900">MyApp</h1>

//                 <nav className="flex flex-col gap-2">
//                     {sidebarItems.map((item, index) => (
//                         <Link key={index} to={item.path}>
//                             <Button
//                                 variant={active === item.path ? "secondary" : "ghost"}
//                                 className={cn(
//                                     "w-full justify-start text-gray-700 hover:bg-gray-100",
//                                     active === item.path && "bg-gray-100 font-semibold"
//                                 )}
//                                 onClick={() => setActive(item.path)}
//                             >
//                                 <item.icon className="mr-2 h-5 w-5" />
//                                 {item.label}
//                             </Button>
//                         </Link>
//                     ))}
//                 </nav>
//             </div>

//             <div className="p-4">
//                 <Button
//                     variant="ghost"
//                     className="w-full justify-start text-red-600 hover:bg-red-100"
//                 >
//                     <LogOut className="mr-2 h-5 w-5" /> Logout
//                 </Button>
//             </div>
//         </div>
//     );
// }
// export default Sidebar;