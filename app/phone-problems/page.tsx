import type { Metadata } from "next";
import Link from "next/link";

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
}

const phoneProblems: Problem[] = [
  {
    id: "phone-wont-charge",
    title: "Phone Won't Charge",
    description:
      "Your phone doesn't charge when plugged in or charges very slowly.",
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
    id: "phone-overheating",
    title: "Phone Overheating",
    description: "Your phone gets uncomfortably hot during use or charging.",
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
    id: "battery-drains-fast",
    title: "Phone Battery Drains Fast",
    description: "Your phone battery doesn't last as long as it used to.",
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
    id: "phone-keeps-restarting",
    title: "Phone Keeps Restarting",
    description: "Your phone randomly restarts or reboots without warning.",
    causes: [
      "Software bugs or corrupted files",
      "Insufficient storage space",
      "Faulty apps causing crashes",
      "Hardware issues",
    ],
    solutions: [
      "Force restart by holding power + volume down for 10 seconds",
      "Boot in safe mode to identify problematic apps",
      "Free up storage space by deleting unused files",
      "Update to latest software version",
      "Factory reset as last resort (backup data first)",
    ],
    prevention: [
      "Keep at least 10% storage space free",
      "Install apps only from official stores",
      "Restart phone weekly to clear memory",
    ],
  },
  {
    id: "cant-hear-calls",
    title: "Can't Hear Phone Calls",
    description: "You can't hear the other person during phone calls.",
    causes: [
      "Speaker or earpiece blocked",
      "Volume turned down",
      "Bluetooth connected to other device",
      "Software audio settings",
    ],
    solutions: [
      "Check and increase call volume using volume buttons during call",
      "Clean earpiece speaker gently with soft brush",
      "Disconnect from Bluetooth devices in Settings",
      "Try using speakerphone to test audio",
      "Restart phone to reset audio settings",
    ],
    prevention: [
      "Keep earpiece area clean",
      "Check Bluetooth connections regularly",
      "Test audio settings monthly",
    ],
  },
  {
    id: "screen-not-responding",
    title: "Phone Screen Not Responding",
    description: "Touch screen doesn't respond to taps or gestures.",
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
    id: "storage-full",
    title: "Phone Storage Full",
    description: "Your phone shows storage full warning and runs slowly.",
    causes: [
      "Too many photos and videos",
      "Large apps and games",
      "Cached data buildup",
      "Downloaded files accumulation",
    ],
    solutions: [
      "Delete unnecessary photos and videos",
      "Move photos to cloud storage (Google Photos, iCloud)",
      "Uninstall apps you don't use",
      "Clear cache data in Settings > Storage",
      "Delete downloaded files in Downloads folder",
    ],
    prevention: [
      "Regularly backup and delete old photos",
      "Use cloud storage for files",
      "Clear cache monthly",
    ],
  },
  {
    id: "wifi-not-connecting",
    title: "WiFi Not Connecting on Phone",
    description: "Phone won't connect to WiFi networks or keeps disconnecting.",
    causes: [
      "Wrong WiFi password",
      "Router issues",
      "Phone network settings",
      "Signal interference",
    ],
    solutions: [
      "Forget and reconnect to WiFi network",
      "Check WiFi password is correct",
      "Restart both phone and WiFi router",
      "Reset network settings in phone Settings",
      "Move closer to WiFi router",
    ],
    prevention: [
      "Keep WiFi passwords updated",
      "Restart router monthly",
      "Update phone software regularly",
    ],
  },
  {
    id: "camera-not-working",
    title: "Phone Camera Not Working",
    description: "Camera app crashes, shows black screen, or won't open.",
    causes: [
      "Camera app glitch",
      "Insufficient storage space",
      "Other apps using camera",
      "Software issues",
    ],
    solutions: [
      "Close camera app completely and reopen",
      "Restart your phone",
      "Clear camera app cache in Settings",
      "Free up storage space",
      "Update camera app and phone software",
    ],
    prevention: [
      "Keep sufficient storage space",
      "Close apps before using camera",
      "Update apps regularly",
    ],
  },
  {
    id: "apps-keep-crashing",
    title: "Phone Apps Keep Crashing",
    description: "Apps close unexpectedly or won't open properly.",
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

export default function PhoneProblemsPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Phone Problems & Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Fix the most common phone issues with our step-by-step
            troubleshooting guides. Works for both Android and iPhone devices.
          </p>
        </div>

        {/* Problems List */}
        <div className="space-y-12">
          {phoneProblems.map((problem, index) => (
            <div
              key={problem.id}
              className="border border-gray-200 rounded-lg p-8 bg-gray-50"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {problem.title}
                  </h2>

                  <p className="text-gray-600 mb-6">{problem.description}</p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        What Causes This:
                      </h3>
                      <ul className="space-y-2">
                        {problem.causes.map((cause, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3"></span>
                            <span className="text-sm text-gray-700">
                              {cause}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Solutions:
                      </h3>
                      <ol className="space-y-2">
                        {problem.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 bg-primary-600 text-white rounded-full text-xs flex items-center justify-center mr-3 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-sm text-gray-700">
                              {solution}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Prevention Tips:
                      </h3>
                      <ul className="space-y-2">
                        {problem.prevention.map((tip, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3"></span>
                            <span className="text-sm text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-16 flex justify-center space-x-6">
          <Link
            href="/computer-problems"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Computer Problems →
          </Link>
          <Link
            href="/internet-problems"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Internet Problems →
          </Link>
        </div>
      </div>
    </div>
  );
}
