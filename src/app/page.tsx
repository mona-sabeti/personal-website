import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { Navbar } from "@/components/Navbar";
import { RefreshScrollReset } from "@/components/RefreshScrollReset";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <RefreshScrollReset />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Education />
        <Experience />
        <FeaturedProjects />
        <Leadership />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
