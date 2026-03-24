import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PeoplePage from "./pages/PeoplePage";
import ResearchPage from "./pages/ResearchPage";
import ResourcesPage from "./pages/ResourcesPage";
import JoinUsPage from "./pages/JoinUsPage";

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

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<><PeoplePage /><Footer showContact={false} /></>} />
        <Route path="/research" element={<><ResearchPage /><Footer showContact={false} /></>} />
        <Route path="/resources" element={<><ResourcesPage /><Footer showContact={false} /></>} />
        <Route path="/join-us" element={<><JoinUsPage /><Footer showContact={false} /></>} />
      </Routes>
    </BrowserRouter>
  );
}