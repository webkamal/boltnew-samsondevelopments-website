'use client';

import { useEffect, useState } from 'react';
import { Calendar, MapPin, ArrowRight, Filter } from 'lucide-react';
import CallToAction from '../CallToAction';
import ClientLayout from '../ClientLayout';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  image: string;
  description: string;
  details: string;
  value: string;
  duration: string;
  client: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sydney CBD Office Tower Restoration",
    category: "Restoration",
    location: "Sydney CBD, NSW",
    date: "2024",
    image: "https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg",
    description: "Complete restoration of fire-damaged 15-story office building following major electrical fire.",
    details: "This complex project involved comprehensive fire damage assessment, structural repairs, complete electrical system replacement, and interior restoration. Our team coordinated with multiple specialists to restore the building to modern standards while preserving its architectural heritage.",
    value: "$2.8M",
    duration: "8 months",
    client: "Commercial Property Group"
  },
  {
    id: 2,
    title: "Residential Complex Storm Damage Repair",
    category: "Insurance",
    location: "Parramatta, NSW",
    date: "2024",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    description: "Major storm damage repair for 120-unit residential complex including roof replacement and structural repairs.",
    details: "Following severe storm damage, we managed the complete insurance claim process and restoration of this large residential complex. Work included emergency make-safe, roof replacement, facade repairs, and interior restoration across multiple buildings.",
    value: "$1.6M",
    duration: "6 months",
    client: "Strata Management Solutions"
  },
  {
    id: 3,
    title: "Industrial Facility Emergency Response",
    category: "Emergency",
    location: "Blacktown, NSW",
    date: "2023",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    description: "24-hour emergency response and structural stabilization following equipment failure and partial collapse.",
    details: "Rapid deployment of our emergency response team to secure the facility and prevent further damage. Included temporary structural support, debris removal, and coordination with emergency services to ensure worker safety.",
    value: "$850K",
    duration: "3 months",
    client: "Manufacturing Industries Ltd"
  },
  {
    id: 4,
    title: "Westfield Shopping Centre Renovation",
    category: "Construction",
    location: "Bondi Junction, NSW",
    date: "2023",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    description: "Complete renovation and modernization of major retail shopping complex while maintaining operations.",
    details: "Phased renovation project that modernized the entire shopping center including new flooring, lighting, HVAC systems, and facade improvements. Work was carefully scheduled to minimize disruption to retailers and customers.",
    value: "$4.2M",
    duration: "12 months",
    client: "Westfield Corporation"
  },
  {
    id: 5,
    title: "Hospital Asbestos Removal Project",
    category: "Demolition",
    location: "Liverpool, NSW",
    date: "2023",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    description: "Safe removal of asbestos materials from operational healthcare facility with zero contamination.",
    details: "Complex asbestos removal project in an operational hospital requiring strict contamination controls, specialized equipment, and coordination with medical staff. All work completed with zero incidents and full regulatory compliance.",
    value: "$1.1M",
    duration: "4 months",
    client: "NSW Health"
  },
  {
    id: 6,
    title: "Commercial Tower Structural Assessment",
    category: "Consulting",
    location: "North Sydney, NSW",
    date: "2023",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    description: "Comprehensive structural assessment and remediation planning for 25-story commercial tower.",
    details: "Detailed engineering assessment of structural integrity following concerns about foundation settlement. Included comprehensive testing, analysis, and development of remediation strategies to ensure building safety.",
    value: "$320K",
    duration: "2 months",
    client: "Tower Management Group"
  },
  {
    id: 7,
    title: "Heritage Building Restoration",
    category: "Restoration",
    location: "The Rocks, NSW",
    date: "2022",
    image: "https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg",
    description: "Careful restoration of 19th-century heritage building maintaining historical authenticity.",
    details: "Specialized heritage restoration requiring careful preservation of original materials and architectural features. Work included stone restoration, traditional timber repairs, and modern safety upgrades while maintaining heritage compliance.",
    value: "$1.9M",
    duration: "10 months",
    client: "Heritage Properties Trust"
  },
  {
    id: 8,
    title: "Flood Damage Restoration - Residential",
    category: "Emergency",
    location: "Windsor, NSW",
    date: "2022",
    image: "https://images.pexels.com/photos/3807317/pexels-photo-3807317.jpeg",
    description: "Comprehensive flood damage restoration for 45 residential properties following major flooding event.",
    details: "Large-scale flood recovery project involving water extraction, structural drying, mold remediation, and complete interior restoration. Coordinated with insurance companies and local authorities to expedite recovery for affected families.",
    value: "$2.3M",
    duration: "7 months",
    client: "Multiple Insurance Providers"
  }
];

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
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

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  return (
    <ClientLayout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Projects
            </h1>
            <p className="text-xl text-white/80">
              Showcasing our expertise through successful project deliveries across various sectors
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-light">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter size={20} className="mr-2 text-primary" />
              <span className="font-medium text-primary">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                    filter === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div key={project.id} className="fade-in">
                <div className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-dark rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-primary">{project.title}</h3>
                    <div className="flex items-center mb-2 text-sm text-gray">
                      <MapPin size={16} className="mr-1" />
                      <span className="mr-4">{project.location}</span>
                      <Calendar size={16} className="mr-1" />
                      <span>{project.date}</span>
                    </div>
                    <p className="mb-4 text-gray">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="font-medium text-primary">Value:</span>
                        <p className="text-gray">{project.value}</p>
                      </div>
                      <div>
                        <span className="font-medium text-primary">Duration:</span>
                        <p className="text-gray">{project.duration}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-xs font-medium text-primary">Client:</span>
                      <p className="text-sm text-gray">{project.client}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title text-white">Project Statistics</h2>
            <p className="section-subtitle text-gray-300">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$50M+</div>
              <p className="text-gray-300">Total Project Value</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-gray-300">Emergency Response</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </ClientLayout>
  );
};

export default ProjectsPage;