import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us - Tech Problem Solver",
  description:
    "Learn about Tech Problem Solver's mission to provide easy-to-follow tech support and troubleshooting guides for everyday problems.",
  keywords:
    "about us, tech support mission, troubleshooting guides, Tech Problem Solver team",
};

export default function AboutPage() {
  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description:
        "Started as a simple blog to help friends and family with tech problems",
      icon: "🌱",
    },
    {
      year: "2024",
      title: "Growing Community",
      description:
        "Reached 10,000+ monthly visitors and expanded to cover more devices",
      icon: "📈",
    },
    {
      year: "2025",
      title: "50K+ Problems Solved",
      description:
        "Now helping over 50,000 people monthly solve their tech issues",
      icon: "🎯",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Tech Writer",
      bio: "Former IT support specialist with 8+ years of experience helping people solve tech problems.",
      avatar: "👨‍💻",
      expertise: [
        "Mobile Devices",
        "Network Issues",
        "Software Troubleshooting",
      ],
    },
    {
      name: "Sarah Chen",
      role: "Content Strategist",
      bio: "Technical writer who specializes in making complex concepts simple and accessible.",
      avatar: "👩‍💼",
      expertise: ["Content Creation", "User Experience", "Technical Writing"],
    },
    {
      name: "Mike Rodriguez",
      role: "Hardware Specialist",
      bio: "Computer technician with expertise in hardware diagnostics and repair solutions.",
      avatar: "👨‍🔧",
      expertise: [
        "Hardware Repair",
        "Performance Optimization",
        "System Diagnostics",
      ],
    },
  ];

  const stats = [
    { number: "50,000+", label: "Problems Solved", icon: "🎯" },
    { number: "98%", label: "Success Rate", icon: "✅" },
    { number: "500+", label: "Detailed Guides", icon: "📚" },
    { number: "24/7", label: "Available Support", icon: "🚀" },
  ];

  const values = [
    {
      title: "Speed",
      description: "Quick solutions that get you back to what matters most",
      icon: "⚡",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Simplicity",
      description: "No technical jargon - just plain English instructions",
      icon: "🎯",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Success",
      description: "Tested solutions that actually work for real people",
      icon: "🏆",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-8 pb-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-6">
              ℹ️ About Our Mission
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Making Tech{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Simple & Accessible
            </span>
          </h1>

          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto mb-8">
            We believe technology should make life easier, not more complicated.
            That's why we're dedicated to providing{" "}
            <strong>simple solutions</strong> to everyday tech problems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary-600">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="p-12 text-center border-0 shadow-soft-lg bg-gradient-to-r from-primary-50 to-secondary-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
                "To bridge the gap between complex technology and simple
                solutions, empowering everyone to solve their tech problems with
                confidence."
              </blockquote>

              {/* Values */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {values.map((value, index) => (
                  <div key={value.title} className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white text-2xl shadow-soft`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-semibold mb-4">
              👥 Meet Our Team
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The People Behind the Solutions
            </h2>
            <p className="text-lg text-gray-600">
              A dedicated team of tech enthusiasts helping you solve problems
              every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="p-8 text-center hover:shadow-soft-lg transition-all duration-300 border-0"
              >
                <div className="text-6xl mb-6">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Specializes in:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-semibold mb-4">
              📈 Our Journey
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We've Grown
            </h2>
            <p className="text-lg text-gray-600">
              From helping a few friends to serving thousands globally
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
                  >
                    <Card className="p-6 border-0 shadow-soft">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-white border-4 border-primary-500 rounded-full z-10 shadow-soft"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
              🎯 Our Approach
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Help You Succeed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Research",
                description: "We identify the most common problems people face",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Test",
                description:
                  "Every solution is tested on real devices before publishing",
                icon: "🧪",
              },
              {
                step: "3",
                title: "Simplify",
                description:
                  "Complex technical processes become easy step-by-step guides",
                icon: "✨",
              },
              {
                step: "4",
                title: "Support",
                description:
                  "We're here to help if you need additional assistance",
                icon: "🤝",
              },
            ].map((step, index) => (
              <div key={step.step} className="text-center">
                <Card className="p-6 h-full hover:shadow-soft-lg transition-all duration-300 border-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-soft">
                    {step.step}
                  </div>
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Solve Your Tech Problems?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands who've found quick solutions to their tech issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-gray-50"
              >
                Find Solutions Now
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
