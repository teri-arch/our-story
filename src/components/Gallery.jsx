import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const photos = [
  "/photos/photo1.jpeg",
  "/photos/photo2.jpeg",
  "/photos/photo3.jpeg",
  "/photos/photo4.jpeg",
  "/photos/photo5.jpeg",
  "/photos/photo6.jpeg",
  "/photos/photo7.jpeg",
  "/photos/photo8.jpeg",
  "/photos/photo9.jpeg",
  "/photos/photo10.jpeg",
  "/photos/photo11.jpeg",
  "/photos/photo12.jpeg",
  "/photos/photo13.jpeg",
  "/photos/photo14.jpeg",
  "/photos/photo15.jpeg",
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="min-h-screen px-6 py-24">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold text-white mb-16"
      >
        Our Beautiful Memories ❤️
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-3 rounded-xl shadow-2xl rotate-[-1deg] hover:rotate-0 transition-all duration-300"
          >
            <img
  src={photo}
  alt={`Memory ${index + 1}`}
  className="w-full h-80 object-cover rounded-md cursor-pointer"
  onClick={() => setSelectedPhoto(photo)}
/>

<p className="text-center mt-3 text-gray-700 italic">
  Memory {index + 1} ❤️
</p>
          </motion.div>
        ))}

      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              src={selectedPhoto}
              alt="Memory"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}