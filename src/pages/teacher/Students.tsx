import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardCard } from "@/components/dashboard-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Users, 
  Search, 
  Plus, 
  Filter,
  Mail,
  TrendingUp,
  TrendingDown,
  Minus
} from "lucide-react"

// Mock student data
const mockStudents = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@school.edu",
    level: "A Level",
    subjects: ["Math", "Physics"],
    avgScore: 92,
    quizzesCompleted: 15,
    trend: "up",
    status: "active"
  },
  {
    id: 2,
    name: "Mike Johnson",
    email: "mike.j@school.edu",
    level: "O Level",
    subjects: ["Biology", "Chemistry"],
    avgScore: 78,
    quizzesCompleted: 12,
    trend: "up",
    status: "active"
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma.d@school.edu",
    level: "SAT",
    subjects: ["English", "History"],
    avgScore: 85,
    quizzesCompleted: 18,
    trend: "down",
    status: "active"
  },
  {
    id: 4,
    name: "Alex Kumar",
    email: "alex.kumar@school.edu",
    level: "A Level",
    subjects: ["Chemistry", "Math"],
    avgScore: 74,
    quizzesCompleted: 8,
    trend: "stable",
    status: "inactive"
  }
]

export default function Students() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Minus className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    return status === "active" 
      ? <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      : <Badge variant="secondary">Inactive</Badge>
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "A Level":
        return "bg-purple-100 text-purple-800"
      case "O Level":
        return "bg-blue-100 text-blue-800"
      case "SAT":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Student Management
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your students and track their progress
            </p>
          </div>
          <Button className="gradient-orange text-white hover:scale-105 transition-bounce">
            <Plus className="h-4 w-4 mr-2" />
            Invite Student
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardCard title="Total Students" icon={<Users className="h-5 w-5" />}>
            <div className="text-2xl font-bold text-primary">127</div>
            <p className="text-sm text-muted-foreground">Enrolled</p>
          </DashboardCard>
          
          <DashboardCard title="Active This Week" icon={<TrendingUp className="h-5 w-5" />}>
            <div className="text-2xl font-bold text-green-600">98</div>
            <p className="text-sm text-muted-foreground">77% of total</p>
          </DashboardCard>
          
          <DashboardCard title="Average Score" icon={<TrendingUp className="h-5 w-5" />}>
            <div className="text-2xl font-bold text-primary">82.5%</div>
            <p className="text-sm text-muted-foreground">Class performance</p>
          </DashboardCard>
          
          <DashboardCard title="Need Attention" icon={<Mail className="h-5 w-5" />}>
            <div className="text-2xl font-bold text-red-600">8</div>
            <p className="text-sm text-muted-foreground">Below 70%</p>
          </DashboardCard>
        </div>

        {/* Search and Filter */}
        <DashboardCard title="Students" icon={<Users className="h-5 w-5" />}>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search students by name or email..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            {/* Student List */}
            <div className="space-y-3">
              {mockStudents.map((student) => (
                <div key={student.id} className="p-4 bg-muted/30 rounded-xl border border-muted hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-card-foreground">{student.name}</h3>
                          <Badge className={getLevelColor(student.level)}>{student.level}</Badge>
                          {getStatusBadge(student.status)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{student.email}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">
                            Subjects: {student.subjects.join(", ")}
                          </span>
                          <span className="text-muted-foreground">
                            Quizzes: {student.quizzesCompleted}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-bold text-primary">{student.avgScore}%</span>
                        {getTrendIcon(student.trend)}
                      </div>
                      <p className="text-sm text-muted-foreground">Average Score</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  )
}