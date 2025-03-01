import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { Award, Calendar, Clock, FileText } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  // Mock data for upcoming exams
  const upcomingExams = [
    {
      id: "exam-1",
      title: "Advanced Mathematics",
      date: "March 5, 2025",
      time: "10:00 AM - 12:00 PM",
      status: "upcoming",
      institution: "Acme University",
    },
    {
      id: "exam-2",
      title: "Computer Science Fundamentals",
      date: "March 10, 2025",
      time: "2:00 PM - 4:00 PM",
      status: "upcoming",
      institution: "Tech Institute",
    },
  ]

  // Mock data for past exams
  const pastExams = [
    {
      id: "exam-3",
      title: "Introduction to Physics",
      date: "February 20, 2025",
      score: "85/100",
      verified: true,
      institution: "Acme University",
    },
    {
      id: "exam-4",
      title: "Data Structures",
      date: "February 15, 2025",
      score: "92/100",
      verified: true,
      institution: "Tech Institute",
    },
  ]

  return (
    <div className="flex h-screen bg-muted/30">
      <Sidebar role="student" />
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, John. Here's an overview of your exams.</p>
            </div>
            <Button asChild>
              <Link href="/student/exams/upcoming">View All Exams</Link>
            </Button>
          </div>

          {/* Upcoming Exams Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Upcoming Exams</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/student/exams/upcoming">View All</Link>
              </Button>
            </div>

            {upcomingExams.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {upcomingExams.map((exam) => (
                  <Card key={exam.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{exam.title}</CardTitle>
                      <CardDescription>{exam.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{exam.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{exam.time}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/student/exams/${exam.id}`}>
                          {new Date(exam.date) <= new Date() ? "Start Exam" : "View Details"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-6 text-center">
                  <Calendar className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">No upcoming exams scheduled.</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Past Exams Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Past Exams & Scores</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/student/exams/past">View All</Link>
              </Button>
            </div>

            {pastExams.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {pastExams.map((exam) => (
                  <Card key={exam.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{exam.title}</CardTitle>
                      <CardDescription>{exam.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{exam.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>Score: {exam.score}</span>
                        </div>
                        {exam.verified && (
                          <div className="flex items-center gap-2 text-sm text-green-600">
                            <Award className="h-4 w-4" />
                            <span>Blockchain Verified</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/student/exams/${exam.id}/results`}>View Results</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-6 text-center">
                  <FileText className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">No past exams found.</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Rewards Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Your Rewards</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/student/rewards">View All</Link>
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Proof-of-Exam NFTs</h3>
                    <p className="text-sm text-muted-foreground">
                      You've earned 2 Proof-of-Exam NFTs for your completed exams.
                    </p>
                  </div>
                  <div className="sm:ml-auto">
                    <Button variant="outline" asChild>
                      <Link href="/student/rewards">View NFTs</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

