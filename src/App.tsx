import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { AlFakher } from "./components/AlFakher";
import { AlFakherMixes } from "./components/AlFakherMixes";
import { Adalya } from "./components/Adalya";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import { Tanya } from "./components/Tanya";
import { Starbuzz } from "./components/Starbuzz";
import { Afzal } from "./components/Afzal";
import { MultiBeam } from "./components/multi-beam";

import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MultiBeam />
      {/* <About /> */}
      <AlFakher />
      <AlFakherMixes />
      <Adalya />
      <Sponsors />
      <Tanya />
      <Starbuzz />
      <Afzal />
      {/* <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing /> */}
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
