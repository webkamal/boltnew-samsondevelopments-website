import React, { useEffect } from 'react';
import { Users, Award, Target, Zap, CheckCircle } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Samson Developments';
    
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
              About Us
            </h1>
            <p className="text-xl text-white/80">
              Delivering excellence in construction and emergency repairs for over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="fade-in">
              <h2 className="mb-6 text-3xl font-bold text-primary">Our Story</h2>
              <p className="mb-4 text-gray">
                Samson Developments was founded with a simple mission: to provide reliable, high-quality building services that our clients can trust. With almost 10 years of experience in the industry, we've built a reputation for excellence in all aspects of construction, from emergency repairs to large-scale projects.
              </p>
              <p className="mb-4 text-gray">
                Our team consists of skilled professionals with extensive experience in insurance repair project management, carpentry, demolition, and remediation. We understand the challenges that property owners face when dealing with damage or construction projects, and we're committed to making the process as smooth as possible.
              </p>
              <p className="text-gray">
                Today, we continue to grow and expand our services, but our core values remain the same: quality workmanship, excellent customer service, and a commitment to delivering projects on time and within budget.
              </p>
            </div>
            <div className="fade-in">
              <img 
                src="https://images.pexels.com/photos/6615231/pexels-photo-6615231.jpeg" 
                alt="Samson Developments Team" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
            <h2 className="section-title">Mission & Values</h2>
            <p className="section-subtitle">
              Our guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="fade-in">
              <div className="p-8 bg-white rounded-lg shadow-md h-full">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="mb-4 text-gray">
                  To deliver integrated building solutions that exceed client expectations through quality workmanship, innovative approaches, and exceptional service.
                </p>
                <p className="text-gray">
                  We aim to be the trusted partner for all construction needs, from emergency repairs to large-scale projects, providing peace of mind and outstanding results for every client.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="fade-in">
              <div className="p-8 bg-white rounded-lg shadow-md h-full">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Values</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-2 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Excellence</h4>
                      <p className="text-gray">We strive for excellence in every aspect of our work, from craftsmanship to customer service.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-2 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Integrity</h4>
                      <p className="text-gray">We operate with honesty, transparency, and ethical practices in all our dealings.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-2 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Reliability</h4>
                      <p className="text-gray">We deliver on our promises, meeting deadlines and staying within budget.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-2 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Innovation</h4>
                      <p className="text-gray">We embrace new technologies and methods to improve our services and solutions.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Meet the experts behind Samson Developments
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="fade-in">
              <div className="overflow-hidden text-center bg-white rounded-lg shadow-md">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                    alt="John Smith" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-primary">John Smith</h3>
                  <p className="mb-4 text-sm text-gray">Founder & Managing Director</p>
                  <p className="text-sm text-gray">
                    With over 15 years in construction, John leads our team with expertise in project management and emergency response.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="fade-in">
              <div className="overflow-hidden text-center bg-white rounded-lg shadow-md">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg" 
                    alt="Sarah Johnson" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-primary">Sarah Johnson</h3>
                  <p className="mb-4 text-sm text-gray">Head of Operations</p>
                  <p className="text-sm text-gray">
                    Sarah ensures our projects run smoothly, overseeing scheduling, resource allocation, and quality control.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="fade-in">
              <div className="overflow-hidden text-center bg-white rounded-lg shadow-md">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg" 
                    alt="Michael Zhang" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-primary">Michael Zhang</h3>
                  <p className="mb-4 text-sm text-gray">Lead Engineer</p>
                  <p className="text-sm text-gray">
                    Michael brings technical expertise to our projects, specializing in structural assessments and complex engineering solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="fade-in">
              <div className="overflow-hidden text-center bg-white rounded-lg shadow-md">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                    alt="Emma Thompson" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-primary">Emma Thompson</h3>
                  <p className="mb-4 text-sm text-gray">Client Relations Manager</p>
                  <p className="text-sm text-gray">
                    Emma ensures clear communication between our team and clients, managing expectations and delivering exceptional service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
            <h2 className="section-title">Our Certifications</h2>
            <p className="section-subtitle">
              We maintain the highest standards through professional certifications and partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Certification 1 */}
            <div className="fade-in">
              <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md h-full">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary">
                  <Award size={32} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">Licensed Builders</h3>
                <p className="text-gray">
                  Fully licensed and insured building professionals meeting all regulatory requirements.
                </p>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="fade-in">
              <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md h-full">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary">
                  <Award size={32} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">Certified Asbestos Removalists</h3>
                <p className="text-gray">
                  Specialized training and certification in safe asbestos removal and management.
                </p>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="fade-in">
              <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md h-full">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary">
                  <Award size={32} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">Safety Management System</h3>
                <p className="text-gray">
                  Comprehensive safety protocols meeting ISO standards for occupational health and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default AboutPage;