import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo, contact } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mb-2">
                {personalInfo.availability}
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm {personalInfo.name}
              </h1>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                {personalInfo.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                {personalInfo.description}
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href={`https://${contact.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href={`https://${contact.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${contact.email}`}
                className="text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              {contact.twitter && (
                <a 
                  href={`https://${contact.twitter}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              )}
            </div>

            <div className="pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="/robel-samuel-photo.jpg" 
                  alt="Robel Samuel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;