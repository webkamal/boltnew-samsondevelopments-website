import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isScrolled = true, onClick }) => {
  const isActive = window.location.pathname === href;
  
  return (
    <a
      href={href}
      onClick={onClick}
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