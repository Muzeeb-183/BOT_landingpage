import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTASection from './components/CTA'
import Footer from './components/Footer'


function App() {
useEffect(() => {
  import('aos').then((AOS) => {
    AOS.init({ duration: 1000, once: true });
  });
}, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  )
}

export default App

