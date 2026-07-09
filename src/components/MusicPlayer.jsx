import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
className="fixed bottom-6 right-6 z-50 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-5 shadow-2xl hover:scale-110 transition"      >
        {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </>
  );
}