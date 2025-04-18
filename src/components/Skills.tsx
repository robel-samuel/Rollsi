import React from 'react';
import { Code, Code2, Component, Server, Database, Cloud, Container } from 'lucide-react';
import { skills } from '../data';

const Skills: React.FC = () => {
  // Map skill names to Lucide icons
  const getIconForSkill = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />;
      case 'file-code':
        return <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />;
      case 'component':
        return <Component className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />;
      case 'server':
        return <Server className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />;
      case 'database':
        return <Database className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />;
      case 'cloud':
        return <Cloud className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />;
      case 'container':
        return <Container className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks in my career.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {getIconForSkill(skill.icon)}
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;