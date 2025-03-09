"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle, Lock, Shield } from 'lucide-react'
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offset = 15
      document.documentElement.style.setProperty("--move-x", `${moveX / offset}px`)
      document.documentElement.style.setProperty("--move-y", `${moveY / offset}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">HyperExam</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link href="#rewards" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Earn Rewards
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="border-blue-200 hover:bg-blue-50">
              <Link href="/auth">Connect with OCID</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 md:py-22 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
              style={{ y: backgroundY }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 [mask-image:radial-gradient(ellipse_at_center,transparent_1%,white)]" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 transition-opacity duration-[3s]"
              style={{ animation: "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-8"
                style={{ y: textY }}
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium"
                  >
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Next-Generation Exam Platform
                  </motion.div>
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
                    AI-Powered, <span className="text-blue-600">Web3-Secured</span> Online Exams
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                    Revolutionize online testing with advanced AI proctoring and blockchain verification. Experience
                    secure, transparent, and rewarding examinations like never before.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Link href="/auth" className="group">
                      Connect with OCID
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-blue-200 hover:bg-blue-50 transition-all duration-300"
                  >
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex items-center gap-6 pt-4"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                        className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center shadow-md"
                      >
                        <span className="text-xs font-bold text-white">{i}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">500+</span> institutions already using HyperExam
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative lg:order-last perspective-1000"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white rounded-xl border border-blue-100 shadow-2xl overflow-hidden group hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 hover:translate-x-1">
                  <div className="absolute top-2 left-2 right-2 flex items-center h-6 gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="pt-8 pb-4 px-4">
                    <img
                      src="/hero.png"
                      alt="HyperExam Platform"
                      className="w-full aspect-[4/3] object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded animate-pulse"></div>
                      <div className="h-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded animate-pulse col-span-2"></div>
                      <div className="h-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded animate-pulse col-span-3"></div>
                      <div className="h-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded animate-pulse col-span-2"></div>
                      <div className="h-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -top-6 -right-6 h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <Shield className="h-6 w-6 text-white" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-4 -left-4 h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <Award className="h-6 w-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-grid-blue bg-[size:50px]" />
          <div className="px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advanced Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cutting-edge technology to ensure exam integrity and simplify verification
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              {[
                {
                  icon: Shield,
                  title: "AI Proctoring",
                  description:
                    "Advanced AI monitors exams in real-time, detecting suspicious behavior and ensuring integrity.",
                },
                {
                  icon: Lock,
                  title: "Blockchain Verification",
                  description:
                    "Immutable records of exam submissions and results, providing tamper-proof verification.",
                },
                {
                  icon: Award,
                  title: "Reward System",
                  description: "Earn NFTs and tokens for participating in and administering secure, verified exams.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-grid-blue bg-[size:50px]" />
          <div className="px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple 3-step process for secure, verified online examinations
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
              {[
                {
                  step: 1,
                  title: "Login",
                  description:
                    "Connect with your OCID (Open Campus ID) for secure authentication and role-based access.",
                },
                {
                  step: 2,
                  title: "Take Exam",
                  description: "Complete your exam under AI proctoring that ensures fairness and prevents cheating.",
                },
                {
                  step: 3,
                  title: "Get Verified Results",
                  description: "Receive blockchain-verified results and earn Proof-of-Exam NFTs for your achievements.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center space-y-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <motion.div
                      className="absolute top-6 left-full hidden h-0.5 w-full -translate-y-1/2 bg-blue-600 md:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Earn Rewards Section */}
        <section id="rewards" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-grid-blue bg-[size:50px]" />
          <div className="px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Earn Rewards</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Incentives for all participants in the HyperExam ecosystem
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              {[
                {
                  title: "For Students",
                  items: [
                    "Proof-of-Exam NFTs for completed exams",
                    "Verifiable credentials for your portfolio",
                    "Rewards for maintaining exam integrity",
                  ],
                },
                {
                  title: "For Institutions",
                  items: [
                    "Trust Score for conducting verified exams",
                    "Reduced administrative overhead",
                    "Enhanced reputation for secure assessments",
                  ],
                },
                {
                  title: "For Reviewers",
                  items: [
                    "Tokens for validating flagged exams",
                    "Recognition in the HyperExam network",
                    "Contribute to academic integrity",
                  ],
                },
              ].map((reward, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white"
                >
                  <h3 className="text-xl font-bold">{reward.title}</h3>
                  <ul className="space-y-2">
                    {reward.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + itemIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-grid-blue bg-[size:50px] opacity-20" />
          <div className="px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Online Exams?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the future of secure, transparent, and rewarding online examinations
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary" className="group bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/auth?role=student">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/auth?role=institution">Host an Exam</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-100 py-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} HyperExam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
