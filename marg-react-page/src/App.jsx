import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}