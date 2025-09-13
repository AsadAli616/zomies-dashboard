import { useState } from "react"
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Brain, 
  Calendar, 
  Settings,
  ChevronLeft,
  GraduationCap
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import foxMascot from "@/assets/fox-mascot.png"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Students", url: "/students", icon: Users },
  { title: "Notes", url: "/notes", icon: BookOpen },
  { title: "Quizzes", url: "/quizzes", icon: Brain },
  { title: "Schedule", url: "/schedule", icon: Calendar },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/"
    return currentPath.startsWith(path)
  }

  const getNavClasses = (path: string) => {
    return isActive(path) 
      ? "bg-sidebar-accent text-sidebar-accent transition-smooth" 
      : "text-sidebar-foreground hover:bg-sidebar-hover hover:text-sidebar-accent transition-smooth"
  }

  return (
    <Sidebar
      className={`gradient-sidebar border-r-0 ${collapsed ? "w-16" : "w-64"} transition-smooth`}
      collapsible="icon"
    >
      <SidebarContent className="p-0">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-hover/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-orange/20 flex items-center justify-center">
              <img 
                src={foxMascot} 
                alt="Zoomies Fox" 
                className="w-8 h-8 object-contain"
              />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-bold text-sidebar-foreground">Zoomies</h2>
                <p className="text-xs text-sidebar-foreground/70">Teacher Hub</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup className="px-3 pt-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12 px-3 rounded-xl">
                    <NavLink to={item.url} className={getNavClasses(item.url)}>
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && (
                        <span className="ml-3 font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom section */}
        {!collapsed && (
          <div className="mt-auto p-4 border-t border-sidebar-hover/30">
            <div className="bg-accent-orange/10 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-4 w-4 text-accent-orange" />
                <span className="text-sm font-medium text-sidebar-foreground">Pro Tip</span>
              </div>
              <p className="text-xs text-sidebar-foreground/80">
                Schedule quizzes for your students' weak topics to boost performance!
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}