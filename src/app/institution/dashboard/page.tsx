import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { Award, BarChart, Calendar, Clock, FileText, Plus, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function InstitutionDashboard() {
  // Mock data for active exams
  const activeExams = [
    {
      id: "exam-1",
      title: "Advanced Mathematics",
      date: "March 1, 2025",
      time: "10:00 AM - 12:00 PM",
      participants: 45,
      activeParticipants: 42,
      alerts: 2,
    },
    {
      id: "exam-2",
      title: "Computer Science Fundamentals",
      date: "March 1, 2025",
      time: "2:00 PM - 4:00 PM",
      participants: 30,
      activeParticipants: 28,
      alerts: 0,
    },
  ]

  // Mock data for upcoming exams
  const upcomingExams = [
    {
      id: "exam-3",
      title: "Introduction to Physics",
      date: "March 5, 2025",
      time: "10:00 AM - 12:00 PM",
      participants: 50,
      status: "scheduled",
    },
    {
      id: "exam-4",
      title: "Data Structures",
      date: "March 10, 2025",
      time: "2:00 PM - 4:00 PM",
      participants: 35,
      status: "scheduled",
    },
  ]

  return (
    <div className="flex h-screen bg-muted/30">
      <Sidebar role="institution" />
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Institution Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, Acme University. Manage your exams and monitor student progress.
              </p>
            </div>
            <Button asChild>
              <Link href="/institution/exams/create">
                <Plus className="mr-2 h-4 w-4" />
                Create New Exam
              </Link>
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">512</div>
                <p className="text-xs text-muted-foreground">+48 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Trust Score</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.5%</div>
                <p className="text-xs text-muted-foreground">+1.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Active Exams Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Active Exams</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/institution/exams/monitor">Monitor All</Link>
              </Button>
            </div>

            {activeExams.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {activeExams.map((exam) => (
                  <Card key={exam.id} className={exam.alerts > 0 ? "border-amber-500" : ""}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle>{exam.title}</CardTitle>
                        {exam.alerts > 0 && (
                          <div className="flex items-center gap-1 text-amber-500 font-medium">
                            <Shield className="h-4 w-4" />
                            <span>{exam.alerts} Alerts</span>
                          </div>
                        )}
                      </div>
                      <CardDescription>
                        {exam.activeParticipants}/{exam.participants} students active
                      </CardDescription>
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
                        <Link href={`/institution/exams/${exam.id}/monitor`}>Monitor Exam</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-6 text-center">
                  <Shield className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">No active exams at the moment.</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Upcoming Exams Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Upcoming Exams</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/institution/exams">View All</Link>
              </Button>
            </div>

            {upcomingExams.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {upcomingExams.map((exam) => (
                  <Card key={exam.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{exam.title}</CardTitle>
                      <CardDescription>{exam.participants} students enrolled</CardDescription>
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
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href={`/institution/exams/${exam.id}/edit`}>Edit</Link>
                      </Button>
                      <Button className="flex-1" asChild>
                        <Link href={`/institution/exams/${exam.id}`}>View Details</Link>
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

          {/* Analytics Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Analytics Overview</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/institution/analytics">View Detailed Analytics</Link>
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <BarChart className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Exam Performance</h3>
                    <p className="text-sm text-muted-foreground">
                      Average score across all exams is 82%. Blockchain verification rate: 100%.
                    </p>
                  </div>
                  <div className="sm:ml-auto">
                    <Button variant="outline" asChild>
                      <Link href="/institution/analytics">View Analytics</Link>
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

