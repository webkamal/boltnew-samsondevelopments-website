'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/samsondevelopments-logo-white copy copy.jpg" 
            alt="Samson Developments" 
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`relative font-heading font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            HOME
          </Link>
          <Link 
            href="/services" 
            className={`relative font-heading font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            SERVICES
          </Link>
          <Link 
            href="/projects" 
            className={`relative font-heading font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            PROJECTS
          </Link>
          <Link 
            href="/about" 
            className={`relative font-heading font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            ABOUT US
          </Link>
          <Link 
            href="/news" 
            className={`relative font-heading font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            NEWS
          </Link>
          <Link 
            href="/contact" 
            className={`relative font-heading font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a 
            href="tel:1300888777" 
            className="btn btn-primary flex items-center"
          >
            <Phone size={18} className="mr-2" />
            24/7 EMERGENCY
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-primary hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/services" 
                className="text-primary hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </Link>
              <Link 
                href="/projects" 
                className="text-primary hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>
              <Link 
                href="/about" 
                className="text-primary hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                ABOUT US
              </Link>
              <Link 
                href="/news" 
                className="text-primary hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                NEWS
              </Link>
              <Link 
                href="/contact" 
                className="text-primary hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              
              <a 
                href="tel:1300888777" 
                className="btn btn-primary justify-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} className="mr-2" />
                24/7 EMERGENCY
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;