// page.tsx
"use client";
import React from "react";
import QuestionComponent from "@/components/QuestionComponent";

const questionData = {
  question: "Question 1",
  description: "Select an option",
  options: ["Option A", "Option B", "Option C", "Option D"],
  next_link: "/questions/2",
};

function Page() {
  return <QuestionComponent questionData={questionData} />;
}

export default Page;
