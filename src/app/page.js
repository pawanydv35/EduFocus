import Image from "next/image";
import { Search, CheckCircle } from "lucide-react";
import Button from "@/components/button";
import { cn } from "@/lib/utils";

export default function Home() {

    return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-semibold">EdA</h1>

        <div className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-1">
          <input
            type="text"
            placeholder="What do you want to learn"
            className="outline-none w-60 text-sm"
          />
          <button className="bg-yellow-400 p-2 rounded-full">
            <Search size={18} />
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 px-4"
          >
            Login
          </Button>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4">
            Sign up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-10 py-16 gap-10">
        <div>
          <h2 className="text-4xl font-bold leading-snug">
            Unlock Your Future with <br /> World-Class Learning
          </h2>
          <p className="text-gray-600 mt-4 mb-6">
            Gain in-demand knowledge, grow your career, and learn from top
            instructors—anytime, anywhere.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md">
            Get Started
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="bg-yellow-400 rounded-full p-8">
            <img
              src="/learning-illustration.png"
              alt="Learning Illustration"
              className="w-80"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-10 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold mb-10">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Expert Instructors",
              desc: "Learn from industry leaders.",
            },
            {
              title: "Learn Anytime",
              desc: "Flexible, self-paced content.",
            },
            {
              title: "Verified Certificates",
              desc: "Get certified after completion.",
            },
            {
              title: "Lifetime Access",
              desc: "Access your courses anytime.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <CheckCircle className="text-yellow-400 mb-3" />
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
 
}
