import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Building Restoration",
    category: "Restoration",
    image: "https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg",
    description: "Complete restoration of fire-damaged office building in Sydney CBD"
  },
  {
    id: 2,
    title: "Residential Insurance Repair",
    category: "Insurance",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    description: "Major storm damage repair for multi-family residential complex"
  },
  {
    id: 3,
    title: "Emergency Response - Factory",
    category: "Emergency",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    description: "24-hour emergency response and stabilization after structural failure"
  },
  {
    id: 4,
    title: "Shopping Centre Renovation",
    category: "Construction",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    description: "Complete renovation and modernization of retail shopping complex"
  },
  {
    id: 5,
    title: "Asbestos Removal - Hospital",
    category: "Demolition",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    description: "Safe removal of asbestos materials from healthcare facility"
  },
  {
    id: 6,
    title: "Technical Building Assessment",
    category: "Consulting",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    description: "Comprehensive structural assessment and reporting for commercial tower"
  }
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

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

  const handleViewAllClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#projects';
    
    // Scroll to top smoothly
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
  };

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  return (
    <section ref={sectionRef} id="projects" className="section bg-light">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title fade-in">FEATURED PROJECTS</h2>
          <p className="section-subtitle fade-in">
            Browse through our portfolio of recent construction and restoration projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 fade-in">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                filter === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="fade-in">
              <div className="project-card group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="project-overlay">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-dark rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#projects" onClick={handleViewAllClick} className="btn btn-primary group">
            View All Projects
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;