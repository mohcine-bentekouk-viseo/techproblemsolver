"use client";

import Accordion from "./ui/Accordion";
import { Search, CheckCircle, Shield } from "lucide-react";

interface Problem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  causes: string[];
  solutions: string[];
  prevention: string[];
}

interface PhoneProblemsAccordionProps {
  phoneProblems: Problem[];
}

export default function PhoneProblemsAccordion({
  phoneProblems,
}: PhoneProblemsAccordionProps) {
  const accordionItems = phoneProblems.map((problem) => ({
    id: problem.id,
    title: problem.title,
    icon: problem.icon,
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">{problem.description}</p>

        {/* Causes */}
        <div>
          <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              <Search className="w-3 h-3 text-blue-600" />
            </span>
            Common Causes
          </h4>
          <ul className="space-y-2">
            {problem.causes.map((cause, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{cause}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold text-green-900 mb-3 flex items-center">
            <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
              <CheckCircle className="w-3 h-3 text-green-600" />
            </span>
            Solutions
          </h4>
          <ol className="space-y-2">
            {problem.solutions.map((solution, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center mr-3 text-sm font-semibold flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="text-gray-700">{solution}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Prevention */}
        <div>
          <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
            <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
              <Shield className="w-3 h-3 text-purple-600" />
            </span>
            Prevention Tips
          </h4>
          <ul className="space-y-2">
            {problem.prevention.map((tip, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }));

  return (
    <Accordion
      items={accordionItems}
      className="space-y-4"
      allowMultiple={true}
    />
  );
}
