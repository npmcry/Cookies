"use client";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We’ll get back to you soon.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[rgba(255,185,205,1)] backdrop-blur-md z-50 flex justify-center py-4" style={{ height: '64px' }}>
        <ul className="flex items-center gap-8 text-sm font-normal">
          <li>
            <Link href="/" className="hover:text-gray-400 transition">Home</Link>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow w-full" style={{ paddingTop: '64px' }}>
        <div className="flex w-full min-h-screen">
          {/* Left Side - Contact Form */}
          <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-black mb-6">Chat with Us</h2>
            <p className="text-gray-600 mb-6">
              Got a question? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 border rounded-md px-4 py-3"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/2 border rounded-md px-4 py-3"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3"
                rows="4"
                required
              ></textarea>

              <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Image and Info */}
          <div className="w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/crumbl.jpg"
                layout="fill"
                objectFit="cover"
                alt="Cookies Take Over the World"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
