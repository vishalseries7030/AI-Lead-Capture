'use client';

import Navbar from '@/components/Navbar';
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
import CustomCursor from '@/components/CustomCursor';
import FloatingActionButtons from '@/components/FloatingActionButtons';

export default function Home() {
  return (
    <>
      {/* Professional Custom Cursor */}
      <CustomCursor />
      
      {/* Navbar */}
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Particles Background */}
        <ParticlesBackground />
        
        {/* Hero Section */}
        <div id="home">
          <Hero />
        </div>
        
        {/* Stats Counter */}
        <Stats />
        
        {/* 3D Floating Cards */}
        <FloatingCards />
        
        {/* Services Section */}
        <Services />
        
        {/* Scroll Animations */}
        <div id="features">
          <ScrollAnimations />
        </div>
        
        {/* Benefits Section */}
        <Benefits />
        
        {/* Interactive Demo */}
        <div id="demo">
          <InteractiveDemo />
        </div>
        
        {/* Portfolio/Case Studies */}
        <div id="use-cases">
          <Portfolio />
        </div>
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Trust Badges */}
        <TrustBadges />
        
        {/* Pricing Plans */}
        <div id="pricing">
          <Pricing />
        </div>
        
        {/* FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>
        
        {/* Newsletter Signup */}
        <Newsletter />
        
        {/* Contact Form Section */}
        <div id="contact">
          <ContactForm />
        </div>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Action Buttons */}
        <FloatingActionButtons />
        
        {/* Floating Chatbot */}
        <Chatbot />
      </main>
    </>
  );
}
