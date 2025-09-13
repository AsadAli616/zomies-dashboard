import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Flag, ChevronLeft, ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizPlayerProps {
  quiz: {
    id: number;
    title: string;
    duration: number;
    questions: Question[];
  };
  onComplete: (results: any) => void;
  onExit: () => void;
}

const QuizPlayer = ({ quiz, onComplete, onExit }: QuizPlayerProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (timeLeft <= 60) return 'text-destructive';
    if (timeLeft <= 300) return 'text-accent';
    return 'text-muted-foreground';
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  const handleFlag = () => {
    const newFlagged = new Set(flagged);
    if (flagged.has(currentQuestion)) {
      newFlagged.delete(currentQuestion);
    } else {
      newFlagged.add(currentQuestion);
    }
    setFlagged(newFlagged);
  };

  const handleSubmit = () => {
    let correct = 0;
    const results = quiz.questions.map((q, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === q.correctAnswer;
      if (isCorrect) correct++;
      
      return {
        questionId: q.id,
        question: q.question,
        userAnswer: userAnswer ?? -1,
        correctAnswer: q.correctAnswer,
        isCorrect,
        explanation: q.explanation,
        options: q.options
      };
    });

    const score = Math.round((correct / quiz.questions.length) * 100);
    
    onComplete({
      score,
      correct,
      total: quiz.questions.length,
      timeSpent: (quiz.duration * 60) - timeLeft,
      results
    });
  };

  const canGoNext = currentQuestion < quiz.questions.length - 1;
  const canGoPrev = currentQuestion > 0;
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const question = quiz.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-semibold text-lg">{quiz.title}</h1>
              <p className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 ${getTimeColor()}`}>
                <Clock size={16} />
                <span className="font-mono font-medium">{formatTime(timeLeft)}</span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleFlag}
                className={flagged.has(currentQuestion) ? 'bg-accent/20 border-accent' : ''}
              >
                <Flag size={16} className={flagged.has(currentQuestion) ? 'fill-accent' : ''} />
              </Button>
              
              <Button variant="outline" size="sm" onClick={onExit}>
                Exit
              </Button>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="card-neumorphic">
              <h2 className="text-xl font-medium mb-6">{question.question}</h2>
              
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                      answers[currentQuestion] === index
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50 bg-card'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                        answers[currentQuestion] === index
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              disabled={!canGoPrev}
            >
              <ChevronLeft size={16} />
              Previous
            </Button>
            
            <div className="flex items-center space-x-2">
              {Object.keys(answers).length === quiz.questions.length && (
                <Button
                  className="btn-hero"
                  onClick={() => setShowSubmitConfirm(true)}
                >
                  Submit Quiz
                </Button>
              )}
              
              {canGoNext && (
                <Button
                  className="btn-hero"
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                >
                  Next
                  <ChevronRight size={16} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      <AnimatePresence>
        {showSubmitConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSubmitConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="card-neumorphic max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">Submit Quiz?</h3>
              <p className="text-muted-foreground mb-6">
                Are you sure you want to submit? You have answered {Object.keys(answers).length} out of {quiz.questions.length} questions.
              </p>
              
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  className="btn-hero flex-1"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizPlayer;