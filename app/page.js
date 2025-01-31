"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react"; // Importing Search for Nav bar
import { Card } from "../components/ui/Card";
import CookieShowcase from "../components/CookieShowcase"; // ✅ Import CookieShowcase component

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // 🔥 Scroll to the correct cookie
  const handleScrollToCookie = (cookieId) => {
    const target = document.getElementById(cookieId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // ✅ Smooth scrolling
    }
  };

  const cookies = [
    { id: 1, src: "/cookie1.jpg", sectionId: "cookie1" },
    { id: 2, src: "/cookie2.jpg", sectionId: "cookie2" },
    { id: 3, src: "/cookie3.jpg", sectionId: "cookie3" },
    { id: 4, src: "/cookie4.jpg", sectionId: "cookie4" },
  ];

  return (
    <div className="bg-black text-white">
      {/* Apple-Style Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[rgba(255,185,205,1)] backdrop-blur-md z-50 flex justify-center py-4">

        <ul className="flex items-center gap-8 text-sm font-normal">
          <li><a href="#home" className="hover:text-gray-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400 transition">Contact</a></li>

          {/* Search Icon - Right Next to Links */}
          <button className="text-bla hover:text-gray-400 transition">
            <Search size={20} />
          </button>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="flex flex-col items-center text-center gap-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-20 text-6xl font-bold"
          >
            Cookies.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-xl text-white-400"
          >
            Stay Informed. They are taking over the world!
          </motion.p>

          {/* 🍪 Overlapping Cookies with Clickable Navigation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex justify-center items-center relative"
          >
            <div className="relative flex">
              {cookies.map((cookie, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }} // ✅ Hover enlarges cookie
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className={`relative z-${index + 10} -mr-10 cursor-pointer`}
                  onClick={() => handleScrollToCookie(cookie.sectionId)} // ✅ Scroll to cookie showcase
                >
                  <Image
                    src={cookie.src}
                    width={300}
                    height={300}
                    alt={`Cookie ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call-to-Action Button */}
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

      {/* ✅ INSERT THE COOKIE SHOWCASE SECTION BELOW */}
      <CookieShowcase />
    </div>
  );
}
