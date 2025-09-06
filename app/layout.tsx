import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Solutions Hub - Tech Problems Solved",
  description:
    "Get quick solutions to common phone, computer, and internet problems. Expert troubleshooting guides for everyday tech issues.",
  keywords:
    "tech support, phone problems, computer issues, internet troubleshooting, tech solutions",
  authors: [{ name: "Quick Solutions Hub" }],
  openGraph: {
    title: "Quick Solutions Hub - Tech Problems Solved",
    description:
      "Get quick solutions to common phone, computer, and internet problems.",
    url: "https://quicksolutionshub.com",
    siteName: "Quick Solutions Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Solutions Hub - Tech Problems Solved",
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
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
