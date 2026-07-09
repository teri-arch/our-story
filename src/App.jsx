import PasswordGate from "./PasswordGate";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import Promises from "./components/Promises";
import Ending from "./components/Ending";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <PasswordGate>
      <MusicPlayer />
      <Hero />
      <Letter />
      <Gallery />
      <Timeline />
      <Promises />
      <Ending />
      <Footer />
    </PasswordGate>
  );
}