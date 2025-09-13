import { ChevronDown, TrendingUp, Target, Award, Percent } from 'lucide-react';
import { useState } from 'react';

const KPISection = () => {
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'English', 'Biology'];
  const grades = { 
    Mathematics: 'A', 
    Physics: 'A-', 
    Chemistry: 'B+', 
    English: 'A', 
    Biology: 'B' 
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Predicted Grade Card */}
      <div className="card-neumorphic card-hover">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Predicted Grade</span>
          </div>
        </div>
        
        <div className="relative mb-4">
          <select 
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient mb-1">
            {grades[selectedSubject as keyof typeof grades]}
          </div>
          <div className="chip-streak text-xs">
            92% confidence
          </div>
        </div>
      </div>

      {/* Points Achieved */}
      <div className="card-neumorphic card-hover">
        <div className="flex items-center space-x-2 mb-4">
          <Award className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">Points Achieved</span>
        </div>
        <div className="text-3xl font-bold text-accent-gradient mb-2">
          1,247
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          <TrendingUp className="w-4 h-4 mr-1 text-accent" />
          +24 this week
        </div>
      </div>

      {/* Quizzes Completed */}
      <div className="card-neumorphic card-hover">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">Quizzes Completed</span>
        </div>
        <div className="text-3xl font-bold text-gradient mb-2">
          47
        </div>
        <div className="text-sm text-muted-foreground">
          This month
        </div>
      </div>

      {/* Average Score */}
      <div className="card-neumorphic card-hover">
        <div className="flex items-center space-x-2 mb-4">
          <Percent className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">Average Score</span>
        </div>
        <div className="text-3xl font-bold text-accent-gradient mb-2">
          87%
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          <TrendingUp className="w-4 h-4 mr-1 text-accent" />
          +3% improvement
        </div>
      </div>
    </div>
  );
};

export default KPISection;