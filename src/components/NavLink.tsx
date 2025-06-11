import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isScrolled = true, onClick }) => {
  const currentHash = window.location.hash || '#home';
  const isActive = currentHash === href;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = href;
    
    // Scroll to top smoothly
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
    
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`
        relative font-heading font-medium text-sm transition-colors duration-300
        ${isActive 
          ? 'text-accent' 
          : isScrolled 
            ? 'text-primary hover:text-accent' 
            : 'text-white hover:text-accent'
        }
        after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent 
        after:left-0 after:bottom-[-4px] after:transition-all after:duration-300
        ${isActive ? 'after:w-full' : 'hover:after:w-full'}
      `}
    >
      {label}
    </a>
  );
};

export default NavLink;