import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
        <CircleDollarSign size={24} />
      </div>
      <div className="ml-2">
        <span className="text-xs font-bold text-accent">SAMSON</span>
        <span className="block text-sm font-bold tracking-wider text-primary">DEVELOPMENTS</span>
      </div>
    </a>
  );
};

export default Logo;