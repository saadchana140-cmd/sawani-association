import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f]">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}