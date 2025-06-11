'use client';

import React, { useEffect, useRef } from 'react';
import { Award, Clock, Users, Shield } from 'lucide-react';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach((el) => observer.observe(el));

    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section bg-light">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title fade-in">WHO WE ARE</h2>
          <p className="section-subtitle fade-in">
            With almost 10 years of extensive insurance repair project management, carpentry and demolition experience including 
            mold, renovation, make safe, remedial and rectification, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="fade-in">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md h-full hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary">
                <Award size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold">10+ Years Experience</h3>
              <p className="text-gray">
                Over a decade of delivering excellence in construction and emergency repairs.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="fade-in">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md h-full hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary">
                <Clock size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold">24/7 Emergency Response</h3>
              <p className="text-gray">
                Round-the-clock availability for all your emergency construction needs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="fade-in">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md h-full hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary">
                <Users size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Expert Team</h3>
              <p className="text-gray">
                Highly skilled professionals with specialized training in various construction disciplines.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="fade-in">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md h-full hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary">
                <Shield size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Quality Guaranteed</h3>
              <p className="text-gray">
                All our work meets the highest Australian Standards and comes with full warranty.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/about" className="btn btn-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;