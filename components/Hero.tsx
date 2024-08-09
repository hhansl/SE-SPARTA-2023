import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex flex-col relative lg:flex-row justify-center min-h-screen font-sans items-center space-x-10 p-8" >
        <div className="absolute z-20 bg-gradient-to-b w-full h-full from-transparent from-70% to-[#1a2131]"/>
          <Image 
          src="/gradient-1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          className="absolute -translate-x-10 z-0 opacity-25"
        />
        <div className="relative rounded-lg w-64 h-72 lg:w-72 lg:h-80 overflow-hidden mb-4 lg:mb-0 mx-auto lg:mx-0" data-aos="fade right">
          <Image  src="/ahsan-1.jpg" className="object-cover transform translate-x-2 -translate-y-16 scale-150"  fill={true} alt="Foto diri" />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center max-w-2xl">
          <h1 className="mb-1 mr-4 text-xl italic font-semibold leading-none tracking-tight text-gray-200 md:text-2xl lg:text-3xl" data-aos="fade-left">Hello I&apos;m</h1>
          <h3 className="mb-3 text-5xl font-bold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl" data-aos="fade-left"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Ahsan Malik</span> Al Farisi</h3>
          <p className="mb-4 mx-auto text-lg text-gray-500 text-wrap text-justify md:text-xl lg:text-lg dark:text-gray-400" data-aos="fade-left">A 2nd year undergraduate <span className="text-gray-200 font-semibold">ITB Informatics Engineering student</span> and currently diving into <span className="text-gray-200">software development</span> with a focus on <span className="text-gray-200">web development</span> and <span className="text-gray-200">mobile app</span> creation. In addition to honing my programming skills, I am deeply passionate about <span className="text-gray-200">cybersecurity</span>, consistently challenging myself through Capture The Flag (CTF) competitions to sharpen my abilities and stay at the forefront of the field.</p>
        </div>
      </div>
  )
}

export default Hero