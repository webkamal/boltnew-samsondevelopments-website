import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
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
    <section ref={sectionRef} id="contact" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title fade-in">CONTACT US</h2>
          <p className="section-subtitle fade-in">
            We're here to answer your questions and provide the support you need
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="bg-primary text-white p-8 rounded-lg shadow-md h-full">
              <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <Phone size={24} className="mr-4 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 font-bold">Phone</h4>
                    <p className="mb-1">General Inquiries: <a href="tel:0291234567" className="hover:text-accent transition-colors">02 9123 4567</a></p>
                    <p>24/7 Emergency: <a href="tel:1300888777" className="hover:text-accent transition-colors">1300 888 777</a></p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail size={24} className="mr-4 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 font-bold">Email</h4>
                    <p className="mb-1">Info: <a href="mailto:info@samsondevelopments.com.au" className="hover:text-accent transition-colors">info@samsondevelopments.com.au</a></p>
                    <p>Support: <a href="mailto:support@samsondevelopments.com.au" className="hover:text-accent transition-colors">support@samsondevelopments.com.au</a></p>
                  </div>
                </div>
                
                <div className="flex">
                  <MapPin size={24} className="mr-4 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 font-bold">Office Location</h4>
                    <address className="not-italic">
                      123 Business Street<br />
                      Sydney, NSW 2000<br />
                      Australia
                    </address>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock size={24} className="mr-4 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 font-bold">Business Hours</h4>
                    <p className="mb-1">Monday to Friday: 8am - 5pm</p>
                    <p>Emergency Services: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Phone Number"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a Service</option>
                  <option value="construction">Construction Project Management</option>
                  <option value="insurance">Insurance Claim Management</option>
                  <option value="emergency">Emergency Response</option>
                  <option value="consulting">Engineering & Building Consulting</option>
                  <option value="demolition">Demolition & Excavation</option>
                  <option value="restoration">Restoration Services</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;