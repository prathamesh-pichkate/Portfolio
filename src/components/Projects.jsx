import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; //use the useNavigate Function to navigate from one page to another
import "./Projects.css"

const projects = [
  {
    title: 'DSA Problems',
    description: 'All my solved Data Structure problem are here from basic to advance.',
    imgSrc: 'Dataa.png',
    projectsLink: '/dsa',
    githubLink: 'https://github.com/yourgithub/dsa'
  },
  {
    title: 'Frontend Projects',
    description: 'Explore all my various FrontEnd Projects with there source code.',
    imgSrc: 'frontendp.png',
    projectsLink: '/frontendprojects',
    githubLink: 'https://github.com/yourgithub/frontend'
  },
  {
    title: 'Full Stack Projects',
    description: 'Explore all my various Full Stack Projects with there source code.',
    imgSrc: 'frontendp.png',
    projectsLink: '/fullstackprojects',
    githubLink: 'https://github.com/yourgithub/fullstack'
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-right');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (cardsRef.current) {
        cardsRef.current.forEach((card) => {
          if (card) {
            observer.unobserve(card);
          }
        });
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-12 mx-[2rem]">
      <div className="flex flex-col items-center mx-auto">
        <h1 className="text-4xl font-bold text-zinc-700">My Recent Projects</h1>
        {/* <p className="mt-5 text-orange-300">My Recent Work Experience From Front-End to Full Stack Projects.</p> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 opacity-0 hover:border border-gray-600"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="absolute inset-0 w-full h-full to-bg-black-8 bg-gradient-to-t from-black/10 via-black/5"></div>
            <img src={project.imgSrc} alt={`${project.title} Thumbnail`} className="w-full h-56 object-cover p-2 rounded-2xl cover" />
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm mb-2 text-center">{project.description}</p>
              <div className="flex justify-center items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate(project.projectsLink)}
                  className="text-white bg-blue-200 hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
