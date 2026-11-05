import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScrollyCanvasSection } from './components/ScrollyCanvasSection';
import { ProblemSolverTerminal } from './components/ProblemSolverTerminal';
import { SolutionsShowcase } from './components/SolutionsShowcase';
import { ProblemSubmissionPortal } from './components/ProblemSubmissionPortal';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      {/* Top Glass Navbar */}
      <Navbar />

      {/* Hero Section with 60 FPS Particle Canvas */}
      <HeroSection />

      {/* Apple-style Scrollytelling Canvas Frame Scrubbing Section */}
      <div id="how-it-works">
        <ScrollyCanvasSection />
      </div>

      {/* Interactive Problem Solver Terminal */}
      <ProblemSolverTerminal />

      {/* Solutions & Thaaro Hisab Showcase */}
      <SolutionsShowcase />

      {/* Direct Problem Submission Portal (Firebase Firestore) */}
      <ProblemSubmissionPortal />

      {/* Modern Cybernetic Footer */}
      <Footer />
    </div>
  );
}

export default App;

