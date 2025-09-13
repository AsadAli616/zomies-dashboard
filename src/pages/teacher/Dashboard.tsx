import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardCard } from "@/components/dashboard-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Brain, 
  TrendingUp, 
  BookOpen, 
  Star, 
  Clock, 
  Award,
  Activity,
  Target,
  Zap
} from "lucide-react"

// Mock data for the dashboard
const mockData = {
  stats: {
    totalStudents: 127,
    activeQuizzes: 8,
    averageScore: 78,
    notesShared: 24
  },
  recentActivity: [
    { student: "Sarah Chen", action: "completed Quiz: Algebra Basics", time: "2 mins ago", score: 92 },
    { student: "Mike Johnson", action: "downloaded Notes: Physics Laws", time: "15 mins ago" },
    { student: "Emma Davis", action: "completed Quiz: History Timeline", time: "1 hour ago", score: 85 },
    { student: "Alex Kumar", action: "started Quiz: Chemistry Bonds", time: "2 hours ago" },
  ],
  badges: [
    { name: "Quiz Master", description: "Created 25+ quizzes", icon: Brain, earned: true },
    { name: "Mentor of the Week", description: "Top engagement", icon: Star, earned: true },
    { name: "Note Creator", description: "50+ notes shared", icon: BookOpen, earned: false },
    { name: "Performance Booster", description: "Improved class average", icon: TrendingUp, earned: true },
  ]
}

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Welcome back, Professor Smith! 🦊
            </h1>
            <p className="text-muted-foreground mt-1">
              Your students are making great progress. Here's what's happening today.
            </p>
          </div>
          <Button className="gradient-orange text-white hover:scale-105 transition-bounce">
            <Activity className="h-4 w-4 mr-2" />
            Create Quiz
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard 
            title="Total Students" 
            icon={<Users className="h-5 w-5" />}
            trend={{ value: "12%", isPositive: true }}
          >
            <div className="text-3xl font-bold text-primary">{mockData.stats.totalStudents}</div>
            <p className="text-sm text-muted-foreground mt-1">Active learners</p>
          </DashboardCard>

          <DashboardCard 
            title="Active Quizzes" 
            icon={<Brain className="h-5 w-5" />}
          >
            <div className="text-3xl font-bold text-primary">{mockData.stats.activeQuizzes}</div>
            <p className="text-sm text-muted-foreground mt-1">Currently running</p>
          </DashboardCard>

          <DashboardCard 
            title="Class Average" 
            icon={<TrendingUp className="h-5 w-5" />}
            trend={{ value: "8%", isPositive: true }}
          >
            <div className="text-3xl font-bold text-primary">{mockData.stats.averageScore}%</div>
            <p className="text-sm text-muted-foreground mt-1">Quiz performance</p>
          </DashboardCard>

          <DashboardCard 
            title="Notes Shared" 
            icon={<BookOpen className="h-5 w-5" />}
          >
            <div className="text-3xl font-bold text-primary">{mockData.stats.notesShared}</div>
            <p className="text-sm text-muted-foreground mt-1">This month</p>
          </DashboardCard>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <DashboardCard title="Recent Activity" className="lg:col-span-2" icon={<Activity className="h-5 w-5" />}>
            <div className="space-y-4">
              {mockData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-card-foreground">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </p>
                  </div>
                  {activity.score && (
                    <Badge className="gradient-orange text-white">
                      {activity.score}%
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Teacher Badges */}
          <DashboardCard title="Your Achievements" icon={<Award className="h-5 w-5" />}>
            <div className="space-y-3">
              {mockData.badges.map((badge, index) => (
                <div key={index} className={`p-3 rounded-lg border ${
                  badge.earned 
                    ? "bg-accent-orange/10 border-accent-orange/30" 
                    : "bg-muted/30 border-muted"
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <badge.icon className={`h-5 w-5 ${
                      badge.earned ? "text-accent-orange" : "text-muted-foreground"
                    }`} />
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        badge.earned ? "text-accent-orange" : "text-muted-foreground"
                      }`}>
                        {badge.name}
                      </h4>
                    </div>
                    {badge.earned && <Zap className="h-4 w-4 text-accent-orange" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                  {!badge.earned && (
                    <Progress value={65} className="h-1 mt-2" />
                  )}
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        {/* Quick Stats */}
        <DashboardCard title="Class Performance Insights" icon={<Target className="h-5 w-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
              <p className="text-sm text-muted-foreground">Quiz completion rate</p>
              <Progress value={85} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">92%</div>
              <p className="text-sm text-muted-foreground">Student satisfaction</p>
              <Progress value={92} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">73%</div>
              <p className="text-sm text-muted-foreground">Knowledge retention</p>
              <Progress value={73} className="mt-2" />
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  )
}