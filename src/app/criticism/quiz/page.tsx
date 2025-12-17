"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle } from "lucide-react";

const quizQuestions = [
  {
    question: "According to Pope, 'A little learning is a...'",
    options: ["...joy forever.", "...thing to be treasured.", "...dangerous thing.", "...sign of wit."],
    correctAnswer: "...dangerous thing.",
  },
  {
    question: "Complete the famous couplet: 'To err is human, to forgive...'",
    options: ["...is rare.", "...divine.", "...a virtue.", "...is kind."],
    correctAnswer: "...divine.",
  },
  {
    question: "What principle does Pope assert that both poets and critics should follow above all?",
    options: ["Popular Opinion", "Royal Decree", "Their own Imagination", "Nature"],
    correctAnswer: "Nature",
  },
  {
    question: "Pope defines 'True Wit' as:",
    options: [
      "Nature to advantage dressed.",
      "A sharp and pointed jest.",
      "The soul of poetry.",
      "Whatever is new and surprising.",
    ],
    correctAnswer: "Nature to advantage dressed.",
  },
  {
    question: "What does Pope identify as the most significant cause of poor judgment in critics?",
    options: ["Envy", "Ignorance", "Pride", "Haste"],
    correctAnswer: "Pride",
  },
];

export default function CriticismQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return "hover:bg-muted";
    }
    const isCorrect = option === quizQuestions[currentQuestion].correctAnswer;
    const isSelected = option === selectedAnswer;

    if (isCorrect) {
      return "border-green-400 bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-100 dark:border-green-700";
    }
    if (isSelected && !isCorrect) {
      return "border-red-400 bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100 dark:border-red-700";
    }
    return "text-muted-foreground";
  };

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Quiz: An Essay on Criticism
        </h1>
        <Card className="mt-8">
          {showResult ? (
            <>
              <CardHeader className="items-center">
                <CardTitle className="text-2xl font-semibold">Quiz Complete!</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-4">
                <p className="text-5xl font-bold">{Math.round((score / quizQuestions.length) * 100)}%</p>
                <p className="text-lg text-muted-foreground">
                  You scored {score} out of {quizQuestions.length}
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button onClick={handleRestartQuiz}>Restart Quiz</Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader>
                <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                  <span>
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <span>Score: {score}</span>
                </div>
                <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="w-full" />
                <CardTitle className="mt-4 text-xl font-semibold">{quizQuestions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerClick(option)}
                    disabled={isAnswered}
                    className={`flex w-full items-center justify-between rounded-md border p-4 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-100 ${getButtonClass(
                      option
                    )}`}
                  >
                    <span>{option}</span>
                    {isAnswered && option === quizQuestions[currentQuestion].correctAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    )}
                    {isAnswered && selectedAnswer === option && option !== quizQuestions[currentQuestion].correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    )}
                  </button>
                ))}
              </CardContent>
              <CardFooter>
                {isAnswered && (
                  <Button onClick={handleNextQuestion} className="w-full">
                    {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                  </Button>
                )}
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </main>
  );
}
