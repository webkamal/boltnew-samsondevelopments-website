import React, { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Property Manager",
    company: "Strata Solutions",
    text: "Samson Developments provided exceptional service following a major storm event at our complex. Their 24/7 emergency response team was onsite within hours, and their comprehensive approach to repairs minimized disruption to residents. Highly recommended!"
  },
  {
    id: 2,
    name: "Michael Zhang",
    role: "Claims Manager",
    company: "Insurance Partners",
    text: "We've worked with Samson on numerous insurance claims, and their attention to detail and documentation is outstanding. Their team handles the entire process professionally, making our job easier and improving outcomes for our clients."
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Building Owner",
    company: "Thompson Properties",
    text: "After a significant fire damaged our commercial building, Samson Developments managed the entire restoration process. Their team coordinated everything from engineering assessments to construction, delivering the project on time and within budget."
  },
  {
    id: 4,
    name: "Jennifer Williams",
    role: "Facilities Director",
    company: "Retail Group Australia",
    text: "The demolition and reconstruction project undertaken by Samson at our shopping center was handled with remarkable professionalism. They worked around our business hours to minimize impact on retailers and customers."
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const visibleTestimonials = 2; // Number of testimonials visible at once

  const nextTestimonial = () => {
    setActiveIndex((prev) => 
      prev === testimonials.length - visibleTestimonials ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - visibleTestimonials : prev - 1
    );
  };

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
    <section ref={sectionRef} id="testimonials" className="section bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title text-white fade-in">CLIENT TESTIMONIALS</h2>
          <p className="section-subtitle text-gray-300 fade-in">
            Don't just take our word for it - see what our clients have to say
          </p>
        </div>

        <div className="relative fade-in">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials
              .slice(activeIndex, activeIndex + visibleTestimonials)
              .map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card text-dark">
                  <Quote size={40} className="mb-4 text-accent opacity-30" />
                  <p className="mb-6 italic text-gray">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        testimonial.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-gray">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;