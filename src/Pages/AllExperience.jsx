import React from 'react';

const experiences = [
  {
    company: "Musitech",
    logo: "musiTech.jpg",
    role: "Freelance Full Stack Web Developer",
    dateOfJoining: "01 March, 2024",
    dateOfEnding: "Present",
    work: [
      "Collaborating with the team of a new startup, focusing on Front End Development.",
      "Working as a freelancer, contributing to the development process and assisting the team."
    ]
},
{
    company: "J.P Morgan",
    logo: "jpmorgan.png",
    role: "Software Developer Virtual Internship",
    dateOfJoining: "01 June, 2024",
    dateOfEnding: "26 June, 2024",
    work: [
      "Set up a local dev environment by downloading the necessary files, tools, and dependencies.",
      "Fixed broken files in the repository to make the web application output correctly.",
      "Used JPMorgan Chase’s open-source library, Perspective, to generate a live graph displaying a data feed in a clear and visually appealing way for traders to monitor."
    ]
  },
  {
    company: "Bharat Intern",
    logo: "bharat_intern_logo.jpeg",
    role: "Full Stack Web Developer Intern",
    dateOfJoining: "10 May, 2024",
    dateOfEnding: "10 June, 2024",
    work: [
      "Set up a local dev environment by downloading the necessary files, tools, and dependencies.",
      "Fixed broken files in the repository to make the web application output correctly.",
      "Used JPMorgan Chase’s open-source library, Perspective, to generate a live graph displaying a data feed in a clear and visually appealing way for traders to monitor."
    ]
  },
  // Add more experience objects here as needed
];

function AllExperience() {
  return (
    <div className='my-6'>
      <h1 className="text-center text-4xl  mt-4 my-4">All Experience</h1>
      
      <div className="mx-4 flex justify-center items-center min-h-screen-minus-nav">
        <div className="mx-2 my-4 my-2 max-w-4xl">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg flex-col items-center mb-6">
              <div className="px-4 py-5 sm:px-6 flex flex-col items-center">
                <img src={experience.logo} alt={experience.company} className="mb-4 w-24 h-24 object-contain" />
                <h3 className="text-lg leading- font-medium text-gray-900 text-center">
                  {experience.company.split(' ').map((word, index) => (
                    <React.Fragment key={index}>
                      {word +" "}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">
                  {experience.role}
                </p>
              </div>
              <div className="border-t border-gray-200 w-full">
                <dl>
                  <div className="bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-8 date-section">
                    <dt className="text-sm font-medium text-gray-500">
                      Date of Joining
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {experience.dateOfJoining}
                    </dd>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-8 date-section">
                    <dt className="text-sm font-medium text-gray-500">
                      Date of Ending
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {experience.dateOfEnding}
                    </dd>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-8">
                    <dt className="text-sm font-medium text-gray-500">
                      Work
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul className="list-disc pl-5 space-y-1">
                        {experience.work.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllExperience;
