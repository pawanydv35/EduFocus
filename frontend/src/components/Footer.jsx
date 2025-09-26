import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;

