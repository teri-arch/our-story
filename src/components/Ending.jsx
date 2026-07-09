import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";

export default function Ending() {
  const [clicked, setClicked] = useState(false);

  const celebrate = () => {
    if (clicked) return;

    setClicked(true);

    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold text-white mb-8"
      >
        Thank You ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-2xl text-gray-300 text-xl leading-9"
      >
       Thank you for reading everything till the end.

No matter what happens,
these memories will always be special to me.

I truly hope this website made you smile,
even if only for a moment.

You are, and always will be,
one of the most important people in my life.

❤️
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={celebrate}
className="mt-14 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 px-12 py-5 text-xl font-semibold text-white shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_rgba(236,72,153,0.8)] transition-all duration-300"      >
        {clicked ? "❤️ Thank You ❤️" : "Will You Forgive Me?"}
      </motion.button>

    </section>
  );
}