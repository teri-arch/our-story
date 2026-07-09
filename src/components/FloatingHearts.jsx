import { motion } from "framer-motion";

export default function FloatingHearts() {

  return (
    <>
      {[...Array(15)].map((_, i) => (

        <motion.div
          key={i}
          className="fixed text-pink-400 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 25}px`,
          }}
          animate={{
            y: ["100vh", "-10vh"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 8,
          }}
        >
          ❤️
        </motion.div>

      ))}
    </>
  );
}