import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Samson Developments';
    
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
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="text-xl text-white/80">
              Get in touch with our team for inquiries, quotes, or emergency assistance
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 bg-accent">
        <div className="container">
          <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:text-left md:space-y-0">
            <div>
              <h2 className="text-2xl font-bold text-primary">24/7 Emergency Response</h2>
              <p className="text-dark">Need immediate assistance? Our emergency team is available around the clock.</p>
            </div>
            <a 
              href="tel:1300888777" 
              className="btn bg-primary text-white hover:bg-primary/90 inline-flex items-center"
            >
              <Phone size={18} className="mr-2" />
              Call 1300 888 777
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in">
            <h2 className="section-title">Our Location</h2>
            <p className="section-subtitle">
              Visit our office or send us a mail to the following address
            </p>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden fade-in">
            {/* This would be replaced with an actual map component in a real implementation */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray text-lg">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
          
          <div className="mt-8 text-center fade-in">
            <address className="not-italic text-gray">
              <strong>Samson Developments</strong><br />
              123 Business Street<br />
              Sydney, NSW 2000<br />
              Australia
            </address>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Business Hours */}
            <div className="fade-in">
              <div className="p-6 bg-white rounded-lg shadow-md h-full">
                <div className="flex items-center mb-4">
                  <Clock size={24} className="mr-3 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Business Hours</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                  <li className="pt-2 mt-2 border-t border-gray-200">
                    <span className="font-bold">Emergency Services:</span>
                    <span className="block mt-1">24/7 Availability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="fade-in">
              <div className="p-6 bg-white rounded-lg shadow-md h-full">
                <div className="flex items-center mb-4">
                  <Phone size={24} className="mr-3 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Contact Methods</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <span className="block font-bold">General Inquiries:</span>
                    <a href="tel:0291234567" className="text-primary hover:text-accent transition-colors">02 9123 4567</a>
                  </li>
                  <li>
                    <span className="block font-bold">Emergency Line:</span>
                    <a href="tel:1300888777" className="text-primary hover:text-accent transition-colors">1300 888 777</a>
                  </li>
                  <li>
                    <span className="block font-bold">Email:</span>
                    <a href="mailto:info@samsondevelopments.com.au" className="text-primary hover:text-accent transition-colors">info@samsondevelopments.com.au</a>
                  </li>
                  <li>
                    <span className="block font-bold">Fax:</span>
                    <span>02 9123 4568</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Areas */}
            <div className="fade-in">
              <div className="p-6 bg-white rounded-lg shadow-md h-full">
                <div className="flex items-center mb-4">
                  <MapPin size={24} className="mr-3 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Service Areas</h3>
                </div>
                <p className="mb-4">We provide services throughout the Greater Sydney area and surrounding regions, including:</p>
                <ul className="grid grid-cols-2 gap-2">
                  <li>Sydney CBD</li>
                  <li>North Shore</li>
                  <li>Eastern Suburbs</li>
                  <li>Inner West</li>
                  <li>Western Sydney</li>
                  <li>Northern Beaches</li>
                  <li>Sutherland Shire</li>
                  <li>Central Coast</li>
                </ul>
                <p className="mt-4">For projects outside these areas, please contact us to discuss your requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;