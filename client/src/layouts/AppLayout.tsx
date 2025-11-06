import { AppSidebar } from "@/layouts/Sidebar/app-sidebar"
import { ChartAreaInteractive } from "@/layouts/Sidebar/chart-area-interactive"
import { DataTable } from "@/layouts/Sidebar/data-table"
import { SectionCards } from "@/layouts/Sidebar/section-cards"
import { SiteHeader } from "@/layouts/Sidebar/site-header"
import Navbar from "./Navbar"
import type { ReactNode } from "react"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"




interface AppLayoutProps {
    children: ReactNode;
}
const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                {/* <Navbar/> */}
                <main className="flex flex-col p-4 gap-4 md:p-6">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default AppLayout;