import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  <div className="mb-1 text-indigo-600 dark:text-indigo-400 font-medium">
                    {exp.duration}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="mr-2 text-indigo-600 dark:text-indigo-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-12">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  <div className="mb-1 text-indigo-600 dark:text-indigo-400 font-medium">
                    {edu.duration}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;