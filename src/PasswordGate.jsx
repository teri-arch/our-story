import { useState } from "react";
import { motion } from "framer-motion";

export default function PasswordGate({ children }) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [wrong, setWrong] = useState(false);

 const correctPassword = "MRS.RAJ"

  function checkPassword() {
    if (password === correctPassword) {
      setUnlocked(true);
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 1500);
    }
  }

  if (unlocked) return children;

  return (
    <div className="fixed inset-0 bg-[#0f1118] flex items-center justify-center px-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 p-10 text-center shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-pink-400 mb-3">
          ❤️ Our Story ❤️
        </h1>

        <p className="text-gray-300 mb-8">
          This website was made for someone very special.
        </p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-black/20 border border-white/20 p-4 text-white outline-none"
          onKeyDown={(e) => e.key === "Enter" && checkPassword()}
        />

        <button
          onClick={checkPassword}
          className="mt-6 w-full rounded-xl bg-pink-500 hover:bg-pink-600 transition p-4 font-semibold text-white"
        >
          Unlock ❤️
        </button>

        {wrong && (
          <p className="text-red-400 mt-4">
            Wrong password ❤️
          </p>
        )}
      </motion.div>
    </div>
  );
}