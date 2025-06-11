import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import NavLink from './NavLink';

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
        <Logo isScrolled={isScrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink href="#home" label="HOME" isScrolled={isScrolled} />
          <NavLink href="#services" label="SERVICES" isScrolled={isScrolled} />
          <NavLink href="#projects" label="PROJECTS" isScrolled={isScrolled} />
          <NavLink href="#about" label="ABOUT US" isScrolled={isScrolled} />
          <NavLink href="#news" label="NEWS" isScrolled={isScrolled} />
          <NavLink href="#contact" label="CONTACT" isScrolled={isScrolled} />
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
              <NavLink href="#home" label="HOME" onClick={() => setIsOpen(false)} />
              <NavLink href="#services" label="SERVICES" onClick={() => setIsOpen(false)} />
              <NavLink href="#projects" label="PROJECTS" onClick={() => setIsOpen(false)} />
              <NavLink href="#about" label="ABOUT US" onClick={() => setIsOpen(false)} />
              <NavLink href="#news" label="NEWS" onClick={() => setIsOpen(false)} />
              <NavLink href="#contact" label="CONTACT" onClick={() => setIsOpen(false)} />
              
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