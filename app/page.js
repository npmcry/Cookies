"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react"; // Inporting Search for Nav bar
import { Card } from "../components/ui/Card";



export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-black text-white">
      {/* Apple-Style Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 flex justify-center py-4">
  <ul className="flex items-center gap-8 text-sm font-normal">
    <li><a href="#home" className="hover:text-gray-400 transition">Home</a></li>
    <li><a href="#about" className="hover:text-gray-400 transition">About</a></li>
    <li><a href="#projects" className="hover:text-gray-400 transition">Projects</a></li>
    <li><a href="#contact" className="hover:text-gray-400 transition">Contact</a></li>

    {/* Search Icon - Right Next to Links */}
    <button className="text-white hover:text-gray-400 transition">
      <Search size={20} />
    </button>
  </ul>
</nav>


      {/* Home Section - Adjusted */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="flex flex-col items-center text-center gap-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-20 text-6xl font-bold"
          >
            Welcome to My Portfolio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-xl text-gray-400"
          >
            My name is Thanh and this is a portal for cookies, JK!
          </motion.p>

          {/* Product Showcase Image - Now Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/cookies.jpg"
              width={300}
              height={300}
              alt="Crumbl Cookie"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Call-to-Action Button - Now Fixed */}
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="mt-10 px-6 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            Learn More
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-black">
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          Cookies are not good, boooo!!!
        </motion.h2>
        
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-black">
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          Why are Cookies Bad?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="mt-8 text-xl text-gray-700 text-center">
          Cookies are high in sugar & they get stored on your computer, lame af.
        </motion.p>

        
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-200 px-6 text-black">
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          Why eat Cookies when you already store them?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="mt-8 text-xl text-gray-700 text-center">
          Get rid of Cookies.
        </motion.p>
      </section>
    </div>
  );
}
