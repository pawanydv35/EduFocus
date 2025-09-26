import React from "react";
import { FaUsers, FaCheckCircle, FaCertificate, FaInfinity } from "react-icons/fa";

function LandingPage() {
  const features = [
    { icon: <FaUsers />, title: "Expert Instructors" },
    { icon: <FaCheckCircle />, title: "Learn Anytime" },
    { icon: <FaCertificate />, title: "Verified Certifications" },
    { icon: <FaInfinity />, title: "Lifetime Access" },
  ];

  const courses = [
    { img: "/uiux.png", title: "UI/UX Design Essentials", instructor: "John Smith" },
    { img: "/fullstack.png", title: "Full Stack Development", instructor: "Jane Doe" },
    { img: "/data.png", title: "Data Analysis Python", instructor: "Mike Ross" },
    { img: "/digital.png", title: "Digital Marketing 101", instructor: "Sara Lee" },
  ];

  const steps = ["Sign Up", "Choose Courses", "Start Learning", "Earn Certificates"];

  const testimonials = [
    { name: "Robert K.", text: "Great platform to upskill quickly!" },
    { name: "Samrat T.", text: "The instructors are amazing and supportive." },
    { name: "Monica S.", text: "Loved the UI/UX course. Very practical!" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-between items-center px-16 py-12">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Unlock Your Future with{" "}
            <span className="text-yellow-500">World-Class Learning</span>
          </h1>
          <p className="mb-6 text-gray-600">
            Gain in-demand knowledge, grow your career, and learn from top
            instructors—anytime, anywhere.
          </p>
          <button className="px-6 py-3 bg-yellow-400 font-medium rounded-lg">
            Get Started
          </button>
        </div>
        <div>
          <img src="/src/assets/hero.png" alt="Hero" width={350} height={350} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-16 py-12">
        <h2 className="text-2xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 border rounded-lg text-center">
              <div className="text-3xl mb-4 text-yellow-500">{f.icon}</div>
              <h3 className="font-semibold">{f.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="px-16 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
        <div className="grid grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm">By {c.instructor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-16 py-12">
        <h2 className="text-2xl font-bold mb-8">How It Works</h2>
        <div className="flex justify-between items-center text-center">
          {steps.map((s, i) => (
            <div key={i}>
              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-400 flex items-center justify-center text-lg font-bold">
                ✓
              </div>
              <p className="mt-2">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-16 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-yellow-400">★★★★★</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LandingPage;
