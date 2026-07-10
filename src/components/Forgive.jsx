import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Forgive() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [yes, setYes] = useState(false);

  const moveNo = () => {
    setNoPos({
      x: Math.random() * 300 - 150,
      y: Math.random() * 150 - 75,
    });
  };

  const yesClicked = () => {
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
    });

    setYes(true);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white px-6">

      <AnimatePresence mode="wait">

        {!yes ? (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              Will You Forgive Me? ❤️
            </h2>

            <div className="relative flex items-center justify-center gap-10 h-40">

              <button
                onClick={yesClicked}
                className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-xl font-bold transition"
              >
                YES ❤️
              </button>

              <motion.button
                onMouseEnter={moveNo}
                animate={{
                  x: noPos.x,
                  y: noPos.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                }}
                className="px-10 py-4 rounded-full bg-gray-700 text-xl font-bold"
              >
                NO 😤
              </motion.button>

            </div>

          </motion.div>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-6xl font-bold text-pink-400 mb-8">
              ❤️ Thank You ❤️
            </h1>

            <p className="text-2xl leading-10 text-gray-300">
              Thank you for giving us another chance.
              <br /><br />
              I promise I'll spend every single day proving
              that your decision was worth it.
              <br /><br />
              I love you more than words can ever explain.
              <br /><br />
              Forever yours,
              <br />
              <span className="text-pink-400 font-bold">
                Abhinav ❤️
              </span>
            </p>
          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}