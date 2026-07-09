import Background from "./Background";
import FloatingHearts from "./FloatingHearts";
import Stars from "./Stars";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
export default function Hero() {
 return (
  <>
    <Background />
    <Stars />
    <FloatingHearts />
    <Navbar />

    <motion.section
  id="home"
  className="min-h-screen flex flex-col items-center justify-center text-white px-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>

     <motion.h1 className="text-red-500 text-8xl font-bold">
  Tailwind Test
</motion.h1>

      <motion.p
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="mt-8 max-w-2xl text-center text-lg md:text-xl text-gray-300 leading-8"
>
  Sometimes words aren't enough to express how deeply sorry I am.
  This little website is my way of telling you how much you truly
  mean to me.
</motion.p>
      <motion.button
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 1, type: "spring", stiffness: 120 }}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
 onClick={() =>
  document
    .getElementById("letter")
    ?.scrollIntoView({ behavior: "smooth" })
}
  className="mt-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-4 text-lg font-semibold shadow-2xl shadow-pink-500/30"
>
  Read My Letter 💌
</motion.button>
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="absolute bottom-10 text-white text-4xl"
>
  ↓
</motion.div>
   </motion.section>
  </>
);
}