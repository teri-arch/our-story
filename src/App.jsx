import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import Promises from "./components/Promises";
import MusicPlayer from "./components/MusicPlayer";
import Ending from "./components/Ending";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Letter />
      <Gallery />
      <Timeline />
      <Promises />
      <Ending />
      <Footer />
      <MusicPlayer />
    </>
  );
}