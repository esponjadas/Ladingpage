"use client";

import { useState } from "react";
import { AppPreviewSection } from "./app-preview-section";
import { CinematicSection } from "./cinematic-section";
import { ContactModal } from "./contact-modal";
import { CtaSection } from "./cta-section";
import { FaqSection } from "./faq-section";
import { FeaturesSection } from "./features-section";
import { Footer } from "./footer";
import { HeroSection } from "./hero-section";
import { HowItWorksSection } from "./how-it-works-section";
import { InfiniteShowcaseSection } from "./infinite-showcase-section";
import { Navbar } from "./navbar";
import { ProblemSection } from "./problem-section";
import { TransformationSection } from "./transformation-section";
import { WaitlistModal } from "./waitlist-modal";
import { WhySection } from "./why-section";

export function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-obsidian text-white">
      <div className="page-noise pointer-events-none fixed inset-0 z-0 opacity-35" />
      <div className="page-vignette pointer-events-none fixed inset-0 z-0 opacity-70" />
      <div className="relative z-10">
        <Navbar
          onWaitlistClick={() => setIsWaitlistOpen(true)}
          onContactClick={() => setIsContactOpen(true)}
        />
        <HeroSection onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <HowItWorksSection />
        <ProblemSection />
        <TransformationSection />
        <FeaturesSection onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <WhySection />
        <InfiniteShowcaseSection />
        <CinematicSection />
        <AppPreviewSection />
        <FaqSection onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <CtaSection onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <Footer onContactClick={() => setIsContactOpen(true)} />
      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
