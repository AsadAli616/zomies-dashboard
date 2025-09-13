import { motion } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Home, Trophy, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface QuizResultsProps {
  results: {
    score: number;
    correct: number;
    total: number;
    timeSpent: number;
    results: Array<{
      questionId: number;
      question: string;
      userAnswer: number;
      correctAnswer: number;
      isCorrect: boolean;
      explanation: string;
      options: string[];
    }>;
  };
  quizTitle: string;
  onRetake: () => void;
  onHome: () => void;
}

const QuizResults = ({ results, quizTitle, onRetake, onHome }: QuizResultsProps) => {
  const { score, correct, total, timeSpent } = results;
  const percentage = Math.round((correct / total) * 100);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-accent';
    return 'text-destructive';
  };

  const getScoreMessage = () => {
    if (score >= 90) return 'Outstanding! 🎉';
    if (score >= 80) return 'Great job! 👏';
    if (score >= 70) return 'Good work! 👍';
    if (score >= 60) return 'Not bad! 📚';
    return 'Keep practicing! 💪';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="mb-4">
            <Trophy className={`w-16 h-16 mx-auto ${getScoreColor()}`} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-2">Quiz Complete!</h1>
          <p className="text-muted-foreground">{quizTitle}</p>
        </motion.div>

        {/* Score Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card-neumorphic mb-8"
        >
          <div className="text-center mb-6">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
              {score}%
            </div>
            <p className="text-xl text-muted-foreground">{getScoreMessage()}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm text-muted-foreground">Score</span>
              </div>
              <div className="text-2xl font-bold text-primary">{correct}/{total}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-accent mr-2" />
                <span className="text-sm text-muted-foreground">Time</span>
              </div>
              <div className="text-2xl font-bold text-accent">{formatTime(timeSpent)}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="w-5 h-5 text-accent mr-2" />
                <span className="text-sm text-muted-foreground">Accuracy</span>
              </div>
              <div className="text-2xl font-bold text-accent">{percentage}%</div>
            </div>
          </div>

          <Progress value={percentage} className="h-3 mb-4" />
          
          <div className="flex space-x-3">
            <Button onClick={onRetake} className="btn-hero flex-1">
              <RotateCcw size={16} className="mr-2" />
              Retake Quiz
            </Button>
            <Button onClick={onHome} variant="outline" className="flex-1">
              <Home size={16} className="mr-2" />
              Back to Home
            </Button>
          </div>
        </motion.div>

        {/* Question by Question Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold mb-4">Review Answers</h2>
          
          {results.results.map((result, index) => (
            <motion.div
              key={result.questionId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="card-neumorphic"
            >
              <div className="flex items-start space-x-3 mb-4">
                {result.isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                )}
                
                <div className="flex-1">
                  <h3 className="font-medium mb-3">
                    {index + 1}. {result.question}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {result.options.map((option, optionIndex) => {
                      const isUserAnswer = result.userAnswer === optionIndex;
                      const isCorrectAnswer = result.correctAnswer === optionIndex;
                      
                      let optionClass = 'p-3 rounded-lg border ';
                      if (isCorrectAnswer) {
                        optionClass += 'border-green-600 bg-green-50 text-green-800';
                      } else if (isUserAnswer && !isCorrectAnswer) {
                        optionClass += 'border-destructive bg-destructive/10 text-destructive';
                      } else {
                        optionClass += 'border-border bg-card';
                      }
                      
                      return (
                        <div key={optionIndex} className={optionClass}>
                          <div className="flex items-center space-x-3">
                            <span className="font-medium">
                              {String.fromCharCode(65 + optionIndex)}.
                            </span>
                            <span>{option}</span>
                            {isCorrectAnswer && (
                              <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <XCircle className="w-4 h-4 text-destructive ml-auto" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {result.explanation && (
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        <strong>Explanation:</strong> {result.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default QuizResults;