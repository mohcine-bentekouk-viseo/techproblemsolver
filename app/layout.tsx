import type { Metadata } from "next";
// Removed Inter font import
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

// Removed Inter font initialization

export const metadata: Metadata = {
  title: "Tech Problem Solver - Tech Problems Solved",
  description:
    "Get quick solutions to common phone, computer, and internet problems. Expert troubleshooting guides for everyday tech issues.",
  keywords:
    "tech support, phone problems, computer issues, internet troubleshooting, tech solutions",
  authors: [{ name: "Tech Problem Solver" }],
  openGraph: {
    title: "Tech Problem Solver - Tech Problems Solved",
    description:
      "Get quick solutions to common phone, computer, and internet problems.",
    url: "https://techproblemsolver.com",
    siteName: "Tech Problem Solver",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Problem Solver - Tech Problems Solved",
    description:
      "Get quick solutions to common phone, computer, and internet problems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
