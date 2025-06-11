'use client';

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/samsondevelopments-logo-white copy copy.jpg" 
                  alt="Samson Developments" 
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
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
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors duration-300">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors duration-300">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-accent transition-colors duration-300">Projects</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors duration-300">About Us</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-accent transition-colors duration-300">News</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors duration-300">Integrated Construction</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors duration-300">Insurance Claim Management</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors duration-300">Emergency Response</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors duration-300">Engineering & Building Consulting</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors duration-300">Demolition & Excavation</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors duration-300">Restoration Services</Link></li>
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
                    40 Shaftesbury Road<br />
                    Burwood, NSW 2134
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