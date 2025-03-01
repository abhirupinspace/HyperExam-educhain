"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AlertTriangle, ArrowLeft, ArrowRight, Clock, Eye, Shield, Video } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function TakeExamPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [timeRemaining, setTimeRemaining] = useState(7200) // 2 hours in seconds
  const [aiAlerts, setAiAlerts] = useState<string[]>([])
  const [showAiAlert, setShowAiAlert] = useState(false)

  // Mock exam data
  const exam = {
    id: params.id,
    title: "Advanced Mathematics",
    questions: [
      {
        id: 1,
        text: "What is the derivative of f(x) = x² with respect to x?",
        options: [
          { id: "a", text: "f'(x) = x" },
          { id: "b", text: "f'(x) = 2x" },
          { id: "c", text: "f'(x) = 2" },
          { id: "d", text: "f'(x) = 0" },
        ],
      },
      {
        id: 2,
        text: "Solve the equation: 2x + 5 = 15",
        options: [
          { id: "a", text: "x = 5" },
          { id: "b", text: "x = 10" },
          { id: "c", text: "x = 7.5" },
          { id: "d", text: "x = 5/2" },
        ],
      },
      {
        id: 3,
        text: "What is the integral of f(x) = 2x with respect to x?",
        options: [
          { id: "a", text: "F(x) = x² + C" },
          { id: "b", text: "F(x) = 2x² + C" },
          { id: "c", text: "F(x) = x² - C" },
          { id: "d", text: "F(x) = x² / 2 + C" },
        ],
      },
      {
        id: 4,
        text: "If a triangle has sides of length 3, 4, and 5, what is its area?",
        options: [
          { id: "a", text: "6 square units" },
          { id: "b", text: "10 square units" },
          { id: "c", text: "7.5 square units" },
          { id: "d", text: "12 square units" },
        ],
      },
      {
        id: 5,
        text: "What is the value of sin(π/2)?",
        options: [
          { id: "a", text: "0" },
          { id: "b", text: "1" },
          { id: "c", text: "-1" },
          { id: "d", text: "1/2" },
        ],
      },
    ],
    totalQuestions: 5,
  }

  // Format time remaining
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmitExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Simulate AI proctoring alerts
  useEffect(() => {
    // Simulate an AI alert after 10 seconds
    const alertTimer = setTimeout(() => {
      const newAlert = "Please ensure your face is clearly visible in the camera frame"
      setAiAlerts((prev) => [...prev, newAlert])
      setShowAiAlert(true)

      // Hide the alert after 5 seconds
      setTimeout(() => {
        setShowAiAlert(false)
      }, 5000)
    }, 10000)

    return () => clearTimeout(alertTimer)
  }, [])

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: value,
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitExam = () => {
    // In a real app, this would submit the exam to the blockchain
    router.push(`/student/exams/${exam.id}/results`)
  }

  const currentQuestionData = exam.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / exam.totalQuestions) * 100

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      {/* Header with timer and AI proctoring status */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Shield className="h-5 w-5 text-primary" />
            <span>{exam.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Video className={`h-4 w-4 ${aiAlerts.length > 0 ? "text-amber-500" : "text-green-500"}`} />
              <span className="text-sm">AI Proctoring Active</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-md">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="font-mono">{formatTime(timeRemaining)}</span>
            </div>
          </div>
        </div>
      </header>

      {/* AI Alert */}
      {showAiAlert && (
        <div className="fixed top-16 right-4 z-50 max-w-md">
          <Card className="border-amber-500 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800 dark:text-amber-300">AI Proctor Alert</p>
                  <p className="text-sm text-amber-700 dark:text-amber-400">{aiAlerts[aiAlerts.length - 1]}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <main className="flex-1 container py-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                Question {currentQuestion + 1} of {exam.totalQuestions}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Question {currentQuestion + 1}</CardTitle>
              <CardDescription>Select the best answer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-lg">{currentQuestionData.text}</p>

                <RadioGroup value={selectedAnswers[currentQuestion] || ""} onValueChange={handleAnswerSelect}>
                  {currentQuestionData.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
                      <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                      <label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer py-2">
                        {option.text}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentQuestion < exam.questions.length - 1 ? (
                <Button onClick={handleNextQuestion} disabled={!selectedAnswers[currentQuestion]}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmitExam} disabled={!selectedAnswers[currentQuestion]}>
                  Submit Exam
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* AI Proctoring Info */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">AI Proctoring Active</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p>Your exam is being monitored by our AI proctoring system. Please ensure:</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Your face is clearly visible in the camera</li>
                    <li>You remain in the exam window at all times</li>
                    <li>No other people are present in your environment</li>
                    <li>You don't use unauthorized materials</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Webcam preview (simulated) */}
      <div className="fixed bottom-4 right-4 w-48 h-36 bg-black rounded-md overflow-hidden border-2 border-primary shadow-lg">
        <div className="w-full h-full flex items-center justify-center text-white text-xs">
          <Video className="h-6 w-6 text-white/50 mr-2" />
          <span>Webcam Preview</span>
        </div>
      </div>
    </div>
  )
}

