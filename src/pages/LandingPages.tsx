import About from "../components/LandingPage/About";
import Contact from "../components/LandingPage/Contact";
import Hero from "../components/LandingPage/Hero";
import NavBar from "../components/LandingPage/NavBar";
import Support from "../components/LandingPage/Support";
export default function LandingPages() {
  return (
    <main className="flex flex-col h-auto bg-[#232224]">
      <NavBar />
      <Hero />
      <About />
      <Support />
      <Contact />
    </main>
  );
}
