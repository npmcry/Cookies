import { motion } from "framer-motion";
import Image from "next/image";

export default function CookieShowcase() {
  const cookies = [
    {
      id: "cookie1",
      src: "/cookie1.jpg",
      title: "Session Cookie",
      description: "Just like how a warm chocolate chip cookie is best enjoyed fresh, session cookies are temporary and disappear once you close the browser.",
      backgroundColor: "bg-[#734b3a]",
      alignment: "right",
      rotate: -15,
    },
    {
      id: "cookie2",
      src: "/cookie2.jpg",
      title: "Persistent Cookie",
      description: "A confetti cake cookie leaves lasting sprinkles—just like persistent cookies, which remain stored on your computer even after closing the browser.",
      backgroundColor: "bg-[#C28ED2]",
      alignment: "left",
      rotate: 15,
    },
    {
      id: "cookie3",
      src: "/cookie3.jpg",
      title: "Third Party Cookie",
      description: "A key lime pie cookie stands out with its tangy twist, just like third-party cookies, which come from external websites (advertisers, analytics tools).",
      backgroundColor: "bg-[#A2D149]",
      alignment: "right",
      rotate: -12,
    },
    {
      id: "cookie4",
      src: "/cookie4.jpg",
      title: "Super Cookie",
      description: "A pecan caramel swirl cookie is rich and sticky, just like super cookies (or Evercookies), which are hard to remove.",
      backgroundColor: "bg-[#D4A373]",
      alignment: "left",
      rotate: 12,
    },
  ];

  return (
    <section className="py-16 flex flex-col items-center space-y-16">
      {cookies.map((cookie) => (
        <motion.div
          key={cookie.id}
          id={cookie.id}
          className={`relative w-[85%] max-w-[1000px] flex ${
            cookie.alignment === "right" ? "justify-end" : "justify-start"
          } items-center min-h-[250px] sm:min-h-[350px] lg:min-h-[450px]`}
        >
          {/* Background Box that appears on hover */}
          <motion.div
            className={`absolute left-[-50px] right-[-50px] h-full transition-opacity duration-300 ease-in ${cookie.backgroundColor} rounded-[30px] p-[40px]`}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />

          {/* Cookie Image */}
          <motion.div
            whileHover={{ rotate: cookie.rotate + 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className={`absolute ${
              cookie.alignment === "right" ? "-left-28 md:-left-40" : "-right-28 md:-right-40"
            } z-20`}
          >
            <Image
              src={cookie.src}
              width={400}
              height={400}
              alt={cookie.title}
              className={`object-cover drop-shadow-xl rotate-[${cookie.rotate}]`}
            />
          </motion.div>

          {/* Text Description (Better Layout) */}
          <div
            className={`relative z-10 p-[30px] text-white max-w-[550px] flex flex-col gap-y-4 ${
              cookie.alignment === "right" ? "items-start text-left" : "items-end text-right"
            }`}
          >
            <h2 className="text-[42px] md:text-[50px] font-extrabold leading-tight">
              {cookie.title}
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[28px] text-gray-200">
              {cookie.description}
            </p>
            <div className={`flex gap-4 ${cookie.alignment === "right" ? "justify-start" : "justify-end"}`}>
              <button className="px-6 py-3 border border-white rounded-full hover:bg-black hover:text-white transition">
                Learn More
              </button>
              <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-700 transition">
                Order Now
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
