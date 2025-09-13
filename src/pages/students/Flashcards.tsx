import { useState } from 'react';
import { Shuffle, RotateCcw, ArrowRight, Star, Zap, Trophy } from 'lucide-react';
import foxMascot from '@/assets/fox-mascot.png';

const Flashcards = () => {
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [streak, setStreak] = useState(7);
  const [xpPoints, setXpPoints] = useState(240);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];

  const flashcards = {
    Mathematics: [
      {
        id: 1,
        prompt: "What is the quadratic formula?",
        answer: "x = (-b ± √(b² - 4ac)) / 2a\n\nUsed to solve equations of the form ax² + bx + c = 0"
      },
      {
        id: 2,
        prompt: "Define the derivative of f(x) = x²",
        answer: "f'(x) = 2x\n\nThe derivative represents the rate of change or slope of the function at any point x"
      },
      {
        id: 3,
        prompt: "What is the Pythagorean theorem?",
        answer: "a² + b² = c²\n\nWhere c is the hypotenuse and a, b are the other two sides of a right triangle"
      }
    ],
    Physics: [
      {
        id: 4,
        prompt: "State Newton's first law of motion",
        answer: "An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force.\n\nAlso known as the Law of Inertia"
      },
      {
        id: 5,
        prompt: "What is the formula for kinetic energy?",
        answer: "KE = ½mv²\n\nWhere m is mass and v is velocity. Measured in Joules (J)"
      }
    ]
  };

  const currentDeck = flashcards[selectedSubject as keyof typeof flashcards] || flashcards.Mathematics;
  const card = currentDeck[currentCard];
  const accuracyPercentage = sessionStats.total > 0 ? Math.round((sessionStats.correct / sessionStats.total) * 100) : 0;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = (correct: boolean) => {
    if (correct) {
      setSessionStats(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      setXpPoints(prev => prev + 10);
      if (sessionStats.correct + 1 > streak) {
        setStreak(sessionStats.correct + 1);
      }
    } else {
      setSessionStats(prev => ({ ...prev, total: prev.total + 1 }));
    }
    
    setCurrentCard((prev) => (prev + 1) % currentDeck.length);
    setIsFlipped(false);
  };

  const resetDeck = () => {
    setCurrentCard(0);
    setIsFlipped(false);
    setSessionStats({ correct: 0, total: 0 });
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Flashcards Game Mode</h1>
          <p className="text-muted-foreground">Boost your memory with interactive flashcard sessions</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="card-neumorphic text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Streak</span>
            </div>
            <div className="text-2xl font-bold text-accent-gradient">{streak}</div>
          </div>

          <div className="card-neumorphic text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">XP Points</span>
            </div>
            <div className="text-2xl font-bold text-gradient">{xpPoints}</div>
          </div>

          <div className="card-neumorphic text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Accuracy</span>
            </div>
            <div className="text-2xl font-bold text-accent-gradient">{accuracyPercentage}%</div>
          </div>

          <div className="card-neumorphic text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-sm font-medium text-muted-foreground">Progress</span>
            </div>
            <div className="text-2xl font-bold text-gradient">{currentCard + 1}/{currentDeck.length}</div>
          </div>
        </div>

        {/* Subject Selection */}
        <div className="card-neumorphic mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <img 
                src={foxMascot} 
                alt="Zoomies Fox" 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-light p-1"
              />
              <div className="speech-bubble bg-white p-3 rounded-lg shadow-lg relative">
                <p className="text-sm text-foreground">Keep going! You're doing great! 🎯</p>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-white rotate-45"></div>
              </div>
            </div>

            <div className="flex gap-3">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>

              <button 
                onClick={resetDeck}
                className="btn-hero text-sm px-4 py-2 flex items-center space-x-2"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>

              <button className="btn-cta text-sm px-4 py-2 flex items-center space-x-2">
                <Shuffle size={14} />
                <span>Shuffle</span>
              </button>
            </div>
          </div>
        </div>

        {/* Flashcard */}
        <div className="max-w-2xl mx-auto mb-8">
          <div 
            className={`card-neumorphic min-h-[300px] cursor-pointer transition-all duration-300 transform ${
              isFlipped ? 'scale-105' : 'hover:scale-102'
            }`}
            onClick={handleFlip}
          >
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              {!isFlipped ? (
                <div>
                  <div className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">Question</div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gradient leading-relaxed">
                    {card.prompt}
                  </h2>
                  <div className="mt-8 text-sm text-muted-foreground">
                    Click to flip and reveal the answer
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-sm text-accent mb-4 uppercase tracking-wide">Answer</div>
                  <div className="text-lg md:text-xl text-foreground leading-relaxed whitespace-pre-line">
                    {card.answer}
                  </div>
                  <div className="mt-8 text-sm text-muted-foreground">
                    Did you get it right?
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {isFlipped && (
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleNext(false)}
              className="px-8 py-3 bg-gradient-to-r from-destructive/80 to-destructive text-white rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
            >
              Need More Practice
            </button>
            <button
              onClick={() => handleNext(true)}
              className="btn-cta px-8 py-3 flex items-center space-x-2"
            >
              <span>Got It Right!</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* Session Summary */}
        {sessionStats.total > 0 && (
          <div className="card-neumorphic text-center">
            <h3 className="font-semibold text-gradient mb-4">Session Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-gradient mb-1">{sessionStats.correct}</div>
                <div className="text-sm text-muted-foreground">Correct Answers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-gradient mb-1">{accuracyPercentage}%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient mb-1">{sessionStats.total}</div>
                <div className="text-sm text-muted-foreground">Cards Reviewed</div>
              </div>
            </div>

            {accuracyPercentage >= 80 && (
              <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                <p className="text-accent font-medium">🎉 Excellent work! Consider taking a practice quiz to test your knowledge!</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Flashcards;