import React from 'react';

const skills = [
  { name: 'HTML', icon: 'html.png', percent: '80%' },
  { name: 'CSS', icon: 'css.png', percent: '60%' },
  { name: 'Javascript', icon: 'js.png', percent: '40%' },
  { name: 'NodeJs', icon: 'nodejs.png', percent: '50%' },
  { name: 'ExpressJs', icon: 'express-js.png', percent: '50%' },
  { name: 'MongoDB', icon: 'mongodb.png', percent: '60%' },
  { name: 'ReactJs', icon: 'react.png', percent: '70%' },
  { name: 'Typescript', icon: 'typescript.png', percent: '60%' },
];

const SkillCard = ({ name, icon, percent }) => {
    return (
      <div className="skill-card flex flex-col items-center p-2 gap-1 rounded-lg shadow-md border border-red duration-300 bg-white p-4 transform hover:scale-105 hover:shadow-lg hover:border-0 transition-all ease-in-out "
           style={{
               borderRadius: '13px',
               background: 'linear-gradient(145deg, #E0FBE2, #E0FBE2)',
               boxShadow: '1px 1px 1px #acacac, -1px -1px 1px #ffffff',
           }}>
        <img src={icon} alt={name} className="skill-icon mb-2 w-12 h-12 object-cover" />
        <h3 className="text-xl font-medium mb-1 transition duration-300 ease-in-out hover:text-2xl hover:text-rose-700">
          {name}
        </h3>
        <div className="text-gray-700 text-center">
          <span className="text-sm">{percent}</span>
        </div>
      </div>
    );
  };

const Skills = () => {
  return (
    <>
      <style>
        {`
          .skill-card:hover {
            animation: bounce 0.5s ease-in-out;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .skill-card:hover img {
            animation: rotate 0.5s ease-in-out;
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div className="skills-container mx-6 my-6 ">
        <div className="heading flex flex-col items-center p-6 rounded-lg">
          <h1 className="text-4xl font-bold">Technical Skills</h1>
        </div>
        <div className="mt-4 p-4 rounded-lg">
          <div className='skill-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
