import Image from "next/image";
import { FaCheckCircle, FaUsers, FaCertificate, FaInfinity } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-sm">
        <div className="text-2xl font-bold">EdA</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="What do you want to learn?"
            className="px-3 py-2 border rounded-lg w-64"
          />
          <button className="px-4 py-2 bg-gray-100 rounded-lg">Login</button>
          <button className="px-4 py-2 bg-yellow-400 rounded-lg font-medium">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex justify-between items-center px-16 py-12">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Unlock Your Future with <span className="text-yellow-500">World-Class Learning</span>
          </h1>
          <p className="mb-6 text-gray-600">
            Gain in-demand knowledge, grow your career, and learn from top instructors—anytime, anywhere.
          </p>
          <button className="px-6 py-3 bg-yellow-400 font-medium rounded-lg">
            Get Started
          </button>
        </div>
        <div>
          <Image src="/hero.png" alt="Hero" width={350} height={350} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-16 py-12">
        <h2 className="text-2xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-4 gap-6">
          <FeatureCard icon={<FaUsers />} title="Expert Instructors" />
          <FeatureCard icon={<FaCheckCircle />} title="Learn Anytime" />
          <FeatureCard icon={<FaCertificate />} title="Verified Certifications" />
          <FeatureCard icon={<FaInfinity />} title="Lifetime Access" />
        </div>
      </section>

      {/* Featured Courses */}
      <section className="px-16 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
        <div className="grid grid-cols-4 gap-6">
          <CourseCard img="/uiux.png" title="UI/UX Design Essentials" instructor="John Smith" />
          <CourseCard img="/fullstack.png" title="Full Stack Development" instructor="Jane Doe" />
          <CourseCard img="/data.png" title="Data Analysis Python" instructor="Mike Ross" />
          <CourseCard img="/digital.png" title="Digital Marketing 101" instructor="Sara Lee" />
        </div>
      </section>

      {/* How It Works */}
      <section className="px-16 py-12">
        <h2 className="text-2xl font-bold mb-8">How It Works</h2>
        <div className="flex justify-between items-center text-center">
          <Step title="Sign Up" />
          <Step title="Choose Courses" />
          <Step title="Start Learning" />
          <Step title="Earn Certificates" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-16 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-3 gap-6">
          <Testimonial name="Robert K." text="Great platform to upskill quickly!" />
          <Testimonial name="Samrat T." text="The instructors are amazing and supportive." />
          <Testimonial name="Monica S." text="Loved the UI/UX course. Very practical!" />
        </div>
      </section>

      {/* Footer */}
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
    </main>
  );
}

/* Reusable Components */
function FeatureCard({ icon, title }) {
  return (
    <div className="p-6 border rounded-lg text-center">
      <div className="text-3xl mb-4 text-yellow-500">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

function CourseCard({ img, title, instructor }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={img} alt={title} width={400} height={200} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">By {instructor}</p>
      </div>
    </div>
  );
}

function Step({ title }) {
  return (
    <div>
      <div className="w-12 h-12 mx-auto rounded-full bg-yellow-400 flex items-center justify-center text-lg font-bold">
        ✓
      </div>
      <p className="mt-2">{title}</p>
    </div>
  );
}

function Testimonial({ name, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">"{text}"</p>
      <h4 className="font-semibold">{name}</h4>
      <p className="text-yellow-400">★★★★★</p>
    </div>
  );
}
