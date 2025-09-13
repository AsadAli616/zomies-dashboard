import { DashboardLayout } from "@/components/dashboard-layout";
import { DashboardCard } from "@/components/dashboard-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Search,
  Upload,
  Eye,
  Download,
  Calendar,
  Filter,
  FileText,
  Users,
} from "lucide-react";

// Mock notes data
const mockNotes = [
  {
    id: 1,
    title: "Quadratic Equations - Complete Guide",
    subject: "Mathematics",
    topic: "Algebra",
    level: "A Level",
    uploadDate: "2024-01-15",
    views: 45,
    downloads: 32,
    fileType: "PDF",
    size: "2.3 MB",
  },
  {
    id: 2,
    title: "Photosynthesis Process Notes",
    subject: "Biology",
    topic: "Plant Biology",
    level: "O Level",
    uploadDate: "2024-01-12",
    views: 67,
    downloads: 48,
    fileType: "PDF",
    size: "1.8 MB",
  },
  {
    id: 3,
    title: "World War II Timeline",
    subject: "History",
    topic: "Modern History",
    level: "SAT",
    uploadDate: "2024-01-10",
    views: 23,
    downloads: 18,
    fileType: "PDF",
    size: "3.1 MB",
  },
  {
    id: 4,
    title: "Chemical Bonding Basics",
    subject: "Chemistry",
    topic: "Atomic Structure",
    level: "A Level",
    uploadDate: "2024-01-08",
    views: 38,
    downloads: 25,
    fileType: "PDF",
    size: "2.7 MB",
  },
];

export default function TeacherNotes() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "A Level":
        return "bg-purple-100 text-purple-800";
      case "O Level":
        return "bg-blue-100 text-blue-800";
      case "SAT":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSubjectColor = (subject: string) => {
    const colors = {
      Mathematics: "bg-green-100 text-green-800",
      Biology: "bg-emerald-100 text-emerald-800",
      History: "bg-yellow-100 text-yellow-800",
      Chemistry: "bg-red-100 text-red-800",
      Physics: "bg-blue-100 text-blue-800",
      English: "bg-indigo-100 text-indigo-800",
    };
    return (
      colors[subject as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Study Notes & Resources
            </h1>
            <p className="text-muted-foreground mt-1">
              Upload and manage study materials for your students
            </p>
          </div>
          <Button className="gradient-orange text-white hover:scale-105 transition-bounce">
            <Upload className="h-4 w-4 mr-2" />
            Upload Notes
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Notes"
            icon={<BookOpen className="h-5 w-5" />}
          >
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-sm text-muted-foreground">Documents uploaded</p>
          </DashboardCard>

          <DashboardCard title="Total Views" icon={<Eye className="h-5 w-5" />}>
            <div className="text-2xl font-bold text-blue-600">1,234</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </DashboardCard>

          <DashboardCard
            title="Downloads"
            icon={<Download className="h-5 w-5" />}
          >
            <div className="text-2xl font-bold text-green-600">892</div>
            <p className="text-sm text-muted-foreground">Total downloads</p>
          </DashboardCard>

          <DashboardCard
            title="Popular Topic"
            icon={<FileText className="h-5 w-5" />}
          >
            <div className="text-lg font-bold text-primary">Algebra</div>
            <p className="text-sm text-muted-foreground">Most viewed</p>
          </DashboardCard>
        </div>

        {/* Notes Management */}
        <DashboardCard
          title="Manage Notes"
          icon={<BookOpen className="h-5 w-5" />}
        >
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search notes by title, subject, or topic..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            {/* Notes List */}
            <div className="space-y-3">
              {mockNotes.map((note) => (
                <div
                  key={note.id}
                  className="p-4 bg-muted/30 rounded-xl border border-muted hover:bg-muted/50 transition-smooth"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-card-foreground text-lg">
                          {note.title}
                        </h3>
                        <Badge className={getLevelColor(note.level)}>
                          {note.level}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <Badge
                          className={getSubjectColor(note.subject)}
                          variant="secondary"
                        >
                          {note.subject}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Topic: {note.topic}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {note.fileType} • {note.size}
                        </span>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(note.uploadDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {note.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {note.downloads} downloads
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DashboardCard>

        {/* Upload Guidelines */}
        <DashboardCard
          title="Upload Guidelines"
          icon={<FileText className="h-5 w-5" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">
                Supported Formats
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• PDF documents (recommended)</li>
                <li>• Word documents (.docx)</li>
                <li>• PowerPoint presentations (.pptx)</li>
                <li>• Images (PNG, JPG, SVG)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">
                Best Practices
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use clear, descriptive titles</li>
                <li>• Tag with appropriate subject and level</li>
                <li>• Keep file sizes under 10MB</li>
                <li>• Include topic keywords for easy searching</li>
              </ul>
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
}
