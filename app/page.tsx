'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Stats from '@/components/Stats';
import FloatingCards from '@/components/FloatingCards';
import ScrollAnimations from '@/components/ScrollAnimations';
import InteractiveDemo from '@/components/InteractiveDemo';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ParticlesBackground from '@/components/ParticlesBackground';
import CursorTrail from '@/components/CursorTrail';
import FloatingActionButtons from '@/components/FloatingActionButtons';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Particles Background */}
      <ParticlesBackground />
      
      {/* Interactive Cursor Trail */}
      <CursorTrail />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Counter */}
      <Stats />
      
      {/* 3D Floating Cards */}
      <FloatingCards />
      
      {/* Services Section */}
      <Services />
      
      {/* Scroll Animations */}
      <ScrollAnimations />
      
      {/* Benefits Section */}
      <Benefits />
      
      {/* Interactive Demo */}
      <InteractiveDemo />
      
      {/* Portfolio/Case Studies */}
      <Portfolio />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Trust Badges */}
      <TrustBadges />
      
      {/* Pricing Plans */}
      <Pricing />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Newsletter Signup */}
      <Newsletter />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingActionButtons />
      
      {/* Floating Chatbot */}
      <Chatbot />
    </main>
  );
}
