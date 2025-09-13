import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardCard } from "@/components/dashboard-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Database,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  BookOpen,
  Brain,
  Users,
  Save,
  Upload
} from "lucide-react"

// Mock user data
const mockUser = {
  name: "Professor Smith",
  email: "prof.smith@zoomies.edu",
  phone: "+1 (555) 123-4567",
  location: "London, UK",
  bio: "Experienced educator specializing in A Level Mathematics and Physics. Passionate about helping students achieve their academic goals through innovative teaching methods.",
  subjects: ["Mathematics", "Physics", "Chemistry"],
  experience: "12 years",
  institution: "Zoomies Education Center"
}

export default function Settings() {
  const [notifications, setNotifications] = useState({
    emailQuizResults: true,
    emailStudentProgress: true,
    emailScheduleReminders: true,
    pushQuizCompleted: true,
    pushNewMessages: false,
    pushSystemUpdates: true,
    smsImportant: false,
    smsReminders: true
  })

  const [preferences, setPreferences] = useState({
    timezone: "GMT",
    language: "English",
    dateFormat: "DD/MM/YYYY",
    theme: "light",
    autoSave: true,
    showTips: true
  })

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your account preferences and system settings
            </p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Preferences
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Data
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <DashboardCard title="Profile Information" icon={<User className="h-5 w-5" />}>
              <div className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                      PS
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Photo
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Recommended: Square image, at least 200x200 pixels
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={mockUser.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={mockUser.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue={mockUser.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue={mockUser.location} />
                  </div>
                </div>

                {/* Professional Information */}
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Professional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution</Label>
                      <Input id="institution" defaultValue={mockUser.institution} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input id="experience" defaultValue={mockUser.experience} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subjects">Teaching Subjects</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {mockUser.subjects.map((subject) => (
                        <Badge key={subject} variant="secondary">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                    <Input id="subjects" placeholder="Add subjects (comma separated)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell students about yourself..." 
                      defaultValue={mockUser.bio}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="gradient-orange text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </DashboardCard>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <DashboardCard title="Email Notifications" icon={<Mail className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Quiz Results</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when students complete quizzes
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.emailQuizResults}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, emailQuizResults: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Student Progress</Label>
                    <p className="text-sm text-muted-foreground">
                      Weekly reports on student performance
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.emailStudentProgress}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, emailStudentProgress: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Schedule Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Reminders for upcoming scheduled quizzes
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.emailScheduleReminders}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, emailScheduleReminders: checked }))
                    }
                  />
                </div>
              </div>
            </DashboardCard>

            <DashboardCard title="Push Notifications" icon={<Bell className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Quiz Completed</Label>
                    <p className="text-sm text-muted-foreground">
                      Instant notifications when quizzes are completed
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.pushQuizCompleted}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, pushQuizCompleted: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Messages</Label>
                    <p className="text-sm text-muted-foreground">
                      Notifications for student messages and questions
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.pushNewMessages}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, pushNewMessages: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Important system announcements and updates
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.pushSystemUpdates}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, pushSystemUpdates: checked }))
                    }
                  />
                </div>
              </div>
            </DashboardCard>

            <DashboardCard title="SMS Notifications" icon={<Phone className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Important Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Critical system alerts and security notifications
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.smsImportant}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, smsImportant: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Quiz Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      SMS reminders for scheduled quizzes
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.smsReminders}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, smsReminders: checked }))
                    }
                  />
                </div>
              </div>
            </DashboardCard>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences" className="space-y-6">
            <DashboardCard title="Display Preferences" icon={<Palette className="h-5 w-5" />}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Timezone</Label>
                    <Select defaultValue={preferences.timezone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="GMT">GMT (London)</SelectItem>
                        <SelectItem value="EST">EST (New York)</SelectItem>
                        <SelectItem value="PST">PST (Los Angeles)</SelectItem>
                        <SelectItem value="CET">CET (Paris)</SelectItem>
                        <SelectItem value="JST">JST (Tokyo)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Select defaultValue={preferences.language}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="German">German</SelectItem>
                        <SelectItem value="Chinese">Chinese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Date Format</Label>
                    <Select defaultValue={preferences.dateFormat}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <Select defaultValue={preferences.theme}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="auto">Auto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-save drafts</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically save quiz and note drafts
                      </p>
                    </div>
                    <Switch 
                      checked={preferences.autoSave}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, autoSave: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show helpful tips</Label>
                      <p className="text-sm text-muted-foreground">
                        Display contextual tips and tutorials
                      </p>
                    </div>
                    <Switch 
                      checked={preferences.showTips}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, showTips: checked }))
                      }
                    />
                  </div>
                </div>
              </div>
            </DashboardCard>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security" className="space-y-6">
            <DashboardCard title="Password & Security" icon={<Shield className="h-5 w-5" />}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Change Password</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button className="gradient-orange text-white">
                      Update Password
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium">Two-factor authentication is disabled</p>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-muted-foreground">
                          Chrome on Windows • London, UK • Active now
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Current</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium">Mobile App</p>
                        <p className="text-sm text-muted-foreground">
                          iOS App • London, UK • 2 hours ago
                        </p>
                      </div>
                      <Button variant="outline" size="sm">Revoke</Button>
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </TabsContent>

          {/* Data Management */}
          <TabsContent value="data" className="space-y-6">
            <DashboardCard title="Data Export" icon={<Database className="h-5 w-5" />}>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Export your data for backup or migration purposes. All exports are in JSON format.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <Users className="h-8 w-8 mb-2 text-primary" />
                    <span className="font-medium">Student Data</span>
                    <span className="text-sm text-muted-foreground">Export all student information</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <Brain className="h-8 w-8 mb-2 text-primary" />
                    <span className="font-medium">Quiz Data</span>
                    <span className="text-sm text-muted-foreground">Export all quizzes and results</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <BookOpen className="h-8 w-8 mb-2 text-primary" />
                    <span className="font-medium">Notes & Resources</span>
                    <span className="text-sm text-muted-foreground">Export all study materials</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <Database className="h-8 w-8 mb-2 text-primary" />
                    <span className="font-medium">Complete Backup</span>
                    <span className="text-sm text-muted-foreground">Export everything</span>
                  </Button>
                </div>
              </div>
            </DashboardCard>

            <DashboardCard title="Data Management" icon={<Shield className="h-5 w-5" />}>
              <div className="space-y-6">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Data Retention Policy</h4>
                  <p className="text-sm text-yellow-700">
                    Student data is retained for 2 years after account deletion. 
                    Quiz results are kept for statistical analysis but anonymized after 1 year.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Danger Zone</h3>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">Delete Account</h4>
                    <p className="text-sm text-red-700 mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="destructive">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}