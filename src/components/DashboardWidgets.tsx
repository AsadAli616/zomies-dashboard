import { Calendar, BookOpen, TrendingDown, Activity, Clock, ArrowRight } from 'lucide-react';

const DashboardWidgets = () => {
  const upcomingQuizzes = [
    { id: 1, title: 'Calculus Derivatives', subject: 'Mathematics', time: '2:00 PM', difficulty: 'Hard' },
    { id: 2, title: 'Chemical Bonding', subject: 'Chemistry', time: '4:30 PM', difficulty: 'Medium' },
    { id: 3, title: 'Shakespeare Analysis', subject: 'English', time: 'Tomorrow', difficulty: 'Easy' },
  ];

  const recentNotes = [
    { id: 1, title: 'Quadratic Equations Guide', subject: 'Mathematics', updated: '2 hours ago' },
    { id: 2, title: 'Periodic Table Trends', subject: 'Chemistry', updated: '1 day ago' },
    { id: 3, title: 'Essay Writing Tips', subject: 'English', updated: '3 days ago' },
  ];

  const weakTopics = [
    { topic: 'Organic Chemistry', subject: 'Chemistry', score: 65, improvement: '+8%' },
    { topic: 'Trigonometry', subject: 'Mathematics', score: 72, improvement: '+5%' },
    { topic: 'Grammar Rules', subject: 'English', score: 78, improvement: '+12%' },
  ];

  const activities = [
    { action: 'Completed', item: 'Physics Quiz - Waves', time: '30 min ago', score: '92%' },
    { action: 'Studied', item: 'Organic Chemistry Notes', time: '2 hours ago', score: null },
    { action: 'Earned', item: 'Perfect Score Badge', time: '1 day ago', score: null },
    { action: 'Completed', item: 'Math Quiz - Calculus', time: '2 days ago', score: '87%' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Upcoming Quizzes */}
      <div className="card-neumorphic">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-gradient">Upcoming Quizzes</h3>
          </div>
          <button className="text-sm text-primary hover:text-primary-light transition-colors">
            View all
          </button>
        </div>
        
        <div className="space-y-3">
          {upcomingQuizzes.map(quiz => (
            <div key={quiz.id} className="bg-secondary/30 rounded-lg p-3 hover:bg-secondary/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-sm">{quiz.title}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  quiz.difficulty === 'Hard' ? 'bg-destructive/20 text-destructive' :
                  quiz.difficulty === 'Medium' ? 'bg-accent/20 text-accent' :
                  'bg-primary/20 text-primary'
                }`}>
                  {quiz.difficulty}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{quiz.subject}</span>
                <div className="flex items-center space-x-1">
                  <Clock size={12} />
                  <span>{quiz.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Notes */}
      <div className="card-neumorphic">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-accent" />
            <h3 className="font-semibold text-accent-gradient">Recent Notes</h3>
          </div>
          <button className="text-sm text-accent hover:text-accent-light transition-colors">
            Browse all
          </button>
        </div>
        
        <div className="space-y-3">
          {recentNotes.map(note => (
            <div key={note.id} className="bg-secondary/30 rounded-lg p-3 hover:bg-secondary/50 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">{note.title}</h4>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{note.subject}</span>
                    <span>{note.updated}</span>
                  </div>
                </div>
                <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weak Topics */}
      <div className="card-neumorphic">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <TrendingDown className="w-5 h-5 text-destructive" />
            <h3 className="font-semibold text-foreground">Needs Practice</h3>
          </div>
          <button className="text-sm text-primary hover:text-primary-light transition-colors">
            See all
          </button>
        </div>
        
        <div className="space-y-3">
          {weakTopics.map((topic, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-sm">{topic.topic}</h4>
                <span className="text-xs text-accent font-medium">{topic.improvement}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-muted-foreground">{topic.subject}</span>
                <span className="text-sm font-semibold">{topic.score}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-destructive to-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${topic.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Feed - Full Width */}
      <div className="lg:col-span-3 card-neumorphic">
        <div className="flex items-center space-x-2 mb-4">
          <Activity className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-gradient">Recent Activity</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {activities.map((activity, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium text-primary">{activity.action}</span>{' '}
                    <span className="text-foreground">{activity.item}</span>
                  </p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                    {activity.score && (
                      <span className="text-xs font-medium text-accent">{activity.score}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;