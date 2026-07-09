import { motion } from "framer-motion";

const promises = [
  {
    title: "❤️ Respect",
    text: "I promise to always respect your feelings, your thoughts, and your heart."
  },
  {
    title: "🤝 Trust",
    text: "I promise to rebuild the trust I damaged, one day at a time."
  },
  {
    title: "🌸 Patience",
    text: "I promise to listen before reacting and understand before speaking."
  },
  {
    title: "✨ Growth",
    text: "I promise to become a better person, not only for you but for myself too."
  }
];

export default function Promises() {
  return (
    <section className="py-28 px-6">

      <motion.h2
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="text-center text-5xl font-bold text-white mb-16"
      >
        My Promises To You
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {promises.map((promise,index)=>(
          <motion.div
            key={index}
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{delay:index*0.15}}
            whileHover={{
              scale:1.03,
              rotate:0.5
            }}
            className="rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl"
          >

            <h3 className="text-3xl text-pink-300 font-bold mb-4">
              {promise.title}
            </h3>

            <p className="text-gray-300 leading-8">
              {promise.text}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}