import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Letter() {
 const fullLetter = `Aeheheheh Babyyy ❤️

I know I've done a lot wrong over the past few days, especially today. I've kept hurting you even though I knew those things would obviously hurt you and our relationship.

But babe, I swear I never intended to hurt you. Every mistake I made came from my own immaturity, not because I ever wanted to see you sad.

You mean so much more to me than I can ever explain with just words. You're not just someone I love... you're the person who makes my days brighter, my heart calmer, and my life happier.

I'm truly sorry for every tear, every moment of disappointment, and every time I made you question my love. If I could go back and change those moments, I would do it without thinking twice.

This website isn't just a project. Every section, every animation, every photo, and every line was made only for you. I wanted to create something that you could keep and remember, something that shows how much you mean to me.

I know an apology alone cannot fix everything. Trust takes time to rebuild, and I understand that. I don't expect everything to become perfect overnight. I only hope you'll let me prove, through my actions, that I can become the person you deserve.

Thank you for every smile you've given me, every memory we've created together, and every moment you've stayed by my side. Those moments are priceless to me.

I promise to learn from my mistakes, communicate better, respect your feelings, and never stop trying to become a better person.

I love youuuu 3000 ❤️

And in every universe...
I will always choose you.

Because you're my MJ. ❤️

Forever Yours,

FROM UR HUBBY (KUTTAW)
ABHINAV RAJ DIKSHIT ❤️`;

const [displayedText, setDisplayedText] = useState("");

useEffect(() => {
  let i = 0;

  const interval = setInterval(() => {
    setDisplayedText(fullLetter.slice(0, i));
    i++;

    if (i > fullLetter.length) clearInterval(interval);
  }, 25);

  return () => clearInterval(interval);
}, []);
 return (
  <motion.section
    id="letter"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative min-h-screen flex items-center justify-center px-6 py-24"
  >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-4xl rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.4)] p-10 md:p-14"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent mb-10">
          A Letter From My Heart ❤️
        </h2>

        <div className="space-y-6 text-gray-200 leading-9 text-lg md:text-xl">
          <p>
            My love,
          </p>

         <p id="letter-text" className="whitespace-pre-line">
  {displayedText}
</p>

          <p className="text-right pt-8 text-pink-300 font-semibold">
            — Yours ❤️
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}