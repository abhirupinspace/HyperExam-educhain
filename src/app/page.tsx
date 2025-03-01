import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle, Lock, Shield } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6 text-primary" />
            <span>HyperExam</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#rewards" className="text-sm font-medium hover:text-primary">
              Earn Rewards
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/auth">Connect with OCID</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered, Web3-Secured Online Exams
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Revolutionize online testing with advanced AI proctoring and blockchain verification. Secure,
                    transparent, and rewarding.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="gap-1">
                    <Link href="/auth">
                      Connect with OCID
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="HyperExam Platform"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advanced Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cutting-edge technology to ensure exam integrity and simplify verification
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              {/* Feature 1 */}
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Proctoring</h3>
                <p className="text-center text-muted-foreground">
                  Advanced AI monitors exams in real-time, detecting suspicious behavior and ensuring integrity.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Blockchain Verification</h3>
                <p className="text-center text-muted-foreground">
                  Immutable records of exam submissions and results, providing tamper-proof verification.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Reward System</h3>
                <p className="text-center text-muted-foreground">
                  Earn NFTs and tokens for participating in and administering secure, verified exams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple 3-step process for secure, verified online examinations
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Login</h3>
                  <p className="text-muted-foreground">
                    Connect with your OCID (Open Campus ID) for secure authentication and role-based access.
                  </p>
                </div>
                {/* Connector line */}
                <div className="absolute right-0 top-6 hidden h-0.5 w-full -translate-y-1/2 bg-muted md:block md:w-1/2"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Take Exam</h3>
                  <p className="text-muted-foreground">
                    Complete your exam under AI proctoring that ensures fairness and prevents cheating.
                  </p>
                </div>
                {/* Connector lines */}
                <div className="absolute left-0 top-6 hidden h-0.5 w-1/2 -translate-y-1/2 bg-muted md:block"></div>
                <div className="absolute right-0 top-6 hidden h-0.5 w-1/2 -translate-y-1/2 bg-muted md:block"></div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Get Verified Results</h3>
                  <p className="text-muted-foreground">
                    Receive blockchain-verified results and earn Proof-of-Exam NFTs for your achievements.
                  </p>
                </div>
                {/* Connector line */}
                <div className="absolute left-0 top-6 hidden h-0.5 w-1/2 -translate-y-1/2 bg-muted md:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Earn Rewards Section */}
        <section id="rewards" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Earn Rewards</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Incentives for all participants in the HyperExam ecosystem
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              {/* Reward 1 */}
              <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold">For Students</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Proof-of-Exam NFTs for completed exams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Verifiable credentials for your portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Rewards for maintaining exam integrity</span>
                  </li>
                </ul>
              </div>

              {/* Reward 2 */}
              <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold">For Institutions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Trust Score for conducting verified exams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Reduced administrative overhead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Enhanced reputation for secure assessments</span>
                  </li>
                </ul>
              </div>

              {/* Reward 3 */}
              <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold">For Reviewers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Tokens for validating flagged exams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Recognition in the HyperExam network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Contribute to academic integrity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Online Exams?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the future of secure, transparent, and rewarding online examinations
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary" className="gap-1">
                  <Link href="/auth?role=student">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/auth?role=institution">Host an Exam</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HyperExam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

