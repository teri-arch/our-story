import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import PasswordGate from "./PasswordGate";

export default function App() {
  return (
    <PasswordGate>
      <Hero />
      <Letter />
      <Gallery />
    </PasswordGate>
  );
}