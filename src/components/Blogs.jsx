import React from 'react';

function Blogs() {
  const blogs = [
    {
      title: "Integrating Tailwind CSS with a React Project: A Professional Guide",
      name: "Prathamesh Pichkate",
    },
    {
      title: "Integrating Tailwind CSS with a React Project: A Professional Guide",
      name: "Prathamesh Pichkate",
    }
  ];

  return (
    <div className='mx-4 mt-8 flex justify-center items-center flex-col gap-5 p-4'>
      <div className='flex justify-center items-center mb-4'>
        <h1 className='text-4xl font-bold'>Blogs</h1>
      </div>

      <div className='w-full h-full flex justify-center items-center flex-wrap gap-5'>
        {/* Blog entries */}
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative grid h-96 w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 md:w-1/2 lg:w-1/3"
          >
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent bg-blue-100 bg-cover bg-center text-gray-700 shadow-none">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
              <h2 className="mb-4 block font-sans text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased hover:scale-105 transition-all duration-300">
                {blog.title}
              </h2>
              <h5 className="block mb-4 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-gray-400 hover:scale-105 transition-all duration-300">
                {blog.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
