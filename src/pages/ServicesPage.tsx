import React, { useEffect } from 'react';
import { 
  Hammer, ShieldCheck, Truck, FileSpreadsheet, 
  Building, Shovel, Dices, Paintbrush, CheckCircle 
} from 'lucide-react';
import CallToAction from '../components/CallToAction';

interface ServiceDetailProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ id, icon, title, description, features, image }) => {
  return (
    <div id={id} className="py-16 scroll-mt-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-primary md:text-3xl">{title}</h3>
          </div>
          <p className="mb-6 text-gray">{description}</p>
          
          <h4 className="mb-4 text-xl font-semibold">Key Features:</h4>
          <ul className="mb-8 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={20} className="mr-2 text-accent flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const services: ServiceDetailProps[] = [
    {
      id: "construction",
      icon: <Hammer size={24} />,
      title: "Integrated Construction Project Management",
      description: "Our integrated construction project management service provides a single point of contact throughout the entire building process. From initial concept to final handover, we coordinate all aspects of your project to ensure efficiency, quality, and timely delivery. Our experienced project managers oversee contractors, suppliers, and regulatory compliance, keeping your project on track and within budget.",
      features: [
        "End-to-end project management from concept to completion",
        "Expert coordination of all contractors and suppliers",
        "Strict adherence to timelines and budgets",
        "Regular progress reports and transparent communication",
        "Quality assurance and compliance with building codes",
        "Risk management and problem-solving solutions"
      ],
      image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
    },
    {
      id: "insurance",
      icon: <ShieldCheck size={24} />,
      title: "Complete Insurance Claim Management",
      description: "Navigating insurance claims can be complex and time-consuming. Our complete insurance claim management service takes the burden off your shoulders. We work directly with insurance companies to ensure your claim is processed efficiently and you receive the maximum entitled benefit. Our team handles documentation, assessment, and negotiations, allowing you to focus on recovery rather than paperwork.",
      features: [
        "Direct liaison with insurance providers",
        "Comprehensive damage assessment and documentation",
        "Detailed scope of works and cost estimation",
        "Claim submission and follow-up",
        "Negotiation for fair settlement",
        "Transparent reporting throughout the process"
      ],
      image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg"
    },
    {
      id: "emergency",
      icon: <Truck size={24} />,
      title: "24/7 Rapid Emergency Disaster Response",
      description: "Disasters don't wait for business hours, and neither do we. Our 24/7 rapid emergency response team is ready to deploy at a moment's notice to secure your property and prevent further damage. Whether it's fire, flood, storm damage, or structural failure, our trained professionals arrive quickly with the equipment and expertise needed to stabilize the situation and begin immediate recovery efforts.",
      features: [
        "Available 24 hours a day, 7 days a week, 365 days a year",
        "Rapid deployment of emergency response teams",
        "Immediate property stabilization and damage mitigation",
        "Water extraction and drying services",
        "Temporary structural support and protection",
        "Coordination with emergency services and authorities"
      ],
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
    },
    {
      id: "reports",
      icon: <FileSpreadsheet size={24} />,
      title: "Expert Obligation Report Preparation",
      description: "Our expert obligation report preparation service delivers comprehensive, accurate assessments for insurance claims, legal proceedings, or property evaluations. Our qualified engineers and building consultants conduct thorough inspections to document conditions, identify issues, and recommend solutions. These detailed reports provide the evidence and expert opinion needed for informed decision-making and fair claim settlements.",
      features: [
        "Comprehensive property and structural assessments",
        "Detailed documentation of damage or defects",
        "Expert analysis of causes and contributing factors",
        "Clear scope of required repairs or remediation",
        "Cost estimates for necessary work",
        "Professional reports suitable for insurance or legal purposes"
      ],
      image: "https://images.pexels.com/photos/6615076/pexels-photo-6615076.jpeg"
    },
    {
      id: "consulting",
      icon: <Building size={24} />,
      title: "Engineering/Building Consulting",
      description: "Our engineering and building consulting services provide expert advice on all aspects of construction and property management. Whether you need structural assessments, compliance evaluations, or building diagnostics, our team of qualified engineers and consultants delivers professional insights and practical solutions. We help identify potential issues before they become problems and develop strategies to optimize building performance and safety.",
      features: [
        "Structural engineering assessments and reporting",
        "Building code compliance evaluations",
        "Defect investigation and remediation planning",
        "Pre-purchase building inspections",
        "Dilapidation reports and condition assessments",
        "Expert witness services for construction disputes"
      ],
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
    },
    {
      id: "demolition",
      icon: <Shovel size={24} />,
      title: "Demolition and Excavation",
      description: "Our demolition and excavation services combine precision, safety, and environmental responsibility. Whether partial or complete demolition, our experienced teams use specialized equipment and techniques to efficiently remove structures while minimizing disruption to surrounding properties. We manage all aspects of the process, including permits, hazardous material handling, and waste recycling, ensuring your project starts with a clean, properly prepared site.",
      features: [
        "Residential, commercial, and industrial demolition",
        "Precision partial demolition and structural modifications",
        "Safe asbestos and hazardous material removal",
        "Site clearing and preparation",
        "Excavation for foundations and basements",
        "Responsible waste management and recycling"
      ],
      image: "https://images.pexels.com/photos/5119200/pexels-photo-5119200.jpeg"
    },
    {
      id: "catastrophic",
      icon: <Dices size={24} />,
      title: "Catastrophic Event Response",
      description: "When major disasters strike, our catastrophic event response team provides the specialized expertise and resources needed for large-scale recovery. We mobilize quickly to assess damage, secure affected areas, and develop comprehensive restoration plans. Our experienced disaster management professionals coordinate with emergency services, authorities, and insurers to implement efficient recovery strategies that minimize disruption and accelerate the return to normal operations.",
      features: [
        "Rapid deployment of specialized disaster response teams",
        "Comprehensive damage assessment and documentation",
        "Large-scale property stabilization and security",
        "Coordination with government agencies and emergency services",
        "Development of phased recovery and restoration plans",
        "Resource management for complex recovery operations"
      ],
      image: "https://images.pexels.com/photos/3807317/pexels-photo-3807317.jpeg"
    },
    {
      id: "restoration",
      icon: <Paintbrush size={24} />,
      title: "Restoration Services",
      description: "Our restoration services bring damaged properties back to pre-loss condition or better. Following fire, water, storm, or other damage, our skilled teams work efficiently to repair structural elements, replace damaged materials, and restore finishes. We pay close attention to detail, ensuring all aspects of the property are properly addressed, from foundation to roof. Our goal is to deliver high-quality restoration that stands the test of time while minimizing disruption to occupants.",
      features: [
        "Fire and smoke damage restoration",
        "Water damage repair and mold remediation",
        "Structural repairs and rebuilding",
        "Interior and exterior finish restoration",
        "Contents cleaning and restoration",
        "Complete project management and quality control"
      ],
      image: "https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg"
    }
  ];

  useEffect(() => {
    document.title = 'Our Services | Samson Developments';
    
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
              Our Services
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive building solutions from initial quote to final sign-off
            </p>
          </div>
        </div>
      </section>

      {/* Services Nav */}
      <section className="sticky top-20 z-40 py-4 bg-white shadow-md">
        <div className="container">
          <div className="flex flex-wrap justify-start gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-300"
              >
                {service.title.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="section">
        <div className="container">
          <div className="space-y-12 divide-y divide-gray-200">
            {services.map((service) => (
              <ServiceDetail key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServicesPage;