import { useState } from 'react';
import { TrendingUp, Target, Award, Calendar, ChevronDown } from 'lucide-react';

const Performance = () => {
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [timeframe, setTimeframe] = useState('Last 30 Days');

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];
  const timeframes = ['Last 7 Days', 'Last 30 Days', 'Last 3 Months', 'All Time'];

  const grades = { 
    Mathematics: 'A', 
    Physics: 'A-', 
    Chemistry: 'B+', 
    English: 'A', 
    Biology: 'B' 
  };

  const scoreHistory = [
    { date: '2024-01-01', score: 75 },
    { date: '2024-01-08', score: 78 },
    { date: '2024-01-15', score: 82 },
    { date: '2024-01-22', score: 85 },
    { date: '2024-01-29', score: 87 },
  ];

  const weakTopics = [
    { topic: 'Organic Chemistry', subject: 'Chemistry', score: 65, improvement: '+8%', trend: 'up' },
    { topic: 'Trigonometry', subject: 'Mathematics', score: 72, improvement: '+5%', trend: 'up' },
    { topic: 'Grammar Rules', subject: 'English', score: 78, improvement: '+12%', trend: 'up' },
    { topic: 'Electromagnetic Waves', subject: 'Physics', score: 69, improvement: '+3%', trend: 'up' },
  ];

  const topicMastery = [
    { topic: 'Algebra', score: 95, color: 'bg-primary' },
    { topic: 'Geometry', score: 88, color: 'bg-accent' },
    { topic: 'Statistics', score: 92, color: 'bg-primary' },
    { topic: 'Calculus', score: 76, color: 'bg-accent' },
    { topic: 'Probability', score: 84, color: 'bg-primary' },
    { topic: 'Mechanics', score: 89, color: 'bg-accent' },
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Performance Analytics</h1>
          <p className="text-muted-foreground">Track your progress and identify areas for improvement</p>
        </div>

        {/* Controls */}
        <div className="card-neumorphic mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-4">
              <div className="relative">
                <select 
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="bg-secondary/50 border border-border rounded-lg px-4 py-2 pr-8 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              
              <div className="relative">
                <select 
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="bg-secondary/50 border border-border rounded-lg px-4 py-2 pr-8 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {timeframes.map(tf => (
                    <option key={tf} value={tf}>{tf}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Predicted Grade */}
          <div className="card-neumorphic card-hover text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Predicted Grade</span>
            </div>
            <div className="text-4xl font-bold text-gradient mb-2">
              {grades[selectedSubject as keyof typeof grades]}
            </div>
            <div className="chip-streak text-xs">92% confidence</div>
          </div>

          {/* Average Score */}
          <div className="card-neumorphic card-hover text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Average Score</span>
            </div>
            <div className="text-4xl font-bold text-accent-gradient mb-2">87%</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center">
              <TrendingUp className="w-4 h-4 mr-1 text-accent" />
              +5% this month
            </div>
          </div>

          {/* Study Streak */}
          <div className="card-neumorphic card-hover text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Study Streak</span>
            </div>
            <div className="text-4xl font-bold text-gradient mb-2">12</div>
            <div className="text-sm text-muted-foreground">days</div>
          </div>

          {/* Total XP */}
          <div className="card-neumorphic card-hover text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Total XP</span>
            </div>
            <div className="text-4xl font-bold text-accent-gradient mb-2">2,847</div>
            <div className="text-sm text-muted-foreground">points earned</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Score Trend */}
          <div className="card-neumorphic">
            <h3 className="font-semibold text-gradient mb-4 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Score Trend - {selectedSubject}</span>
            </h3>
            
            <div className="h-64 flex items-end justify-between space-x-2 mb-4">
              {scoreHistory.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-gradient-to-t from-primary to-primary-light rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{ height: `${(data.score / 100) * 200}px` }}
                  />
                  <div className="text-xs text-muted-foreground mt-2 text-center">
                    {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <div className="text-sm font-medium text-center">{data.score}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Mastery Heatmap */}
          <div className="card-neumorphic">
            <h3 className="font-semibold text-gradient mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Topic Mastery</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {topicMastery.map((topic, index) => (
                <div key={index} className="bg-secondary/30 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{topic.topic}</span>
                    <span className="text-sm font-bold">{topic.score}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`${topic.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${topic.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weak Topics Section */}
        <div className="card-neumorphic">
          <h3 className="font-semibold text-gradient mb-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Improvement Areas</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weakTopics.map((topic, index) => (
              <div key={index} className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-sm">{topic.topic}</h4>
                    <p className="text-xs text-muted-foreground">{topic.subject}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{topic.score}%</div>
                    <div className="text-xs text-accent">{topic.improvement}</div>
                  </div>
                </div>
                
                <div className="w-full bg-secondary rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-destructive to-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${topic.score}%` }}
                  />
                </div>
                
                <button className="btn-hero text-xs px-3 py-1.5 w-full">
                  Practice Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Performance;