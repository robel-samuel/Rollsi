import React from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin, MessageCircle } from 'lucide-react';
import { contact, personalInfo } from '../data';

const Contact: React.FC = () => {
  // Helper function to format URLs correctly
  const formatUrl = (url: string) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`;
  };

  // Handle email click to open Gmail
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`;
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect! 👋
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently available for freelance work. Feel free to reach out! ✨
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-2 text-center">
                <MapPin className="h-6 w-6 text-indigo-500" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  📍 {personalInfo.location}
                </span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-6 w-6 text-indigo-500" />
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
                  onClick={handleEmailClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  ✉️ {contact.email}
                </a>
              </div>

              <div className="flex items-center justify-center space-x-8 mt-8">
                <a 
                  href={formatUrl(contact.github)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                  <span>💻 GitHub</span>
                </a>
                <a 
                  href={formatUrl(contact.linkedin)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                  <span>💼 LinkedIn</span>
                </a>
                {contact.twitter && (
                  <a 
                    href={formatUrl(contact.twitter)}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                    <span>🐦 Twitter</span>
                  </a>
                )}
                {contact.telegram && (
                  <a 
                    href={formatUrl(contact.telegram)}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Telegram"
                  >
                    <MessageCircle size={24} />
                    <span>💬 Telegram</span>
                  </a>
                )}
              </div>

              <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
                  onClick={handleEmailClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 text-lg transform hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  <Mail className="h-5 w-5" />
                  Send Me a Message
                </a>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Looking forward to hearing from you! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;