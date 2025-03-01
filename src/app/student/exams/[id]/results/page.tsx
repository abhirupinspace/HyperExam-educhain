import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { Award, Check, Download, ExternalLink, Shield, X } from "lucide-react"
import Link from "next/link"

export default function ExamResultsPage({ params }: { params: { id: string } }) {
  // Mock exam result data
  const examResult = {
    id: params.id,
    title: "Advanced Mathematics",
    date: "March 1, 2025",
    score: 85,
    totalQuestions: 5,
    correctAnswers: 4,
    incorrectAnswers: 1,
    duration: "1 hour 45 minutes",
    verificationHash: "0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
    blockchainVerified: true,
    nftMinted: true,
    nftId: "EXAM-NFT-12345",
    questions: [
      {
        id: 1,
        text: "What is the derivative of f(x) = x² with respect to x?",
        userAnswer: "b",
        correctAnswer: "b",
        isCorrect: true,
      },
      {
        id: 2,
        text: "Solve the equation: 2x + 5 = 15",
        userAnswer: "a",
        correctAnswer: "a",
        isCorrect: true,
      },
      {
        id: 3,
        text: "What is the integral of f(x) = 2x with respect to x?",
        userAnswer: "a",
        correctAnswer: "a",
        isCorrect: true,
      },
      {
        id: 4,
        text: "If a triangle has sides of length 3, 4, and 5, what is its area?",
        userAnswer: "d",
        correctAnswer: "a",
        isCorrect: false,
      },
      {
        id: 5,
        text: "What is the value of sin(π/2)?",
        userAnswer: "b",
        correctAnswer: "b",
        isCorrect: true,
      },
    ],
  }

  return (
    <div className="flex h-screen bg-muted/30">
      <Sidebar role="student" />
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Exam Results</h1>
            <Button variant="outline" asChild>
              <Link href="/student/dashboard">Back to Dashboard</Link>
            </Button>
          </div>

          {/* Results Summary */}
          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardTitle>{examResult.title}</CardTitle>
              <CardDescription>Completed on {examResult.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <div className="text-5xl font-bold text-primary mb-2">{examResult.score}%</div>
                  <p className="text-sm text-muted-foreground">Your Score</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {examResult.correctAnswers}
                    </div>
                    <p className="text-xs text-muted-foreground text-center">Correct Answers</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">
                      {examResult.incorrectAnswers}
                    </div>
                    <p className="text-xs text-muted-foreground text-center">Incorrect Answers</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold mb-1">{examResult.totalQuestions}</div>
                    <p className="text-xs text-muted-foreground text-center">Total Questions</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold mb-1">{examResult.duration}</div>
                    <p className="text-xs text-muted-foreground text-center">Time Taken</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <div className="flex items-center gap-2 w-full p-3 bg-primary/10 rounded-md text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Blockchain Verified</p>
                  <p className="text-muted-foreground text-xs">
                    Hash: {examResult.verificationHash.substring(0, 16)}...
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto" asChild>
                  <Link href="#" target="_blank">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View on Blockchain</span>
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* NFT Certificate */}
          <Card>
            <CardHeader>
              <CardTitle>Proof-of-Exam NFT</CardTitle>
              <CardDescription>Your blockchain-verified credential</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 aspect-square bg-primary/5 rounded-lg border flex items-center justify-center">
                  <div className="text-center p-4">
                    <Award className="h-16 w-16 text-primary mx-auto mb-2" />
                    <h3 className="font-bold">Advanced Mathematics</h3>
                    <p className="text-sm text-muted-foreground">Proof-of-Exam NFT</p>
                    <p className="text-xs mt-2">ID: {examResult.nftId}</p>
                  </div>
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Certificate Details</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex flex-col p-2 bg-muted rounded-md">
                        <span className="text-muted-foreground text-xs">Student</span>
                        <span>John Doe</span>
                      </div>
                      <div className="flex flex-col p-2 bg-muted rounded-md">
                        <span className="text-muted-foreground text-xs">Institution</span>
                        <span>Acme University</span>
                      </div>
                      <div className="flex flex-col p-2 bg-muted rounded-md">
                        <span className="text-muted-foreground text-xs">Date</span>
                        <span>{examResult.date}</span>
                      </div>
                      <div className="flex flex-col p-2 bg-muted rounded-md">
                        <span className="text-muted-foreground text-xs">Score</span>
                        <span>{examResult.score}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link href="#" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on Blockchain
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download Certificate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Results */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Detailed Results</h2>

            <div className="space-y-4">
              {examResult.questions.map((question, index) => (
                <Card key={index} className={question.isCorrect ? "border-green-200" : "border-red-200"}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base">Question {index + 1}</CardTitle>
                      {question.isCorrect ? (
                        <div className="flex items-center gap-1 text-green-600">
                          <Check className="h-4 w-4" />
                          <span className="text-sm">Correct</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-red-600">
                          <X className="h-4 w-4" />
                          <span className="text-sm">Incorrect</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{question.text}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="font-medium text-sm">Your Answer:</div>
                        <div className={`text-sm ${question.isCorrect ? "text-green-600" : "text-red-600"}`}>
                          Option {question.userAnswer.toUpperCase()}
                        </div>
                      </div>

                      {!question.isCorrect && (
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-sm">Correct Answer:</div>
                          <div className="text-sm text-green-600">Option {question.correctAnswer.toUpperCase()}</div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

