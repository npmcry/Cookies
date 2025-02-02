"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search } from "lucide-react"; // Importing Search for Nav bar
import { Card } from "../components/ui/Card";
import CookieShowcase from "../components/CookieShowcase"; // ✅ Import CookieShowcase component
import { ShoppingCart } from "lucide-react"; // ✅ Import ShoppingCart icon
import { Trash2 } from "lucide-react";
import Link from "next/link";



// HOME FUNCTION
export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Cart Items
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);
  // Remove Items from Cart
  const removeFromCart = (id) => {
    const existingItem = cartItems.find(item => item.id === id);

    let updatedCart;
    if (existingItem.quantity > 1) {
      updatedCart = cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      updatedCart = cartItems.filter((item) => item.id !== id);
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add some cookies first!");
      return;
    }

    alert("Redirecting to checkout...");
    localStorage.removeItem("cart"); // ✅ Clear the cart after checkout
    setCartItems([]); // ✅ Reset cart state
    setIsCartOpen(false); // ✅ Close cart after checkout
    // Redirect to checkout page (change this if you have a checkout route)
    window.location.href = "/checkout";
  };



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
    <div className="bg-black text-white flex flex-col min-h-screen">

      {/* Apple-Style Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[rgba(255,185,205,1)] backdrop-blur-md z-50 flex justify-center py-4">

        <ul className="flex items-center gap-8 text-sm font-normal">
          <li><a href="#home" className="hover:text-gray-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400 transition">About</a></li>
          <li><a href="https://github.com/npmcry" className="hover:text-gray-400 transition" target="_blank" rel="noopener noreferrer">Projects</a></li>

          <li><a href="/contact" className="hover:text-gray-400 transition">Contact</a></li>


          {/* Search Icon - Right Next to Links */}
          <button className="text-bla hover:text-gray-400 transition">
            <Search size={20} />
          </button>


          {/* Cart Button (aligned right) with item count */}
          <button onClick={() => setIsCartOpen(true)} className="relative text-black hover:text-gray-400 transition">
            <ShoppingCart size={28} />
            {cartItems.length > 0 && (
              <span className="absolute top-[-5px] right-[-8px] bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>


          {/* Sidebar Cart */}

          {isCartOpen && (
            <div className="fixed right-0 top-0 w-full md:w-[500px] h-full bg-white text-black shadow-2xl p-6 z-50 transition-transform transform translate-x-0 flex flex-col rounded-l-3xl min-h-screen">


              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">My Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-black text-xl">✕</button>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
                    <div className="flex items-center gap-3">
                      <Image src={item.src} alt={item.title} width={80} height={80} className="rounded-md" />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-gray-500 text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 border rounded-full px-3 py-1">
                      {/* Trash Can Icon */}
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-black transition">
                        <Trash2 size={18} />
                      </button>

                      {/* Item Quantity */}
                      <span className="font-semibold text-black text-sm">{item.quantity}</span>

                      {/* Plus Button */}
                      <button onClick={() => addToCart(item)} className="text-black hover:text-white hover:bg-black transition border rounded-full w-6 h-6 flex items-center justify-center">
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}

              {/* Subtotal */}
              <div className="mt-auto">
                <p className="text-xl font-semibold flex justify-between">
                  Subtotal:
                  <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                </p>

                {/* Rewards Section */}
                <div className="bg-[#FFEDD5] text-black p-3 rounded-lg mt-4 flex items-center justify-center text-sm font-medium">
                  <span>⭐ Earn 5 Pixels per $1 for this order!</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => handleCheckout()}
                  className="w-full bg-black text-white py-3 rounded-md mt-4 text-lg font-semibold hover:bg-gray-800 transition"
                >
                  Checkout
                </button>

              </div>
            </div>
          )}


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
                    width={330}
                    height={330}
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
      <section
        id="about"
        className="relative flex flex-col items-center justify-center min-h-screen bg-white px-6 text-black overflow-hidden"
      >
        {/* Falling Cookies Effect (Spreads & Falls Fully to Bottom) */}
        <div className="absolute inset-0 overflow-hidden">
          {["cookie1.jpg", "cookie2.jpg", "cookie3.jpg", "cookie4.jpg"].map((cookie, index) => (
            <motion.img
              key={index}
              src={`/${cookie}`}
              alt={`Falling ${cookie}`}
              className="absolute w-40 md:w-64 opacity-90" // Bigger cookies 🍪
              initial={{
                x: Math.random() * window.innerWidth * 0.9, // Spread across width
                y: -300, // Start way above the section
                rotate: Math.random() * 360, // Random start rotation
              }}
              animate={{
                y: "100vh", // ✅ Falls all the way to the bottom of the section
                rotate: [Math.random() * 360, Math.random() * 720], // Rotates naturally
              }}
              transition={{
                duration: Math.random() * 7 + 5, // Random fall speed (5-12 sec)
                ease: "easeInOut", // ✅ Smooth fall
                repeat: Infinity, // Loops forever
              }}
            />
          ))}
        </div>

        {/* Title & Text */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[42px] md:text-[50px] font-extrabold leading-tight"
        >
          Cookies are not good, boooo!!!
        </motion.h2>
      </section>




      {/* Projects Section */}
      <section
        id="projects"
        className="flex flex-col items-center justify-center min-h-screen px-6 text-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[42px] md:text-[50px] font-extrabold leading-tight"
        >
          Why are Cookies Bad?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-8 text-xl text-black-800 text-center"
        >
          Cookies are high in sugar & they get stored on your computer, lame af.
        </motion.p>
      </section>



      {/* ✅ Cookie Showcase Section */}
      <CookieShowcase setCartItems={setCartItems} />

      {/* ✅ Footer Section (STACKED LAYOUT) */}
      <footer className="bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Company Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-3">Company</h2>
            <div className="flex flex-wrap justify-center gap-6 text-gray-700">
              <a href="#" className="hover:text-black transition">Order</a>
              <a href="#" className="hover:text-black transition">Our Story</a>
              <a href="#" className="hover:text-black transition">Rewards</a>
              <a href="#" className="hover:text-black transition">Nutrition & Allergy</a>
              <a href="#" className="hover:text-black transition">Support</a>
              <a href="#" className="hover:text-black transition">Gift Card Balance</a>
            </div>
          </div>

          {/* Get Involved Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-3">Get Involved</h2>
            <div className="flex flex-wrap justify-center gap-6 text-gray-700">
              <a href="#" className="hover:text-black transition">Press</a>
              <a href="#" className="hover:text-black transition">Collaborate</a>
              <a href="#" className="hover:text-black transition">Franchising</a>
              <a href="#" className="hover:text-black transition">Cookies Takes Over the World</a>
              <a href="#" className="hover:text-black transition">HQ Careers</a>
              <a href="#" className="hover:text-black transition">Cookies Cares</a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 text-2xl mb-8">
            <a href="#" className="hover:text-black transition"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-black transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-black transition"><i className="fab fa-tiktok"></i></a>
            <a href="#" className="hover:text-black transition"><i className="fab fa-x-twitter"></i></a>
            <a href="#" className="hover:text-black transition"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-black transition"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-black transition"><i className="fab fa-pinterest"></i></a>
          </div>

        </div>

        {/* Bottom Branding Section */}
        <div className="mt-12 bg-[#FFBEDD] text-black py-12 text-center">
          <h2 className="text-6xl font-bold">Cookies.</h2> {/* ✅ Uses h1 styling */}
          <p className="text-gray-800 text-lg mt-4 max-w-xl mx-auto">
            This site was created to showcase interactive elements using Next.js,
            Framer Motion, and Tailwind CSS. Inspired by Crumbl’s design, but not affiliated.
            No copyright infringement intended.
          </p>
          <p className="text-sm text-gray-700 mt-6">
            © {new Date().getFullYear()} All Rights Reserved. |
            <a href="#" className="hover:underline ml-2">Privacy Policy</a> |
            <a href="#" className="hover:underline ml-2">Terms & Conditions</a> |
            <a href="#" className="hover:underline ml-2">Non-edible Cookie Preferences</a>
          </p>
        </div>

      </footer>



    </div>
  );
}
