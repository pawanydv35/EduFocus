import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import button from "../../components/button";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduFocus",
  description: "A full-stack MERN/Next.js web application for online classes that tracks student attention by detecting tab switches, inactivity, and engagement levels. Features include real-time dashboards, teacher-student management, secure authentication, and detailed analytics for improved virtual learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <button/>
        {children}
      </body>
    </html>
  );
}
