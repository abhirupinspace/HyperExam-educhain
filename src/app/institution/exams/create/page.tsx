"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  date: z.string().min(1, { message: "Date is required" }),
  startTime: z.string().min(1, { message: "Start time is required" }),
  duration: z.string().min(1, { message: "Duration is required" }),
  proctoringSeverity: z.number().min(1).max(5),
  webcamRequired: z.boolean(),
  microphoneRequired: z.boolean(),
  screenSharingRequired: z.boolean(),
  idVerificationRequired: z.boolean(),
  blockchainVerification: z.enum(["standard", "enhanced"]),
  questionType: z.enum(["multiple-choice", "essay", "mixed"]),
  passingScore: z.string(),
})

export default function CreateExamPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<{ question: string; options: string[] }[]>([
    { question: "", options: ["", "", "", ""] }
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      startTime: "",
      duration: "60",
      proctoringSeverity: 3,
      webcamRequired: true,
      microphoneRequired: true,
      screenSharingRequired: false,
      idVerificationRequired: true,
      blockchainVerification: "standard",
      questionType: "multiple-choice",
      passingScore: "70",
    },
  });

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""] }]);
  };


}