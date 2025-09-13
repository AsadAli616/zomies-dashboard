import { useState } from 'react';
import { Search, Download, Bookmark, Eye, Clock, FileText, Star } from 'lucide-react';

const Notes = () => {
  const [selectedLevel, setSelectedLevel] = useState('O-Level');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [viewMode, setViewMode] = useState('grid');

  const levels = ['O-Level', 'A-Level', 'SAT'];
  const subjects = ['All Subjects', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];

  const notes = [
    {
      id: 1,
      title: 'Quadratic Equations Complete Guide',
      subject: 'Mathematics',
      level: 'O-Level',
      topic: 'Algebra',
      uploadedBy: 'Dr. Sarah Johnson',
      uploadDate: '2024-01-15',
      downloads: 2847,
      rating: 4.9,
      pages: 12,
      fileSize: '2.4 MB',
      bookmarked: true,
      revised: false,
    },
    {
      id: 2,
      title: 'Organic Chemistry Reactions',
      subject: 'Chemistry',
      level: 'A-Level',
      topic: 'Organic Chemistry',
      uploadedBy: 'Prof. Michael Chen',
      uploadDate: '2024-01-20',
      downloads: 1923,
      rating: 4.7,
      pages: 18,
      fileSize: '3.1 MB',
      bookmarked: false,
      revised: true,
    },
    {
      id: 3,
      title: 'Newton\'s Laws & Applications',
      subject: 'Physics',
      level: 'O-Level',
      topic: 'Mechanics',
      uploadedBy: 'Dr. Emily Rodriguez',
      uploadDate: '2024-01-18',
      downloads: 3156,
      rating: 4.8,
      pages: 15,
      fileSize: '2.9 MB',
      bookmarked: true,
      revised: false,
    },
    {
      id: 4,
      title: 'SAT Essay Writing Strategies',
      subject: 'English',
      level: 'SAT',
      topic: 'Writing',
      uploadedBy: 'Ms. Jennifer Adams',
      uploadDate: '2024-01-22',
      downloads: 1645,
      rating: 4.6,
      pages: 8,
      fileSize: '1.7 MB',
      bookmarked: false,
      revised: false,
    },
  ];

  const filteredNotes = notes.filter(note => {
    const levelMatch = selectedLevel === 'All Levels' || note.level === selectedLevel;
    const subjectMatch = selectedSubject === 'All Subjects' || note.subject === selectedSubject;
    return levelMatch && subjectMatch;
  });

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Study Notes</h1>
          <p className="text-muted-foreground">Access comprehensive notes uploaded by expert teachers</p>
        </div>

        {/* Filters & Controls */}
        <div className="card-neumorphic mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* Level Tabs */}
              <div className="flex bg-secondary/50 rounded-lg p-1">
                {levels.map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      selectedLevel === level
                        ? 'bg-white shadow-sm text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>

              {/* Subject Filter */}
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>

              {/* Sort Options */}
              <select className="bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>Most Recent</option>
                <option>Most Downloaded</option>
                <option>Highest Rated</option>
                <option>By Topic</option>
              </select>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search notes..."
                className="bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
              />
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map(note => (
            <div key={note.id} className="card-neumorphic card-hover group cursor-pointer">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {note.topic}
                    </span>
                    {note.bookmarked && (
                      <Bookmark className="w-4 h-4 fill-accent text-accent" />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {note.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-muted-foreground">{note.subject}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{note.level}</span>
                  </div>
                </div>
                {note.revised && (
                  <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                    Revised ✓
                  </span>
                )}
              </div>

              {/* Author & Date */}
              <div className="text-sm text-muted-foreground mb-4">
                <p>By {note.uploadedBy}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Clock className="w-3 h-3" />
                  <span>{new Date(note.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4 text-muted-foreground" />
                  <span>{note.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span>{note.rating}</span>
                </div>
                <div className="text-muted-foreground">
                  {note.pages} pages
                </div>
                <div className="text-muted-foreground">
                  {note.fileSize}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <button className="btn-hero text-sm px-3 py-2 flex items-center space-x-1 flex-1">
                  <Eye size={14} />
                  <span>Preview</span>
                </button>
                <button className="btn-cta text-sm px-3 py-2 flex items-center space-x-1 flex-1">
                  <Download size={14} />
                  <span>Download</span>
                </button>
                <button className={`p-2 rounded-lg transition-colors ${
                  note.bookmarked 
                    ? 'text-accent hover:text-accent-light' 
                    : 'text-muted-foreground hover:text-accent'
                }`}>
                  <Bookmark size={16} className={note.bookmarked ? 'fill-current' : ''} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center card-neumorphic">
            <div className="text-2xl font-bold text-gradient mb-2">847</div>
            <div className="text-sm text-muted-foreground">Total Notes</div>
          </div>
          <div className="text-center card-neumorphic">
            <div className="text-2xl font-bold text-accent-gradient mb-2">23</div>
            <div className="text-sm text-muted-foreground">Bookmarked</div>
          </div>
          <div className="text-center card-neumorphic">
            <div className="text-2xl font-bold text-gradient mb-2">156</div>
            <div className="text-sm text-muted-foreground">Downloaded</div>
          </div>
          <div className="text-center card-neumorphic">
            <div className="text-2xl font-bold text-accent-gradient mb-2">89%</div>
            <div className="text-sm text-muted-foreground">Revision Rate</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notes;