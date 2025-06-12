import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
  description: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    title: "Engineering & Building Diagnostic Reporting",
    description:
      "Consulting Engineers and Management specialists in engineering and building diagnostics with full scope of work reports",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    link: "/#services",
  },
  {
    title: "24/7 Rapid Emergency Disaster Response",
    description:
      "Commercial and residential make safe with a focus on quick response and minimal disruption",
    image: "https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg",
    link: "/#services",
  },
  {
    title: "Complete Insurance Claim Management",
    description:
      "Comprehensive insurance claim support from assessment to completion",
    image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg",
    link: "/#services",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Slider */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
                transition: "transform 6s ease-out",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/60" />

            {/* Content */}
            <div className="container relative z-10 flex flex-col items-start justify-center h-full text-white">
              <h1
                className="max-w-3xl mb-6 font-bold leading-tight transition-transform duration-700 transform"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform:
                    index === currentSlide
                      ? "translateY(0)"
                      : "translateY(20px)",
                  transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                }}
              >
                {slide.title}
              </h1>
              <p
                className="max-w-2xl mb-8 text-lg"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform:
                    index === currentSlide
                      ? "translateY(0)"
                      : "translateY(20px)",
                  transition:
                    "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
                }}
              >
                {slide.description}
              </p>
              <a
                href={slide.link}
                className="btn btn-primary group"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform:
                    index === currentSlide
                      ? "translateY(0)"
                      : "translateY(20px)",
                  transition:
                    "opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s",
                }}
              >
                Learn More
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-accent w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 flex items-center justify-center w-10 h-10 -mt-5 text-white rounded-full bg-primary/50 hover:bg-primary/80 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 flex items-center justify-center w-10 h-10 -mt-5 text-white rounded-full bg-primary/50 hover:bg-primary/80 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default Hero;
