import { motion } from "framer-motion";

const moments = [
  "❤️ The day we met",
  "😊 Our first conversations",
  "📸 Our beautiful memories",
  "🥺 The mistakes I made",
  "💌 This apology",
  "✨ Our new beginning"
];

export default function Timeline() {
  return (
    <section className="py-28 px-6">

      <motion.h2
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="text-5xl font-bold text-center text-white mb-20"
      >
        Our Story
      </motion.h2>

      <div className="max-w-3xl mx-auto">

        {moments.map((item,index)=>(
          <motion.div
            key={index}
            initial={{opacity:0,x:index%2===0?-80:80}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.7}}
            className="mb-8 rounded-3xl bg-white/10 backdrop-blur-xl p-6 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl text-pink-300 font-semibold">
              {item}
            </h3>
          </motion.div>
        ))}

      </div>

    </section>
  );
}