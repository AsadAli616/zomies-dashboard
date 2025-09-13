import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Clock, Users, Star, Play, ChevronRight, Calendar, BookOpen, Calculator, Atom, Zap, Globe } from 'lucide-react';
import QuizPlayer from '@/components/QuizPlayer';
import QuizResults from '@/components/QuizResults';
import InteractiveDropdown from '@/components/InteractiveDropdown';

const Quizzes = () => {
  const [activeTab, setActiveTab] = useState<'available' | 'scheduled'>('available');
  const [selectedLevel, setSelectedLevel] = useState('O-Level');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState<'hub' | 'playing' | 'results'>('hub');
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);
  const [quizResults, setQuizResults] = useState<any>(null);

  const levels = ['O-Level', 'A-Level', 'SAT'];
  
  const subjects = [
    { value: 'All Subjects', label: 'All Subjects', icon: <Globe size={20} className="text-primary" />, description: 'Browse all available subjects' },
    { value: 'Mathematics', label: 'Mathematics', icon: <Calculator size={20} className="text-blue-600" />, description: 'Algebra, Calculus, Geometry' },
    { value: 'Physics', label: 'Physics', icon: <Zap size={20} className="text-yellow-600" />, description: 'Mechanics, Waves, Electricity' },
    { value: 'Chemistry', label: 'Chemistry', icon: <Atom size={20} className="text-green-600" />, description: 'Organic, Inorganic, Physical' },
    { value: 'Biology', label: 'Biology', icon: <BookOpen size={20} className="text-emerald-600" />, description: 'Cell Biology, Genetics, Ecology' },
    { value: 'English', label: 'English', icon: <BookOpen size={20} className="text-purple-600" />, description: 'Literature, Grammar, Writing' },
  ];

  const mockQuestions = [
    {
      id: 1,
      question: "What is the solution to the quadratic equation x² - 5x + 6 = 0?",
      options: ["x = 2, x = 3", "x = 1, x = 6", "x = -2, x = -3", "x = 0, x = 5"],
      correctAnswer: 0,
      explanation: "Using factoring: x² - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or x = 3"
    },
    {
      id: 2,
      question: "Which formula represents the quadratic formula?",
      options: ["x = (-b ± √(b² - 4ac)) / 2a", "x = -b ± √(b² + 4ac) / 2a", "x = b ± √(b² - 4ac) / 2a", "x = (-b ± √(b² - ac)) / 2a"],
      correctAnswer: 0,
      explanation: "The quadratic formula is x = (-b ± √(b² - 4ac)) / 2a for ax² + bx + c = 0"
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'Quadratic Equations Mastery',
      subject: 'Mathematics',
      level: 'O-Level',
      difficulty: 'Medium',
      duration: 45,
      questions: mockQuestions,
      participants: 1247,
      rating: 4.8,
      completed: false,
    },
    {
      id: 2,
      title: 'Organic Chemistry Basics',
      subject: 'Chemistry',
      level: 'A-Level',
      difficulty: 'Hard',
      duration: 60,
      questions: mockQuestions,
      participants: 892,
      rating: 4.6,
      completed: true,
    },
    {
      id: 3,
      title: 'Newton\'s Laws of Motion',
      subject: 'Physics',
      level: 'O-Level',
      difficulty: 'Easy',
      duration: 30,
      questions: mockQuestions,
      participants: 2134,
      rating: 4.9,
      completed: false,
    },
    {
      id: 4,
      title: 'SAT Math Practice Test',
      subject: 'Mathematics',
      level: 'SAT',
      difficulty: 'Hard',
      duration: 80,
      questions: mockQuestions,
      participants: 3456,
      rating: 4.7,
      completed: false,
    },
  ];

  const scheduledQuizzes = [
    {
      id: 101,
      title: 'Mid-term Mathematics Assessment',
      subject: 'Mathematics',
      level: 'O-Level',
      difficulty: 'Medium',
      duration: 90,
      questions: mockQuestions,
      scheduledDate: '2024-01-15',
      scheduledTime: '14:00',
      participants: 45,
      mandatory: true,
    },
    {
      id: 102,
      title: 'Physics Chapter 3 Quiz',
      subject: 'Physics',
      level: 'A-Level',
      difficulty: 'Easy',
      duration: 30,
      questions: mockQuestions,
      scheduledDate: '2024-01-18',
      scheduledTime: '10:30',
      participants: 32,
      mandatory: false,
    },
  ];

  const currentQuizzes = activeTab === 'available' ? quizzes : scheduledQuizzes;
  
  const filteredQuizzes = currentQuizzes.filter(quiz => {
    const levelMatch = selectedLevel === 'All Levels' || quiz.level === selectedLevel;
    const subjectMatch = selectedSubject === 'All Subjects' || quiz.subject === selectedSubject;
    const searchMatch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       quiz.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return levelMatch && subjectMatch && searchMatch;
  });

  const handleStartQuiz = (quiz: any) => {
    setSelectedQuiz({
      ...quiz,
      questions: quiz.questions || mockQuestions
    });
    setCurrentView('playing');
  };

  const handleQuizComplete = (results: any) => {
    setQuizResults(results);
    setCurrentView('results');
  };

  const handleRetakeQuiz = () => {
    setCurrentView('playing');
  };

  const handleBackToHub = () => {
    setCurrentView('hub');
    setSelectedQuiz(null);
    setQuizResults(null);
  };

  if (currentView === 'playing' && selectedQuiz) {
    return (
      <QuizPlayer
        quiz={selectedQuiz}
        onComplete={handleQuizComplete}
        onExit={handleBackToHub}
      />
    );
  }

  if (currentView === 'results' && quizResults) {
    return (
      <QuizResults
        results={quizResults}
        quizTitle={selectedQuiz?.title || ''}
        onRetake={handleRetakeQuiz}
        onHome={handleBackToHub}
      />
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-primary/20 text-primary';
      case 'Medium': return 'bg-accent/20 text-accent';
      case 'Hard': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gradient mb-2">Quiz Hub</h1>
          <p className="text-muted-foreground">Challenge yourself with interactive quizzes across all subjects</p>
          
          {/* Tabs */}
          <div className="flex bg-secondary/50 rounded-xl p-1 mt-6 w-fit">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('available')}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'available'
                  ? 'bg-white shadow-sm text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Play size={16} />
              <span>Available Quizzes</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('scheduled')}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'scheduled'
                  ? 'bg-white shadow-sm text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Calendar size={16} />
              <span>Scheduled Quizzes</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-neumorphic mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* Level Tabs */}
              <div className="flex bg-secondary/50 rounded-lg p-1">
                {levels.map(level => (
                  <motion.button
                    key={level}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      selectedLevel === level
                        ? 'bg-white shadow-sm text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {level}
                  </motion.button>
                ))}
              </div>

              {/* Interactive Subject Filter */}
              <InteractiveDropdown
                options={subjects}
                value={selectedSubject}
                onChange={setSelectedSubject}
                placeholder="Select Subject"
                className="min-w-[280px]"
              />
            </div>

            {/* Search */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64 hover:border-primary/50 transition-colors"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Quiz Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredQuizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card-neumorphic card-hover group cursor-pointer"
              >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {quiz.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-muted-foreground">{quiz.subject}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{quiz.level}</span>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(quiz.difficulty)}`}>
                  {quiz.difficulty}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{quiz.duration} min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{activeTab === 'scheduled' ? quiz.participants : quiz.participants.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground">
                    {Array.isArray(quiz.questions) ? quiz.questions.length : quiz.questions} questions
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {activeTab === 'scheduled' ? (
                    <>
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{(quiz as any).scheduledDate}</span>
                    </>
                  ) : (
                    <>
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span>{(quiz as any).rating}</span>
                    </>
                  )}
                </div>
              </div>

              {activeTab === 'scheduled' && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Scheduled for:</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      (quiz as any).mandatory ? 'bg-destructive/20 text-destructive' : 'bg-accent/20 text-accent'
                    }`}>
                      {(quiz as any).mandatory ? 'Mandatory' : 'Optional'}
                    </span>
                  </div>
                  <div className="text-lg font-medium">{(quiz as any).scheduledTime}</div>
                </div>
              )}

              {/* Action */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {activeTab === 'available' ? (
                  (quiz as any).completed ? (
                    <span className="text-sm text-accent font-medium">Completed ✓</span>
                  ) : (
                    <span className="text-sm text-muted-foreground">Ready to start</span>
                  )
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {new Date() > new Date(`${(quiz as any).scheduledDate} ${(quiz as any).scheduledTime}`) ? 'Available' : 'Upcoming'}
                  </span>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleStartQuiz(quiz)}
                  className="btn-hero text-sm px-4 py-2 flex items-center space-x-2"
                >
                  <Play size={14} />
                  <span>{activeTab === 'available' && (quiz as any).completed ? 'Retake' : 'Start'}</span>
                  <ChevronRight size={14} />
                </motion.button>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center card-neumorphic"
          >
            <div className="text-3xl font-bold text-accent-gradient mb-2">
              {activeTab === 'available' ? '1,247' : '12'}
            </div>
            <div className="text-sm text-muted-foreground">
              {activeTab === 'available' ? 'Total Quizzes Available' : 'Scheduled This Month'}
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center card-neumorphic"
          >
            <div className="text-3xl font-bold text-gradient mb-2">47</div>
            <div className="text-sm text-muted-foreground">Completed This Month</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center card-neumorphic"
          >
            <div className="text-3xl font-bold text-accent-gradient mb-2">87%</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Quizzes;