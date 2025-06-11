'use client';

import { useEffect } from 'react';
import Hero from '../Hero';
import AboutSection from '../AboutSection';
import ServicesSection from '../ServicesSection';
import ProjectsSection from '../ProjectsSection';
import TestimonialsSection from '../TestimonialsSection';
import ContactSection from '../ContactSection';
import CallToAction from '../CallToAction';
import ClientLayout from '../ClientLayout';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Initialize fade-in animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <ClientLayout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <CallToAction />
    </ClientLayout>
  );
};

export default HomePage;