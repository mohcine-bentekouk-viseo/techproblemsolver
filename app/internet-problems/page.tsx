import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internet Problems Solutions - Fix WiFi & Network Issues",
  description:
    "Solve common internet and WiFi problems including slow speeds, connection drops, router issues, and network connectivity problems.",
  keywords:
    "internet problems, WiFi issues, slow internet, network troubleshooting, router problems, connection issues",
};

interface Problem {
  id: string;
  title: string;
  description: string;
  causes: string[];
  solutions: string[];
  prevention: string[];
}

const internetProblems: Problem[] = [
  {
    id: "internet-slow-speed",
    title: "Internet Slow Speed",
    description:
      "Your internet connection is much slower than what you're paying for.",
    causes: [
      "Network congestion during peak hours",
      "Too many devices connected",
      "Outdated router or modem",
      "ISP throttling or issues",
      "Background downloads/updates",
    ],
    solutions: [
      "Run speed test at different times of day",
      "Disconnect unused devices from WiFi",
      "Restart router and modem by unplugging for 30 seconds",
      "Move closer to router or use ethernet cable",
      "Check for background downloads and pause them",
      "Contact ISP if speeds consistently below advertised",
    ],
    prevention: [
      "Use 5GHz WiFi band when possible",
      "Position router in central location",
      "Upgrade router every 3-4 years",
      "Monitor connected devices regularly",
    ],
  },
  {
    id: "wifi-keeps-disconnecting",
    title: "WiFi Keeps Disconnecting",
    description:
      "Your WiFi connection drops frequently and reconnects automatically.",
    causes: [
      "Weak WiFi signal strength",
      "Power management settings",
      "Router overheating",
      "Interference from other devices",
      "Outdated network drivers",
    ],
    solutions: [
      "Move closer to router or add WiFi extender",
      "Disable power saving for WiFi adapter in Device Manager",
      "Restart router and check for overheating",
      "Change WiFi channel in router settings",
      "Update WiFi adapter drivers",
      "Forget and reconnect to network",
    ],
    prevention: [
      "Keep router firmware updated",
      "Place router away from interference sources",
      "Use quality ethernet cables",
      "Regular router restarts",
    ],
  },
  {
    id: "cant-access-websites",
    title: "Can't Access Certain Websites",
    description: "Some websites won't load while others work fine.",
    causes: [
      "DNS server issues",
      "Browser cache problems",
      "Firewall blocking sites",
      "ISP restrictions",
      "Website server problems",
    ],
    solutions: [
      "Clear browser cache and cookies",
      "Try different browser or incognito mode",
      "Change DNS servers to 8.8.8.8 and 8.8.4.4 (Google)",
      "Disable firewall/antivirus temporarily to test",
      "Try accessing site from different device",
      "Use VPN to bypass potential ISP blocks",
    ],
    prevention: [
      "Keep browsers updated",
      "Use reliable DNS servers",
      "Regular cache clearing",
      "Monitor firewall settings",
    ],
  },
  {
    id: "router-not-working",
    title: "Router Not Working",
    description:
      "Router has no lights, won't connect, or broadcasts no WiFi signal.",
    causes: [
      "Power adapter failure",
      "Overheating issues",
      "Firmware corruption",
      "Hardware failure",
      "Configuration errors",
    ],
    solutions: [
      "Check power adapter and all cable connections",
      "Unplug router for 30 seconds then plug back in",
      "Factory reset router using reset button",
      "Check router isn't overheating - ensure good ventilation",
      "Try different ethernet cables",
      "Contact ISP or router manufacturer if still not working",
    ],
    prevention: [
      "Keep router in well-ventilated area",
      "Update firmware regularly",
      "Use surge protector",
      "Don't overload router with too many devices",
    ],
  },
  {
    id: "forgot-wifi-password",
    title: "Forgot WiFi Password",
    description:
      "You need to connect new device but can't remember WiFi password.",
    causes: [
      "Password not written down",
      "Default password changed long ago",
      "Multiple password changes forgotten",
      "No access to router admin panel",
    ],
    solutions: [
      "Check for password sticker on router",
      "Access router admin panel (usually 192.168.1.1) with admin credentials",
      "View saved password on connected device (Windows/Mac WiFi settings)",
      "Use WPS button on router to connect without password",
      "Reset router to factory defaults (last resort)",
      "Call ISP for help if using their router",
    ],
    prevention: [
      "Write down passwords in secure location",
      "Use password manager",
      "Take photo of router password sticker",
      "Share password with trusted household members",
    ],
  },
  {
    id: "internet-after-power-outage",
    title: "Internet Not Working After Power Outage",
    description: "Internet stopped working after power came back on.",
    causes: [
      "Modem/router didn't restart properly",
      "Power surge damaged equipment",
      "ISP infrastructure affected",
      "Configuration settings lost",
      "Cables disconnected during outage",
    ],
    solutions: [
      "Unplug modem and router for 30 seconds, plug modem first, wait 2 minutes, then router",
      "Check all cable connections are secure",
      "Look for any damaged cables or equipment",
      "Call ISP to check for area outages",
      "Factory reset equipment if necessary",
      "Check surge protector is working",
    ],
    prevention: [
      "Use quality surge protectors",
      "Consider UPS backup power",
      "Document network settings",
      "Have ISP contact information ready",
    ],
  },
  {
    id: "zoom-calls-dropping",
    title: "Zoom Calls Keep Dropping",
    description: "Video calls disconnect frequently or have poor quality.",
    causes: [
      "Insufficient bandwidth",
      "Unstable internet connection",
      "Background bandwidth usage",
      "Outdated app version",
      "Device performance issues",
    ],
    solutions: [
      "Close other internet-using applications",
      "Use ethernet cable instead of WiFi",
      "Lower video quality in Zoom settings",
      "Update Zoom application",
      "Restart router before important calls",
      "Ask others to pause downloads/streaming",
    ],
    prevention: [
      "Test internet speed before calls",
      "Schedule calls during off-peak hours",
      "Keep video calling apps updated",
      "Have backup connection ready",
    ],
  },
  {
    id: "email-not-sending",
    title: "Email Not Sending",
    description: "Emails get stuck in outbox or return with error messages.",
    causes: [
      "Incorrect server settings",
      "Authentication problems",
      "Attachment file too large",
      "Internet connection issues",
      "Email server maintenance",
    ],
    solutions: [
      "Check internet connection is working",
      "Verify email server settings (SMTP, ports)",
      "Remove large attachments and try again",
      "Re-enter email password in settings",
      "Try sending from webmail interface",
      "Contact email provider for server status",
    ],
    prevention: [
      "Keep email settings backed up",
      "Use cloud storage for large files",
      "Regular password updates",
      "Monitor email server announcements",
    ],
  },
  {
    id: "cant-stream-videos",
    title: "Can't Stream Videos",
    description: "Videos buffer constantly, have poor quality, or won't play.",
    causes: [
      "Slow internet connection",
      "Network congestion",
      "Outdated browser/app",
      "Too many devices streaming",
      "ISP throttling video services",
    ],
    solutions: [
      "Lower video quality to 480p or 720p",
      "Pause other devices' internet usage",
      "Clear browser cache and cookies",
      "Try different browser or app",
      "Use ethernet connection instead of WiFi",
      "Contact ISP about potential throttling",
    ],
    prevention: [
      "Upgrade internet plan if needed",
      "Schedule streaming during off-peak hours",
      "Use QoS settings on router",
      "Keep streaming apps updated",
    ],
  },
  {
    id: "vpn-not-connecting",
    title: "VPN Not Connecting",
    description: "VPN won't connect or keeps disconnecting during use.",
    causes: [
      "Firewall blocking VPN",
      "Wrong server location",
      "Outdated VPN app",
      "ISP blocking VPN traffic",
      "Network restrictions",
    ],
    solutions: [
      "Try different VPN server locations",
      "Temporarily disable firewall to test",
      "Update VPN application",
      "Change VPN protocol in settings",
      "Restart network adapter",
      "Contact VPN provider support",
    ],
    prevention: [
      "Keep VPN app updated",
      "Have multiple server options",
      "Test VPN regularly",
      "Know alternative connection methods",
    ],
  },
];

export default function InternetProblemsPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Internet & WiFi Problems Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Fix common internet connectivity issues, WiFi problems, and network
            troubles with our detailed troubleshooting guides.
          </p>
        </div>

        {/* Problems List */}
        <div className="space-y-12">
          {internetProblems.map((problem, index) => (
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
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            ← Computer Problems
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            About Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
