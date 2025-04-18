import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-5 w-5 text-indigo-400 mr-2" />
            <span className="text-lg font-semibold">Robel Samuel</span>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>© {currentYear} All rights reserved.</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and React
            </span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;