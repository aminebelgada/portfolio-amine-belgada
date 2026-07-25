import { Suspense, lazy } from "react";
import Hero from "../components/Hero";
import About from "../components/About";

// Code-splitting: sections below the fold are loaded on demand to keep the
// initial bundle small and improve first paint.
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Gallery = lazy(() => import("../components/Gallery"));
const Certificates = lazy(() => import("../components/Certificates"));
const Contact = lazy(() => import("../components/Contact"));

function SectionFallback() {
  return (
    <div className="py-28 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Certificates />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  );
}
