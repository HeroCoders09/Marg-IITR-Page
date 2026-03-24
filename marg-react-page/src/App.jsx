import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PeoplePage from "./pages/PeoplePage";
import ResearchPage from "./pages/ResearchPage";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Footer showContact={true} />
    </>
  );
}

function PeopleLayout() {
  return (
    <>
      <PeoplePage />
      <Footer showContact={false} />
    </>
  );
}

function ResearchLayout() {
  return (
    <>
      <ResearchPage />
      <Footer showContact={false} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeopleLayout />} />
        <Route path="/research" element={<ResearchLayout />} />
      </Routes>
    </BrowserRouter>
  );
}