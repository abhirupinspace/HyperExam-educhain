import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { AlertTriangle, ArrowLeft, Calendar, Clock, FileText, Shield } from "lucide-react"
import Link from "next/link"

export default function ExamDetailsPage({ params }: { params: { id: string } }) {
  // Mock exam data
  const exam = {
    id: params.id,
    title: "Advanced Mathematics",
    description: "Final examination covering calculus, linear algebra, and probability theory.",
    date: "March 5, 2025",
    time: "10:00 AM - 12:00 PM",
    duration: "2 hours",
    questions: 50,
    institution: "Acme University",
    instructor: "Dr. Jane Smith",
    proctoring: "AI-powered with webcam and microphone monitoring",
    requirements: [
      "Webcam and microphone access required",
      "Stable internet connection",
      "Photo ID for verification",
      "Quiet environment with good lighting",
    ],
  }

  return (
    <div className="flex h-screen bg-muted/30">
      <Sidebar role="student" />
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/student/dashboard">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">{exam.title}</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Exam Details */}
            <Card>
              <CardHeader>
                <CardTitle>Exam Details</CardTitle>
                <CardDescription>{exam.institution}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{exam.description}</p>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{exam.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{exam.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Duration: {exam.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{exam.questions} Questions</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Instructor</h3>
                  <p className="text-sm">{exam.instructor}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Proctoring</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>{exam.proctoring}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Requirements & Start Exam */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
                <CardDescription>Please ensure you meet all requirements before starting the exam</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exam.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-col gap-4">
                <div className="flex items-center gap-2 w-full p-3 bg-muted rounded-md text-sm">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Blockchain Verification</p>
                    <p className="text-muted-foreground">
                      Your exam answers will be securely hashed and stored on the blockchain for verification.
                    </p>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  <Link href={`/student/exams/${exam.id}/take`}>Start Exam</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Blockchain Verification Info */}
          <Card>
            <CardHeader>
              <CardTitle>About Blockchain Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  HyperExam uses blockchain technology to ensure the integrity and transparency of your exam experience:
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex flex-col gap-2 p-4 border rounded-lg">
                    <h3 className="font-medium">Tamper-Proof Submissions</h3>
                    <p className="text-sm text-muted-foreground">
                      Every answer you submit is cryptographically hashed and recorded on the blockchain, making it
                      impossible to alter after submission.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 border rounded-lg">
                    <h3 className="font-medium">Proof-of-Exam NFTs</h3>
                    <p className="text-sm text-muted-foreground">
                      Upon completion, you'll receive a unique NFT that serves as verifiable proof of your exam
                      participation and results.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 border rounded-lg">
                    <h3 className="font-medium">Credential Verification</h3>
                    <p className="text-sm text-muted-foreground">
                      Your exam results can be independently verified by third parties without compromising your
                      privacy.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

