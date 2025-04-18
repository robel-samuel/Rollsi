import { Project, Skill, Experience, Education, Contact } from './types';

export const personalInfo = {
  name: "Robel Samuel",
  title: "Software Engineer",
  description: "I build exceptional and accessible digital experiences for the web.",
  location: "Ethiopia, Addis Ababa",
  availability: "Available for freelance work"
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Table Tennis Game",
    description: "A classic Table Tennis (Ping Pong) game featuring smooth paddle movements, realistic ball physics, adjustable ball speed (3-15 units), and an intelligent computer opponent. Built with HTML5 Canvas for rendering and pure JavaScript for game logic.",
    tags: ["HTML5 Canvas", "CSS", "JavaScript", "Game Development"],
    imageUrl: "/Screenshot 2025-04-09 151757.png",
    demoUrl: "https://rollsi.github.io/Table-Tennis-Game",
    githubUrl: "https://github.com/Rollsi/Table-Tennis-Game.git"
  },
  {
    id: 2,
    title: "Modern Coffee Store",
    description: "A sleek and modern coffee store web application designed with a clean UI and smooth animations. Built using React and Tailwind CSS, it features a fully functional product page displaying various coffee items, and a dynamic cart page where users can add, remove, and manage their selections in real-time",
    tags: ["React", "Tailwind CSS", "JavaScript", "Web Animation"],
    imageUrl: "/image.png",
    demoUrl: "https://rollsi.github.io/coffeestore/",
    githubUrl: "https://github.com/Rollsi/coffeestore"
  },
  {
    id: 3,
    title: "Virtual Piano Studio",
    description: "An interactive virtual piano application built with React, featuring a modern and responsive interface. Users can play music using their computer keyboard with realistic piano sounds and smooth key animations. The application showcases React's component-based architecture for efficient UI updates and state management, combined with the Web Audio API for high-quality sound output.",
    tags: ["React", "JavaScript", "Web Audio API", "CSS3", "React Hooks"],
    imageUrl: "/Screenshot 2025-04-18 115004.png",
    demoUrl: "https://rollsi.github.io/Virtual-Piano-Studio/",
    githubUrl: "https://github.com/Rollsi/Virtual-Piano-Studio"
  }
];

export const skills: Skill[] = [
  { name: "JavaScript", icon: "code" },
  { name: "TypeScript", icon: "file-code" },
  { name: "React", icon: "component" },
  { name: "Node.js", icon: "server" },
  { name: "Python", icon: "code-2" },
  { name: "SQL", icon: "database" },
  { name: "AWS", icon: "cloud" },
  { name: "Docker", icon: "container" }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Freelance Projects",
    position: "Software Developer",
    duration: "",
    description: [
      "Developed the RS Trade platform, a multi-account trading journal, using Node.js and MongoDB, enhancing user experience and data management",
      "Designed and implemented front-end interfaces with HTML, CSS, and JavaScript, improving user engagement by 30%",
      "Collaborated with clients to gather requirements and deliver tailored software solutions on time",
      "Conducted code reviews and implemented best practices to ensure code quality and maintainability"
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Unity University",
    degree: "Bachelor of Science in Computer Science",
    duration: ""
  }
];

export const contact: Contact = {
  email: "robelsamuel438@gmail.com",
  github: "github.com/Rollsi",
  linkedin: "linkedin.com/in/robel-samuel-305bb8205",
  twitter: "x.com/Robel01888875",
  telegram: "t.me/Rollside"
};