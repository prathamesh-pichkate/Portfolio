import React from 'react';

function Experience() {
  return (
    <div className='flex flex-col items-center gap-3 mx-4 mb-6 mt-6'>
      <div className='text-4xl font-bold mb-2'>
        <h1>Experience</h1>
      </div>
      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-col md:flex-row mb-auto border border-gray-300 p-4">
        <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-t-xl md:rounded-r-none md:rounded-l-xl bg-clip-border shrink-0">
          <img
            src="musiTech.jpg"
            alt="card-image" className="object-cover w-full h-full bg-cover rounded-t-xl md:rounded-l-xl" />
        </div>
        <div className="p-4 w-full">
          <h6 className="block font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            startups
          </h6>
          <p>Present-2024</p>
          <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Freelance Full Stack Web Developer
          </h4>
          <p className="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Developed and maintained web applications for various startups, utilizing modern technologies and frameworks to deliver robust and scalable solutions. Worked closely with clients to understand their requirements and provided tailored solutions to meet their needs.
          </p>
          <div className="absolute bottom-4">
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => window.location.href = 'http://google.com'}
          className="overflow-hidden relative w-32 p-2 h-12 bg-cyan-600 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
        >
          Explore
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-sky-100 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
          ></span>
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
          ></span>
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-sky-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
          ></span>
          <span
            className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-sm flex justify-center items-center text-black"
          >
            All Experience
          </span>
        </button>
      </div>
    </div>
  );
}

export default Experience;
