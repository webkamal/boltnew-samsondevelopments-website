import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#home';
    
    // Scroll to top smoothly
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
  };

  return (
    <a href="#home" onClick={handleClick} className="flex items-center">
      <img 
        src="/samsondevelopments-logo-white copy copy.jpg" 
        alt="Samson Developments" 
        className="h-12 w-auto"
      />
    </a>
  );
};

export default Logo;