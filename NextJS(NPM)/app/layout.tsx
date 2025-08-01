import ThriveStackProvider from "@/components/ThriveStackProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyApp - Modern Web Application",
  description:
    "A beautiful, modern web application with signup, onboarding, and dashboard functionality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThriveStackProvider>{children}</ThriveStackProvider>
      </body>
    </html>
  );
}
