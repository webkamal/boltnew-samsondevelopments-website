import React, { useEffect } from 'react';
import { CheckCircle, Phone, Mail, ArrowLeft } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Thank You | Samson Developments';
    
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent">
                <CheckCircle size={40} className="text-primary" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Thank You!
            </h1>
            <p className="text-xl text-white/80">
              Your message has been sent successfully. We'll get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="section-title">What Happens Next?</h2>
              <p className="section-subtitle">
                Our team will review your message and respond within 24 hours during business days.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Emergency Contact */}
              <div className="fade-in">
                <div className="p-8 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Phone size={24} className="mr-3 text-red-600" />
                    <h3 className="text-xl font-bold text-red-800">Need Immediate Help?</h3>
                  </div>
                  <p className="mb-4 text-red-700">
                    If this is an emergency requiring immediate attention, please call our 24/7 emergency line:
                  </p>
                  <a 
                    href="tel:1300888777" 
                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300"
                  >
                    <Phone size={18} className="mr-2" />
                    Call 1300 888 777
                  </a>
                </div>
              </div>

              {/* General Contact */}
              <div className="fade-in">
                <div className="p-8 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Mail size={24} className="mr-3 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-800">General Inquiries</h3>
                  </div>
                  <p className="mb-4 text-blue-700">
                    For non-urgent matters, you can also reach us during business hours:
                  </p>
                  <div className="space-y-2">
                    <p className="text-blue-700">
                      <strong>Phone:</strong> <a href="tel:0291234567" className="hover:underline">02 9123 4567</a>
                    </p>
                    <p className="text-blue-700">
                      <strong>Email:</strong> <a href="mailto:info@samsondevelopments.com.au" className="hover:underline">info@samsondevelopments.com.au</a>
                    </p>
                    <p className="text-blue-700">
                      <strong>Hours:</strong> Monday to Friday, 8am - 5pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 text-center fade-in">
              <a 
                href="#home" 
                className="inline-flex items-center btn btn-primary group"
              >
                <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              While you wait, learn more about how we can help with your building needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="fade-in">
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <h3 className="mb-2 text-lg font-bold text-primary">24/7 Emergency Response</h3>
                <p className="text-gray">Rapid response for urgent building emergencies</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <h3 className="mb-2 text-lg font-bold text-primary">Insurance Claims</h3>
                <p className="text-gray">Complete management of insurance claim processes</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <h3 className="mb-2 text-lg font-bold text-primary">Construction Management</h3>
                <p className="text-gray">End-to-end project management solutions</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center fade-in">
            <a href="#services" className="btn btn-outline">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;