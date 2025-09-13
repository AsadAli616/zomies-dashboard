import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardCard } from "@/components/dashboard-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Clock, 
  Users, 
  Brain,
  Edit,
  Trash2,
  AlertCircle,
  CheckCircle,
  Filter
} from "lucide-react"

// Mock scheduled quiz data
const mockScheduledQuizzes = [
  {
    id: 1,
    title: "Algebra Fundamentals Quiz",
    subject: "Mathematics",
    level: "A Level",
    date: new Date(2024, 0, 20),
    time: "10:00 AM",
    duration: 60,
    studentsAssigned: 23,
    status: "scheduled"
  },
  {
    id: 2,
    title: "Cell Biology Test",
    subject: "Biology", 
    level: "O Level",
    date: new Date(2024, 0, 22),
    time: "2:00 PM",
    duration: 45,
    studentsAssigned: 18,
    status: "scheduled"
  },
  {
    id: 3,
    title: "World War II Assessment",
    subject: "History",
    level: "SAT",
    date: new Date(2024, 0, 18),
    time: "9:00 AM",
    duration: 90,
    studentsAssigned: 15,
    status: "completed"
  }
]

const scheduleFormSchema = z.object({
  title: z.string().min(1, "Quiz title is required"),
  subject: z.string().min(1, "Subject is required"),
  level: z.string().min(1, "Level is required"),
  date: z.date({
    required_error: "Date is required",
  }),
  time: z.string().min(1, "Time is required"),
  duration: z.string().min(1, "Duration is required"),
  students: z.string().min(1, "Student group is required"),
  description: z.string().optional(),
})

type ScheduleFormValues = z.infer<typeof scheduleFormSchema>

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingQuiz, setEditingQuiz] = useState<any>(null)

  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      title: "",
      subject: "",
      level: "",
      time: "",
      duration: "",
      students: "",
      description: "",
    },
  })

  const onSubmit = (data: ScheduleFormValues) => {
    console.log("Scheduling quiz:", data)
    setIsDialogOpen(false)
    form.reset()
    setEditingQuiz(null)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800"><Clock className="h-3 w-3 mr-1" />Scheduled</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>
      case "overdue":
        return <Badge className="bg-red-100 text-red-800"><AlertCircle className="h-3 w-3 mr-1" />Overdue</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
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

  const quizzesForSelectedDate = mockScheduledQuizzes.filter(
    quiz => quiz.date.toDateString() === selectedDate.toDateString()
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Quiz Schedule
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage and schedule quizzes for your students
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-orange text-white hover:scale-105 transition-bounce">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Quiz
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingQuiz ? "Edit Quiz Schedule" : "Schedule New Quiz"}
                </DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quiz Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter quiz title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="biology">Biology</SelectItem>
                              <SelectItem value="chemistry">Chemistry</SelectItem>
                              <SelectItem value="physics">Physics</SelectItem>
                              <SelectItem value="history">History</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="o-level">O Level</SelectItem>
                              <SelectItem value="a-level">A Level</SelectItem>
                              <SelectItem value="sat">SAT</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration (minutes)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Duration" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="45">45 minutes</SelectItem>
                              <SelectItem value="60">1 hour</SelectItem>
                              <SelectItem value="90">1.5 hours</SelectItem>
                              <SelectItem value="120">2 hours</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="students"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assign to</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select students" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="all-a-level">All A Level Students</SelectItem>
                              <SelectItem value="all-o-level">All O Level Students</SelectItem>
                              <SelectItem value="all-sat">All SAT Students</SelectItem>
                              <SelectItem value="math-class">Mathematics Class</SelectItem>
                              <SelectItem value="biology-class">Biology Class</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Add any additional instructions or notes..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end space-x-2 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setIsDialogOpen(false)
                        setEditingQuiz(null)
                        form.reset()
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="gradient-orange text-white">
                      {editingQuiz ? "Update Quiz" : "Schedule Quiz"}
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardCard title="Total Scheduled" icon={<Calendar className="h-5 w-5" />}>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </DashboardCard>
          
          <DashboardCard title="Upcoming" icon={<Clock className="h-5 w-5" />}>
            <div className="text-2xl font-bold text-blue-600">5</div>
            <p className="text-sm text-muted-foreground">Next 7 days</p>
          </DashboardCard>
          
          <DashboardCard title="Active Now" icon={<Brain className="h-5 w-5" />}>
            <div className="text-2xl font-bold text-green-600">2</div>
            <p className="text-sm text-muted-foreground">In progress</p>
          </DashboardCard>
          
          <DashboardCard title="Avg. Completion" icon={<Users className="h-5 w-5" />}>
            <div className="text-2xl font-bold text-primary">87%</div>
            <p className="text-sm text-muted-foreground">Student rate</p>
          </DashboardCard>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <DashboardCard title="Calendar" icon={<Calendar className="h-5 w-5" />}>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              className="rounded-md border-0 p-0"
            />
          </DashboardCard>

          {/* Scheduled Quizzes */}
          <DashboardCard title="All Scheduled Quizzes" className="lg:col-span-2" icon={<Brain className="h-5 w-5" />}>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Input placeholder="Search quizzes..." className="flex-1" />
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
              </div>
              
              <div className="space-y-3">
                {mockScheduledQuizzes.map((quiz) => (
                  <div key={quiz.id} className="p-4 bg-muted/30 rounded-xl border border-muted hover:bg-muted/50 transition-smooth">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-card-foreground">{quiz.title}</h3>
                          <Badge className={getLevelColor(quiz.level)}>{quiz.level}</Badge>
                          {getStatusBadge(quiz.status)}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span>{quiz.subject}</span>
                          <span>•</span>
                          <span>{format(quiz.date, "PPP")}</span>
                          <span>•</span>
                          <span>{quiz.time}</span>
                          <span>•</span>
                          <span>{quiz.duration} min</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {quiz.studentsAssigned} students assigned
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setEditingQuiz(quiz)
                            setIsDialogOpen(true)
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Today's Schedule */}
        {quizzesForSelectedDate.length > 0 && (
          <DashboardCard 
            title={`Schedule for ${format(selectedDate, "EEEE, MMMM d")}`} 
            icon={<Clock className="h-5 w-5" />}
          >
            <div className="space-y-3">
              {quizzesForSelectedDate.map((quiz) => (
                <div key={quiz.id} className="flex items-center justify-between p-3 bg-accent-orange/10 rounded-lg">
                  <div>
                    <h4 className="font-medium text-card-foreground">{quiz.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {quiz.time} • {quiz.duration} minutes • {quiz.studentsAssigned} students
                    </p>
                  </div>
                  {getStatusBadge(quiz.status)}
                </div>
              ))}
            </div>
          </DashboardCard>
        )}
      </div>
    </DashboardLayout>
  )
}