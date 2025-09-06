import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Problems Solutions - Fix PC & Mac Issues",
  description:
    "Solve common computer problems including slow performance, startup issues, blue screen errors, hardware problems. Works for Windows PC and Mac.",
  keywords:
    "computer problems, PC issues, Mac problems, slow computer, blue screen, computer won't start, computer troubleshooting",
};

interface Problem {
  id: string;
  title: string;
  description: string;
  causes: string[];
  solutions: string[];
  prevention: string[];
}

const computerProblems: Problem[] = [
  {
    id: "computer-running-slow",
    title: "Computer Running Slow",
    description:
      "Your computer takes forever to start up, open programs, or respond to clicks.",
    causes: [
      "Too many startup programs",
      "Insufficient RAM memory",
      "Hard drive nearly full",
      "Malware or viruses",
      "Outdated hardware",
    ],
    solutions: [
      "Disable unnecessary startup programs in Task Manager",
      "Run disk cleanup to free up storage space",
      "Scan for malware with Windows Defender or antivirus",
      "Add more RAM if possible",
      "Defragment hard drive (Windows) or repair disk (Mac)",
      "Update drivers and operating system",
    ],
    prevention: [
      "Keep at least 15% of storage space free",
      "Regularly scan for viruses",
      "Close programs when not in use",
      "Restart computer weekly",
    ],
  },
  {
    id: "computer-wont-start",
    title: "Computer Won't Start",
    description: "Computer doesn't turn on or gets stuck on startup screen.",
    causes: [
      "Power supply issues",
      "Loose connections",
      "Hardware failure",
      "Corrupted system files",
      "Overheating protection",
    ],
    solutions: [
      "Check all power cables are securely connected",
      "Try different power outlet",
      "Remove battery (laptop) and hold power button for 30 seconds",
      "Start in safe mode by pressing F8 during boot",
      "Check for overheating - clean fans and vents",
      "Try startup repair from Windows recovery options",
    ],
    prevention: [
      "Keep computer clean and dust-free",
      "Use surge protector",
      "Shut down properly, don't force power off",
      "Keep computer in well-ventilated area",
    ],
  },
  {
    id: "blue-screen-error",
    title: "Blue Screen Error (BSOD)",
    description: "Computer crashes with blue screen showing error messages.",
    causes: [
      "Driver conflicts or corruption",
      "Hardware failures",
      "RAM memory issues",
      "Software conflicts",
      "Overheating",
    ],
    solutions: [
      "Restart computer and note the error code",
      "Boot in safe mode and uninstall recent software/drivers",
      "Run Windows Memory Diagnostic tool",
      "Update all drivers through Device Manager",
      "Check for Windows updates",
      "Run system file checker (sfc /scannow in Command Prompt)",
    ],
    prevention: [
      "Keep drivers updated",
      "Install software from trusted sources only",
      "Regular system maintenance",
      "Monitor computer temperature",
    ],
  },
  {
    id: "computer-overheating",
    title: "Computer Overheating",
    description:
      "Computer gets very hot, fans run loudly, or shuts down unexpectedly.",
    causes: [
      "Dust buildup in fans and vents",
      "Thermal paste dried out",
      "Heavy processing tasks",
      "Blocked air vents",
      "Fan malfunction",
    ],
    solutions: [
      "Clean dust from fans and vents with compressed air",
      "Ensure all vents are unblocked",
      "Check Task Manager for high CPU usage programs",
      "Use laptop cooling pad if needed",
      "Replace thermal paste (advanced users)",
      "Check fans are working properly",
    ],
    prevention: [
      "Clean computer every 3-6 months",
      "Keep vents clear of obstructions",
      "Use in well-ventilated area",
      "Monitor CPU temperatures regularly",
    ],
  },
  {
    id: "keyboard-not-working",
    title: "Keyboard Not Working",
    description: "Some or all keyboard keys don't respond when pressed.",
    causes: [
      "Loose USB connection",
      "Driver issues",
      "Spilled liquid damage",
      "Stuck keys from debris",
      "Hardware failure",
    ],
    solutions: [
      "Reconnect USB keyboard or try different port",
      "Try on-screen keyboard to test if it's hardware issue",
      "Update keyboard drivers in Device Manager",
      "Clean keyboard gently with compressed air",
      "Check for sticky keys or debris under keys",
      "Try different keyboard to isolate problem",
    ],
    prevention: [
      "Keep food and drinks away from keyboard",
      "Clean keyboard regularly",
      "Handle keyboard gently",
      "Use keyboard cover if necessary",
    ],
  },
  {
    id: "mouse-not-responding",
    title: "Mouse Not Responding",
    description: "Mouse pointer doesn't move or clicks don't register.",
    causes: [
      "Dirty mouse sensor",
      "Low battery (wireless mouse)",
      "Driver problems",
      "USB connection issues",
      "Interference (wireless)",
    ],
    solutions: [
      "Clean mouse sensor with soft cloth",
      "Replace batteries in wireless mouse",
      "Try different USB port for wired mouse",
      "Update mouse drivers in Device Manager",
      "Move wireless receiver closer to mouse",
      "Test with different mouse to confirm issue",
    ],
    prevention: [
      "Use proper mouse pad",
      "Keep mouse sensor clean",
      "Replace batteries before they die completely",
      "Avoid interference sources",
    ],
  },
  {
    id: "computer-freezing",
    title: "Computer Freezing Randomly",
    description: "Computer stops responding and requires force restart.",
    causes: [
      "Insufficient RAM",
      "Overheating issues",
      "Driver conflicts",
      "Hardware failures",
      "Software problems",
    ],
    solutions: [
      "Check Task Manager for high memory usage",
      "Monitor temperatures with software tools",
      "Update all drivers through Device Manager",
      "Run memory diagnostic test",
      "Scan for malware and viruses",
      "Check hard drive health with disk utility",
    ],
    prevention: [
      "Don't overload system with too many programs",
      "Keep system updated",
      "Regular maintenance and cleaning",
      "Monitor system performance",
    ],
  },
  {
    id: "cant-connect-wifi",
    title: "Can't Connect to WiFi",
    description: "Computer doesn't see WiFi networks or can't connect.",
    causes: [
      "WiFi adapter disabled",
      "Outdated network drivers",
      "Network settings issues",
      "Router problems",
      "Interference",
    ],
    solutions: [
      "Check WiFi is enabled in system settings",
      "Update WiFi adapter drivers",
      "Run network troubleshooter",
      "Forget and reconnect to network",
      "Reset network settings",
      "Restart both computer and router",
    ],
    prevention: [
      "Keep network drivers updated",
      "Note WiFi passwords securely",
      "Regular router maintenance",
      "Position computer within good range",
    ],
  },
  {
    id: "printer-not-working",
    title: "Printer Not Working",
    description: "Computer can't find printer or print jobs get stuck.",
    causes: [
      "Printer driver issues",
      "Connection problems",
      "Print queue stuck",
      "Low ink or paper",
      "Printer offline status",
    ],
    solutions: [
      "Check printer is turned on and connected",
      "Clear print queue and restart print spooler",
      "Update printer drivers from manufacturer website",
      "Check ink levels and paper tray",
      "Set printer as default in Settings",
      "Run printer troubleshooter",
    ],
    prevention: [
      "Keep printer drivers updated",
      "Check ink/toner levels regularly",
      "Clean printer heads monthly",
      "Use quality paper and ink",
    ],
  },
  {
    id: "computer-loud-noise",
    title: "Computer Making Loud Noise",
    description:
      "Unusual sounds coming from computer like grinding or whirring.",
    causes: [
      "Dust in cooling fans",
      "Failing hard drive",
      "Fan bearing wear",
      "Loose components",
      "Overworked cooling system",
    ],
    solutions: [
      "Clean all fans with compressed air",
      "Check for loose screws or components",
      "Monitor hard drive health with diagnostic tools",
      "Replace noisy fans if necessary",
      "Reduce system load if overheating",
      "Check all internal connections are secure",
    ],
    prevention: [
      "Regular cleaning every 3-6 months",
      "Keep computer in dust-free environment",
      "Don't block ventilation",
      "Monitor system temperatures",
    ],
  },
];

export default function ComputerProblemsPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Computer Problems & Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Fix common PC and Mac issues with our comprehensive troubleshooting
            guides. From hardware problems to software glitches, we\'ve got you
            covered.
          </p>
        </div>

        {/* Problems List */}
        <div className="space-y-12">
          {computerProblems.map((problem, index) => (
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
            href="/phone-problems"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            ← Phone Problems
          </Link>
          <Link
            href="/internet-problems"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Internet Problems →
          </Link>
        </div>
      </div>
    </div>
  );
}
