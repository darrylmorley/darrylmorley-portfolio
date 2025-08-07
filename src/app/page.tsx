import Hero from "@/components/Hero";
import LocalCoverage from "@/components/LocalCoverage";
import Services from "@/components/Services";
import RecentWork from "@/components/RecentWork";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        <Hero />
        <LocalCoverage />
        <Services />
        <RecentWork />
        <About />
        <Contact />
      </main>
    </div>
  );
}
