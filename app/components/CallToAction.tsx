'use client';

import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-8 text-center lg:mb-0 lg:text-left lg:w-2/3">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Need Emergency Building Services?
            </h2>
            <p className="text-lg text-white/80">
              Our 24/7 emergency response team is ready to assist you with any urgent building needs.
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:1300888777" 
              className="btn bg-white text-primary hover:bg-white/90"
            >
              <Phone size={18} className="mr-2" />
              Call 1300 888 777
            </a>
            <Link 
              href="/contact" 
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary group"
            >
              Contact Us 
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;