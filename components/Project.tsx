import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className="flex flex-col pt-20 lg:pt-24 px-12 lg:px-40" data-aos="fade-left">
        <h2 className="mb-4 mt-4 text-4xl font-semibold text-start leading-none tracking-tight md:text-4xl lg:text-6xl text-white">
          <span className="underline underline-offset-3 decoration-6 decoration-blue-600">Project</span></h2>  
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-14">
            <p className="text-lg text-gray-400 text-left lg:w-4/5">
              <span className="text-white">Bisa Bisnis</span> is a mobile application designed to support aspiring entrepreneurs by offering comprehensive classes on essential business topics such as marketing and administration. Created with <span className="text-[#5898dc] ">Flutter</span> for the frontend and <span className="text-[#FFA611]">Firebase</span> for the backend, the app ensures a seamless user experience across Android and iOS platforms while providing secure login and authentication features.
            </p>
            <a href="https://github.com/ahsuunn/bisabisnis" className="">
              <Image src="/bb/logo_bb 1.svg" alt="Bisa Bisnis Logo" className="w-22 lg:w-28 drop-shadow-md" 
              height={80} // Default size for small and medium screens
              width={80}  // Default size for small and medium screens
              objectFit='Contain'/>
            </a>
          </div>
      </div>
  )
}

export default Project