import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  children: ReactNode
  className?: string
  icon?: ReactNode
  trend?: {
    value: string
    isPositive: boolean
  }
}

export function DashboardCard({ title, children, className, icon, trend }: DashboardCardProps) {
  return (
    <Card className={cn(
      "gradient-card neumorphic border-0 transition-smooth hover:glow hover:scale-[1.02]",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-card-foreground flex items-center gap-2">
            {icon && <span className="text-primary">{icon}</span>}
            {title}
          </CardTitle>
          {trend && (
            <div className={cn(
              "text-sm font-medium px-2 py-1 rounded-full",
              trend.isPositive 
                ? "text-green-600 bg-green-100" 
                : "text-red-600 bg-red-100"
            )}>
              {trend.isPositive ? "+" : ""}{trend.value}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}