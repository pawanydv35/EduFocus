import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaInfinity } from "react-icons/fa";
import { FaUserPlus, FaGraduationCap, FaDesktop, FaCertificate, FaUserTie, FaChalkboardTeacher, FaCheckCircle, FaChartLine } from "react-icons/fa";
import SignupFlow from "./SignupFlow";

function LandingPage() {
  const features = [
    { icon: <FaUsers />, title: "Expert Instructors" },
    { icon: <FaCheckCircle />, title: "Learn Anytime" },
    { icon: <FaCertificate />, title: "Verified Certifications" },
    { icon: <FaInfinity />, title: "Lifetime Access" },
  ];

  const courses = [
    { img: "/src/assets/uiux.png", title: "UI/UX Design Essentials", instructor: "John Smith" },
    { img: "/src/assets/fullstack.png", title: "Full Stack Development", instructor: "Jane Doe" },
    { img: "/src/assets/data.png", title: "Data Analysis Python", instructor: "Mike Ross" },
    { img: "/src/assets/digital.png", title: "Digital Marketing 101", instructor: "Sara Lee" },
  ];

  const steps = ["Sign Up", "Choose Courses", "Start Learning", "Earn Certificates"];

  const testimonials = [
    { name: "Robert K.", text: "Great platform to upskill quickly!" },
    { name: "Samrat T.", text: "The instructors are amazing and supportive." },
    { name: "Monica S.", text: "Loved the UI/UX course. Very practical!" },
  ];

  const Arrow = ({ color = "gray" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 50"
    className="w-24 h-8"
    fill="none"
  >
    <path
      d="M5 25 C 25 5, 75 45, 95 25"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="4 4"
      fill="transparent"
      markerEnd="url(#arrowhead)"
    />
    <defs>
      <marker
        id="arrowhead"
        markerWidth="6"
        markerHeight="6"
        refX="5"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L0,6 L6,3 z" fill={color} />
      </marker>
    </defs>
  </svg>
);

  const studentSteps = [
    { icon: <FaUserPlus />, text: "Sign Up" },
    { icon: <FaGraduationCap />, text: "Choose Courses" },
    { icon: <FaDesktop />, text: "Start Learning" },
    { icon: <FaCertificate />, text: "Earn Certificates" },
  ];

  const teacherSteps = [
    { icon: <FaUserTie />, text: "Create an Account" },
    { icon: <FaChalkboardTeacher />, text: "Build Your Course" },
    { icon: <FaCheckCircle />, text: "Publish & Teach" },
    { icon: <FaChartLine />, text: "Track Students’ Progress" },
  ];

  return (
    <>
     
         <header className="flex justify-between items-center">
      {/* Left: Logo */}
      <div className="text-2xl font-handwriting font-bold text-black">
        EdA
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center w-[300px] border border-yellow-400 rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="What do you want to learn"
          className="flex-1 px-4 py-2 outline-none text-sm"
        />
        <button className="bg-yellow-400 p-2 px-4">
          <span className="text-white font-bold">{'➔'}</span>
        </button>
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex items-center gap-3">
        <Link to="/login" className="px-4 py-2 border rounded-md">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md">
          Sign up
        </Link>
      </div>
    </header>


      {/* Hero Section */}
      <section className="flex justify-between items-center px-16 py-12">
        <div className="text-left max-w-lg">
          <h1 className="text-4xl font-bold mb-6">
            Unlock Your Future with{" "}
            <span className="text-left">World-Class Learning</span>
          </h1>
          <p className="mb-3 text-gray-600">
            Gain in-demand knowledge, grow your career, and learn from top
            instructors—anytime, anywhere.
          </p>
          <Link to="/login" className="px-5 py-2 bg-yellow-400 font-medium rounded-lg">
            Get Started
          </Link>
        </div>
        <div>
          <img src="/src/assets/hero.png" alt="Hero" width={350} height={350} />
        </div>
      </section>


    {/* Why Choose Us */}
  <section className="px-16 py-4 bg-white">
  <h2 className="text-2xl font-bold mb-9 text-left">Why Choose Us</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {features.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center border rounded-lg p-6 shadow-sm"
      >
        <span className="text-4xl mb-3 text-yellow-500">{item.icon}</span>
        <p className="text-lg font-medium text-center">{item.title}</p>
      </div>
    ))}
  </div>
</section>

{/* Featured Courses */}
<section className="px-16 py-12 bg-gray-50">
  <h2 className="text-2xl font-bold mb-8 text-left">Featured Courses</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {courses.map((c, i) => (
      <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={c.img}
          alt={c.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold mb-2">{c.title}</h3>
          <p className="text-gray-500 text-sm">By {c.instructor}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* How It Works */}
     <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-12">How It Works</h2>

        {/* Student Section */}
        <div className="mb-12">
          <h3 className="text-gray-500 text-sm mb-6">As a Student</h3>
          <div className="flex items-center justify-center">
            {studentSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-xl mb-3">
                    {step.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-800">{step.text}</p>
                </div>
                {/* Arrow */}
                {index < studentSteps.length - 1 && <Arrow color="black" />}
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Section */}
        <div>
          <h3 className="text-gray-500 text-sm mb-6">As a Teacher</h3>
          <div className="flex items-center justify-center">
            {teacherSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-400 text-black w-12 h-12 flex items-center justify-center rounded-full text-xl mb-3">
                    {step.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-800">{step.text}</p>
                </div>
                {/* Arrow */}
                {index < teacherSteps.length - 1 && <Arrow color="#facc15" />}
              </div>
            ))}
          </div>
        </div>
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

          <footer className="bg-gray-900 text-white px-16 py-12">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">EdA</h2>
          <p>Get ready for your next growth!</p>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300">
              <li>About</li>
              <li>Courses</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Support</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-8">© 2025 EdA. All rights reserved.</p>
    </footer>
    </>
  );
}

export default LandingPage;
