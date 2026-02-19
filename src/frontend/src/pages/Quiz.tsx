import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Trophy, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  topic: string;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'What percentage of sunlight do modern solar panels typically convert into electricity?',
    options: ['5-10%', '15-22%', '40-50%', '70-80%'],
    correctAnswer: 1,
    topic: 'Solar Cells',
    explanation: 'Modern solar panels typically convert 15-22% of sunlight into electricity, with some high-efficiency models reaching up to 25%.',
  },
  {
    id: 2,
    question: 'Which country generates over 50% of its electricity from wind power?',
    options: ['United States', 'China', 'Denmark', 'Germany'],
    correctAnswer: 2,
    topic: 'Wind Power',
    explanation: 'Denmark generates over 50% of its electricity from wind power, the highest percentage in the world.',
  },
  {
    id: 3,
    question: 'What is the world\'s largest hydropower station?',
    options: ['Hoover Dam', 'Three Gorges Dam', 'Itaipu Dam', 'Grand Coulee Dam'],
    correctAnswer: 1,
    topic: 'Hydropower',
    explanation: 'The Three Gorges Dam in China is the world\'s largest hydropower station with a capacity of 22,500 MW.',
  },
  {
    id: 4,
    question: 'Which country uses geothermal energy to heat 90% of its homes?',
    options: ['New Zealand', 'Iceland', 'Japan', 'Philippines'],
    correctAnswer: 1,
    topic: 'Geothermal',
    explanation: 'Iceland heats 90% of its homes with geothermal energy due to its unique geological location on the Mid-Atlantic Ridge.',
  },
  {
    id: 5,
    question: 'What makes biomass energy considered carbon-neutral?',
    options: [
      'It produces no emissions',
      'Plants absorb CO₂ during growth that equals emissions when burned',
      'It uses only waste materials',
      'It requires no processing',
    ],
    correctAnswer: 1,
    topic: 'Biomass',
    explanation: 'Biomass is carbon-neutral because plants absorb CO₂ during growth, which equals the CO₂ released when the biomass is burned, creating a closed carbon cycle.',
  },
  {
    id: 6,
    question: 'Which country is the world\'s second-largest ethanol producer and pioneer in biofuel use?',
    options: ['United States', 'Brazil', 'China', 'India'],
    correctAnswer: 1,
    topic: 'Biofuels',
    explanation: 'Brazil is the world\'s second-largest ethanol producer and has been a pioneer in biofuel use since the 1970s, with over 90% of new cars being flex-fuel vehicles.',
  },
  {
    id: 7,
    question: 'What is the primary advantage of solar thermal systems over photovoltaic systems?',
    options: [
      'They generate electricity',
      'They are more efficient for heating applications',
      'They work at night',
      'They are cheaper to install',
    ],
    correctAnswer: 1,
    topic: 'Solar Heating',
    explanation: 'Solar thermal systems are more efficient for heating applications because they directly convert sunlight into heat rather than first converting it to electricity.',
  },
  {
    id: 8,
    question: 'Who explained the photoelectric effect that made modern solar cells possible?',
    options: ['Thomas Edison', 'Nikola Tesla', 'Albert Einstein', 'Benjamin Franklin'],
    correctAnswer: 2,
    topic: 'Solar Cells',
    explanation: 'Albert Einstein explained the photoelectric effect in 1905, earning him the Nobel Prize and laying the foundation for modern solar cell technology.',
  },
  {
    id: 9,
    question: 'What is the typical capacity factor of offshore wind farms?',
    options: ['10-20%', '25-35%', '40-50%', '60-70%'],
    correctAnswer: 2,
    topic: 'Wind Power',
    explanation: 'Offshore wind farms typically have capacity factors of 40-50%, higher than onshore wind farms (25-35%) due to stronger and more consistent winds.',
  },
  {
    id: 10,
    question: 'What percentage of global electricity does hydropower provide?',
    options: ['5%', '10%', '16%', '25%'],
    correctAnswer: 2,
    topic: 'Hydropower',
    explanation: 'Hydropower provides about 16% of global electricity production, making it the largest source of renewable electricity worldwide.',
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...userAnswers];
      newAnswers[currentQuestion] = selectedAnswer;
      setUserAnswers(newAnswers);
      setShowExplanation(true);
    }
  };

  const handleContinue = () => {
    setShowExplanation(false);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1]);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUserAnswers(Array(quizQuestions.length).fill(null));
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = (): number => {
    return userAnswers.reduce((score: number, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const score = calculateScore();
  const percentage = Math.round((score / quizQuestions.length) * 100);

  if (showResults) {
    return (
      <div className="container py-12 space-y-8">
        <section className="text-center space-y-4">
          <Trophy className="h-16 w-16 text-eco-green mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold">Quiz Complete!</h1>
        </section>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Your Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-eco-green">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-xl text-muted-foreground">
                You scored {percentage}%
              </p>
              <Progress value={percentage} className="h-3" />
            </div>

            <div className="text-center space-y-2">
              {percentage >= 90 && (
                <p className="text-lg font-semibold text-eco-green">
                  Excellent! You're a renewable energy expert! 🌟
                </p>
              )}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg font-semibold text-eco-blue">
                  Great job! You have a solid understanding of renewable energy! 👏
                </p>
              )}
              {percentage >= 50 && percentage < 70 && (
                <p className="text-lg font-semibold text-earth-brown">
                  Good effort! Keep learning about renewable energy! 📚
                </p>
              )}
              {percentage < 50 && (
                <p className="text-lg font-semibold text-muted-foreground">
                  Keep studying! Review the content and try again! 💪
                </p>
              )}
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-semibold text-lg">Review Your Answers:</h3>
              {quizQuestions.map((question, index) => {
                const isCorrect = userAnswers[index] === question.correctAnswer;
                return (
                  <div key={question.id} className="p-4 bg-muted/50 rounded-lg space-y-2">
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-eco-green flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium">{question.question}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Your answer: {question.options[userAnswers[index] ?? 0]}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-eco-green mt-1">
                            Correct answer: {question.options[question.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button onClick={handleRestart} size="lg" className="w-full">
              <RotateCcw className="h-4 w-4 mr-2" />
              Take Quiz Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="container py-12 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Renewable Energy Quiz</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Test your knowledge about renewable energy sources!
        </p>
      </section>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-eco-green">{question.topic}</span>
            </div>
            <CardTitle className="text-xl">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              disabled={showExplanation}
            >
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors ${
                      showExplanation
                        ? index === question.correctAnswer
                          ? 'border-eco-green bg-eco-green/10'
                          : selectedAnswer === index
                          ? 'border-destructive bg-destructive/10'
                          : 'border-border'
                        : selectedAnswer === index
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer font-medium"
                    >
                      {option}
                    </Label>
                    {showExplanation && index === question.correctAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-eco-green" />
                    )}
                    {showExplanation && selectedAnswer === index && index !== question.correctAnswer && (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                ))}
              </div>
            </RadioGroup>

            {showExplanation && (
              <div className="p-4 bg-eco-green/10 border-2 border-eco-green rounded-lg">
                <p className="font-semibold text-eco-green mb-2">Explanation:</p>
                <p className="text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            <div className="flex gap-3">
              {!showExplanation ? (
                <Button
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  size="lg"
                  className="flex-1"
                >
                  Check Answer
                </Button>
              ) : (
                <Button onClick={handleContinue} size="lg" className="flex-1">
                  {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
