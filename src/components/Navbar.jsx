import { FaHeart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg px-6 py-4 shadow-lg">

          <div className="flex items-center gap-2">
            <FaHeart className="text-pink-500 text-xl" />
            <h1 className="text-white text-xl font-bold">
              Our Story
            </h1>
          </div>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#" className="hover:text-pink-400 transition">
              Home
            </a>

            <a href="#" className="hover:text-pink-400 transition">
              Letter
            </a>

            <a href="#" className="hover:text-pink-400 transition">
              Memories
            </a>

            <a href="#" className="hover:text-pink-400 transition">
              Music
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}