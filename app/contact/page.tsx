"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import {
  Mail,
  Phone,
  MessageCircle,
  Wrench,
  FileText,
  Smartphone,
  Monitor,
  Globe,
  Rocket,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitType, setSubmitType] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(
        "Thank you for your message! We'll get back to you within 24 hours."
      );
      setSubmitType("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "general",
        message: "",
      });
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Get detailed help via email",
      info: "support@techproblemsolver.com",
      response: "Response within 24 hours",
      href: "mailto:support@techproblemsolver.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Quick answers to simple questions",
      info: "Available 9 AM - 6 PM EST",
      response: "Instant responses",
      href: "#",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Community Forum",
      description: "Connect with other users",
      info: "Join our community discussions",
      response: "Peer support available",
      href: "#",
    },
  ];

  const faqItems = [
    {
      id: "response-time",
      title: "How quickly will I get a response?",
      icon: <Clock className="w-6 h-6" />,
      content: (
        <div>
          <p>
            We aim to respond to all inquiries within 24 hours during business
            days. For urgent technical issues, we prioritize responses and
            typically reply within 4-6 hours.
          </p>
        </div>
      ),
    },
    {
      id: "solution-guarantee",
      title: "What if the solution doesn't work for me?",
      icon: <Wrench className="w-6 h-6" />,
      content: (
        <div>
          <p>
            We test all our solutions, but every device is unique. If a solution
            doesn't work for you, contact us with:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Your device model and operating system</li>
            <li>Steps you've already tried</li>
            <li>Any error messages you see</li>
          </ul>
          <p className="mt-2">
            We'll provide personalized assistance to help resolve your issue.
          </p>
        </div>
      ),
    },
    {
      id: "request-guide",
      title: "Can I request a guide for a specific problem?",
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div>
          <p>
            Absolutely! We love hearing about problems our community needs help
            with. When requesting a guide, please include:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Detailed description of the problem</li>
            <li>Device type and model</li>
            <li>When the issue started</li>
            <li>Any troubleshooting you've already attempted</li>
          </ul>
          <p className="mt-2">
            Popular requests are prioritized for our content calendar.
          </p>
        </div>
      ),
    },
    {
      id: "partnership",
      title: "Do you offer partnership opportunities?",
      icon: "🤝",
      content: (
        <div>
          <p>Yes! We're always interested in collaborating with:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Tech companies for product guides</li>
            <li>Content creators and bloggers</li>
            <li>Educational institutions</li>
            <li>Tech support professionals</li>
          </ul>
          <p className="mt-2">
            Please reach out via email with your partnership proposal and we'll
            get back to you soon.
          </p>
        </div>
      ),
    },
    {
      id: "accuracy",
      title: "How do you ensure solution accuracy?",
      icon: "✅",
      content: (
        <div>
          <p>We maintain high accuracy through:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Testing solutions on multiple devices before publishing</li>
            <li>Regular updates based on software changes</li>
            <li>Community feedback and verification</li>
            <li>Expert review by our technical team</li>
          </ul>
          <p className="mt-2">
            If you find any inaccuracies, please report them so we can update
            the guide immediately.
          </p>
        </div>
      ),
    },
    {
      id: "cost",
      title: "Is your service completely free?",
      icon: "💰",
      content: (
        <div>
          <p>
            Yes! All our troubleshooting guides, articles, and basic support are
            completely free. We believe everyone should have access to reliable
            tech help.
          </p>
          <p className="mt-2">
            We may offer premium services in the future, but our core mission of
            providing free, accessible tech support will always remain.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-8 pb-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-6">
              <Mail className="w-6 h-6 inline mr-2" />
              Contact & Support
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto mb-8">
            Have a question, suggestion, or need personalized help? We're here
            to support you on your tech journey.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">&lt;24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">95%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600">24/7</div>
              <div className="text-sm text-gray-600">Form Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-semibold mb-4">
              <Rocket className="w-6 h-6 inline mr-2" />
              Multiple Ways to Reach Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-lg text-gray-600">
              We offer several ways to get the help you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                hover={method.href !== "#"}
                className="p-8 text-center border-0 shadow-soft-lg"
              >
                <div className="text-5xl mb-6">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="font-semibold text-primary-700">
                    {method.info}
                  </p>
                  <p className="text-sm text-gray-500">{method.response}</p>
                </div>
                {method.href !== "#" && (
                  <Button
                    href={method.href}
                    variant={index === 0 ? "primary" : "outline"}
                    size="sm"
                  >
                    {index === 0 ? "Send Email" : "Coming Soon"}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="p-8 md:p-12 border-0 shadow-soft-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you soon
              </p>
            </div>

            {submitMessage && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitType === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2">
                    {submitType === "success" ? "✅" : "❌"}
                  </span>
                  {submitMessage}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    <span className="flex items-center">👤 Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    <span className="flex items-center">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    <span className="flex items-center">📂 Category</span>
                  </label>
                  <select
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="general">General Question</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="guide-request">Request New Guide</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="bug-report">Report an Issue</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Subject
                    </span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Message
                  </span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Please provide as much detail as possible. For tech issues, include your device model, operating system, and any error messages you're seeing."
                ></textarea>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="min-w-[200px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="loading-spinner mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-semibold mb-4">
              ❓ Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Answers to Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to the most common questions about our service
            </p>
          </div>

          <Accordion items={faqItems} allowMultiple={true} className="mb-12" />

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Don't see your question answered above?
            </p>
            <Button href="#contact-form" variant="outline">
              Ask Us Directly
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
