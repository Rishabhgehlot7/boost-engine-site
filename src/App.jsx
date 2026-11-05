import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScrollyCanvasSection } from './components/ScrollyCanvasSection';
import { ProblemSolverTerminal } from './components/ProblemSolverTerminal';
import { SolutionsShowcase } from './components/SolutionsShowcase';
import { ProblemSubmissionPortal } from './components/ProblemSubmissionPortal';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ScrollyCanvasSection />
      <ProblemSolverTerminal />
      <SolutionsShowcase />
      <ProblemSubmissionPortal />
      <Footer />
    </div>
  );
}
