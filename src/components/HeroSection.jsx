import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const emojiArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // random horizontal position
      delay: Math.random() * 5, // random delay
      duration: 3 + Math.random() * 2, // random speed
    }));
    setEmojis(emojiArray);
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0f0f0f] to-[#1f1f1f] text-white overflow-hidden"
      id="hero"
    >
      {/* 💸 Emoji Rain Layer */}
      <div className="money-rain">
        {emojis.map((e) => (
          <span
            key={e.id}
            className="money-emoji"
            style={{
              left: `${e.left}%`,
              animationDelay: `${e.delay}s`,
              animationDuration: `${e.duration}s`,
            }}
          >
            💴
          </span>
        ))}
      </div>

      {/* 🔮 Background Blurred Blob */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-orange-500 opacity-20 blur-[150px] rounded-full z-0" />

      {/* 🎯 Main Content */}
      <div className="z-10 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get Cashback 💸 Every time you shop online.
        </motion.h1>

        <motion.p
          className="text-gray-300 mt-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Join the SSM Cashback Bot and earn money back on every order you place.No scams. No catch. Just rewards.
        </motion.p>

        <motion.a
          href="https://t.me/SSM_Cashback_Bot"
          target="_blank"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="mt-8 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-lg font-semibold transition shadow-lg animate-pulse">
            💥 Start Saving Now
          </button>
        </motion.a>
      </div>
    </section>
  );
}
