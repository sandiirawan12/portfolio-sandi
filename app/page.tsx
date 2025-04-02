import Exprience from "@/components/main/Exprience";
import Education from "@/components/main/Education";
import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-5 md:gap-10">
        <Hero />
        <Skills />
        <Projects />
        <Exprience />
        <Education />
        <About />
      </div>
    </main>
  );
}
