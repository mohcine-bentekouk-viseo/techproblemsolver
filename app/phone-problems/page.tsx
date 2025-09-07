import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PhoneProblemsAccordion from "@/components/PhoneProblemsAccordion";
import { Zap, Thermometer, Smartphone, Monitor, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Phone Problems Solutions - Fix Common Mobile Issues",
  description:
    "Solve common phone problems including charging issues, battery drain, overheating, app crashes, and more. Step-by-step guides for Android and iPhone.",
  keywords:
    "phone problems, mobile issues, phone charging, battery drain, phone overheating, app crashes, phone troubleshooting",
};

interface Problem {
  id: string;
  title: string;
  description: string;
  causes: string[];
  solutions: string[];
  prevention: string[];
  icon: React.ReactNode;
  severity: "low" | "medium" | "high";
}

const phoneProblems: Problem[] = [
  {
    id: "phone-wont-charge",
    title: "Phone Won't Charge",
    description:
      "Your phone doesn't charge when plugged in or charges very slowly.",
    icon: "🔋",
    severity: "high",
    causes: [
      "Faulty charging cable or adapter",
      "Debris in charging port",
      "Software glitches",
      "Battery degradation",
    ],
    solutions: [
      "Try a different charging cable and wall adapter",
      "Clean the charging port gently with a toothpick or compressed air",
      "Restart your phone by holding power button for 10 seconds",
      "Try wireless charging if available",
      "Check for software updates in Settings",
    ],
    prevention: [
      "Use original or certified charging cables",
      "Keep charging port clean and dry",
      "Avoid overcharging overnight regularly",
    ],
  },
  {
    id: "battery-drains-fast",
    title: "Phone Battery Drains Fast",
    description: "Your phone battery doesn't last as long as it used to.",
    icon: <Zap className="w-6 h-6" />,
    severity: "medium",
    causes: [
      "Background app refresh enabled",
      "High screen brightness",
      "Location services running",
      "Old battery degradation",
    ],
    solutions: [
      "Check battery usage in Settings to identify heavy apps",
      "Turn off background app refresh for unused apps",
      "Reduce screen brightness or enable auto-brightness",
      "Disable location services for apps that don't need it",
      "Enable low power mode when battery is low",
    ],
    prevention: [
      "Charge battery between 20-80% regularly",
      "Update apps and iOS/Android regularly",
      "Use dark mode if available",
    ],
  },
  {
    id: "phone-overheating",
    title: "Phone Overheating",
    description: "Your phone gets uncomfortably hot during use or charging.",
    icon: <Thermometer className="w-6 h-6" />,
    severity: "medium",
    causes: [
      "Heavy app usage or gaming",
      "Charging while using phone",
      "Direct sunlight exposure",
      "Background processes running",
    ],
    solutions: [
      "Close unnecessary apps running in background",
      "Remove phone case while charging",
      "Move to cooler location away from direct sunlight",
      "Reduce screen brightness temporarily",
      "Restart phone to clear memory",
    ],
    prevention: [
      "Avoid using phone while charging",
      "Keep phone out of direct sunlight",
      "Close apps you're not using",
    ],
  },
  {
    id: "screen-not-responding",
    title: "Phone Screen Not Responding",
    description: "Touch screen doesn't respond to taps or gestures.",
    icon: <Smartphone className="w-6 h-6" />,
    severity: "high",
    causes: [
      "Screen protector interference",
      "Dirty or wet screen",
      "Software freezing",
      "Hardware damage",
    ],
    solutions: [
      "Clean screen thoroughly with microfiber cloth",
      "Remove and reapply screen protector properly",
      "Force restart phone (power + volume down for 10 seconds)",
      "Remove gloves or use conductive stylus",
      "Try touching with different finger",
    ],
    prevention: [
      "Use quality screen protectors",
      "Keep screen clean and dry",
      "Avoid extreme temperatures",
    ],
  },
  {
    id: "apps-keep-crashing",
    title: "Phone Apps Keep Crashing",
    description: "Apps close unexpectedly or won't open properly.",
    icon: "💥",
    severity: "medium",
    causes: [
      "Insufficient RAM memory",
      "Outdated app versions",
      "Corrupted app data",
      "Software conflicts",
    ],
    solutions: [
      "Close other apps to free up memory",
      "Update the crashing app from app store",
      "Clear app data and cache in Settings",
      "Restart phone to clear memory",
      "Reinstall the problematic app",
    ],
    prevention: [
      "Keep apps updated",
      "Restart phone weekly",
      "Don't run too many apps simultaneously",
    ],
  },
];

const getSeverityColor = (severity: "low" | "medium" | "high") => {
  switch (severity) {
    case "low":
      return "bg-green-100 text-green-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "high":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function PhoneProblemsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-8 pb-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-6">
              <Smartphone className="w-6 h-6 inline mr-2" />
              Phone Troubleshooting
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Phone Problems &{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto mb-8">
            Fix the most common phone issues with our comprehensive
            troubleshooting guides. Works for both{" "}
            <strong>Android and iPhone</strong> devices.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">5</div>
              <div className="text-sm text-gray-600">Common Issues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600">3min</div>
              <div className="text-sm text-gray-600">Avg Fix Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Accordion */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Click on any problem below to see the solution
            </h2>
            <p className="text-gray-600">
              Each solution includes causes, step-by-step fixes, and prevention
              tips
            </p>
          </div>

          <PhoneProblemsAccordion phoneProblems={phoneProblems} />
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="p-8 text-center border-0 shadow-soft-lg bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need help with other devices?
            </h3>
            <p className="text-gray-600 mb-8">
              Check out our other troubleshooting guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/computer-problems" size="lg">
                <Monitor className="w-4 h-4 inline mr-2" />
                Computer Problems
              </Button>
              <Button href="/internet-problems" variant="outline" size="lg">
                <Globe className="w-4 h-4 inline mr-2" />
                Internet Problems
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
