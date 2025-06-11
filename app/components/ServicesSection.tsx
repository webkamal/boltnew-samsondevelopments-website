'use client';

import React, { useEffect, useRef } from 'react';
import { 
  Hammer, ShieldCheck, Truck, FileSpreadsheet, 
  Building, Shovel, Dices, Paintbrush 
} from 'lucide-react';
import Link from 'next/link';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-center text-primary">{title}</h3>
      <p className="mb-4 text-center text-gray">{description}</p>
      <Link 
        href={link} 
        className="mt-auto text-accent font-medium hover:underline self-center"
      >
        Learn More
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
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

  const services: ServiceProps[] = [
    {
      icon: <Hammer size={32} />,
      title: "Integrated Construction Project Management",
      description: "Comprehensive construction project management from start to finish, providing a single point of contact.",
      link: "/services#construction"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Complete Insurance Claim Management",
      description: "Professional insurance claim management services that help you navigate the claim process smoothly.",
      link: "/services#insurance"
    },
    {
      icon: <Truck size={32} />,
      title: "24/7 Rapid Emergency Disaster Response",
      description: "Quick response teams available 24/7 for emergency disaster situations requiring immediate action.",
      link: "/services#emergency"
    },
    {
      icon: <FileSpreadsheet size={32} />,
      title: "Expert Obligation Report Preparation",
      description: "Detailed obligation reports prepared by our team of experts to provide accurate assessments and scope of work.",
      link: "/services#reports"
    },
    {
      icon: <Building size={32} />,
      title: "Engineering/Building Consulting",
      description: "Expert engineering and building consulting services from our team of qualified consultants and engineers.",
      link: "/services#consulting"
    },
    {
      icon: <Shovel size={32} />,
      title: "Demolition and Excavation",
      description: "Professional demolition and excavation services with a focus on safety and environmental responsibility.",
      link: "/services#demolition"
    },
    {
      icon: <Dices size={32} />,
      title: "Catastrophic Event Response",
      description: "Specialized response teams for catastrophic events, prepared to handle large-scale disaster recovery.",
      link: "/services#catastrophic"
    },
    {
      icon: <Paintbrush size={32} />,
      title: "Restoration Services",
      description: "Comprehensive restoration services to repair and rebuild after damage from fire, flood, or other disasters.",
      link: "/services#restoration"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title fade-in">OUR SERVICES</h2>
          <p className="section-subtitle fade-in">
            We provide end-to-end integrated building solutions from the initial quote to final sign-off
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="fade-in">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;