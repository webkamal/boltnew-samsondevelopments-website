import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6 text-sm text-gray-300">
              Samson Developments delivers integrated building solutions from initial quote to final sign-off, specializing in emergency and insurance work, demolition, asbestos removal, and technical reporting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-accent transition-colors duration-300">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-accent transition-colors duration-300">Services</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-accent transition-colors duration-300">Projects</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-accent transition-colors duration-300">About Us</a></li>
              <li><a href="/news" className="text-gray-300 hover:text-accent transition-colors duration-300">News</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="/services#construction" className="text-gray-300 hover:text-accent transition-colors duration-300">Integrated Construction</a></li>
              <li><a href="/services#insurance" className="text-gray-300 hover:text-accent transition-colors duration-300">Insurance Claim Management</a></li>
              <li><a href="/services#emergency" className="text-gray-300 hover:text-accent transition-colors duration-300">Emergency Response</a></li>
              <li><a href="/services#consulting" className="text-gray-300 hover:text-accent transition-colors duration-300">Engineering & Building Consulting</a></li>
              <li><a href="/services#demolition" className="text-gray-300 hover:text-accent transition-colors duration-300">Demolition & Excavation</a></li>
              <li><a href="/services#restoration" className="text-gray-300 hover:text-accent transition-colors duration-300">Restoration Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={20} className="mr-3 text-accent flex-shrink-0" />
                <div>
                  <p className="font-bold">24/7 Emergency</p>
                  <a href="tel:1300888777" className="text-gray-300 hover:text-accent">1300 888 777</a>
                </div>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-accent flex-shrink-0" />
                <div>
                  <p className="font-bold">Email Us</p>
                  <a href="mailto:info@samsondevelopments.com.au" className="text-gray-300 hover:text-accent">info@samsondevelopments.com.au</a>
                </div>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-3 text-accent flex-shrink-0" />
                <div>
                  <p className="font-bold">Head Office</p>
                  <address className="not-italic text-gray-300">
                    123 Business Street<br />
                    Sydney, NSW 2000
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-sm text-center border-t border-gray-700">
        <div className="container">
          <p>© {new Date().getFullYear()} Samson Developments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;