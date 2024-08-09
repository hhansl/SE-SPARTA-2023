import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className="pt-8 flex flex-col items-center space-y-4 bg-gradient-to-b from-[#1f2737] to-[#283140]">
        <h2 className="mb-4 mt-12 text-5xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"  data-aos="fade-up">
          Skill
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 mx-16 lg:mx-40 gap-6"  data-aos="fade-up">
          <div className="flex flex-col w-full py-8 px-8 bg-gray-100 rounded-md dark:bg-gray-800 shadow-inner shadow-gray-700">
            <h3 className="mb-2 text-2xl lg:text-4xl text-center font-medium text-gray-900 dark:text-white">Tech Stack</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">In my journey as a developer, I am currently developing my skills in a few fields such as:</p>
            <ul className="list-disc text-lg text-start ml-4 text-gray-500 dark:text-gray-400">
              <li><span className="text-[#5898dc] font-semibold">Flutter</span> and <span className="text-[#FFA611] font-semibold">Firebase</span> for mobile application development</li>
              <li><span className="text-white font-semibold">Next.js</span> and <span className="text-[#06b6d4] font-semibold">Tailwind CSS</span> for web development</li>
              <li><span className="text-[#ffde57] font-semibold">Python</span> and <span className="text-[#43769e] font-semibold">C++</span> for algorithm and data structure</li>
            </ul>
            <div className="flex flex-row py-1.5 mt-4 bg-gray-700 rounded-lg">
              <Image src="/icon/flutterio-icon.svg" alt="flutter" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="400"  height={8} width={8} />
              <Image src="/icon/firebase-icon.svg" alt="firebase" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="450"  height={8} width={8}/>
              <Image src="/icon/next-js.svg" alt="next-js" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="500" height={8} width={8}/>
              <Image src="/icon/tailwind-css-2.svg" alt="tailwind" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="550" height={8} width={8}/>
              <Image src="/icon/Python-logo-notext.svg" alt="python" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="600" height={8} width={8}/>
              <Image src="/icon/c.svg" alt="c++" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="650" height={8} width={8}/>
            </div>
          </div>
          <div className="flex flex-col w-full py-8 px-8 bg-gray-100 rounded-md dark:bg-gray-800 shadow-inner shadow-gray-700">
            <h3 className="mb-2 text-xl md:text-2xl lg:text-4xl font-medium text-center text-gray-900 dark:text-white">Cybersecurity Domains</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">As I immerse myself in the field of cybersecurity, I am actively developing expertise across various specialized domains such as:</p>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-4">
              <ul className="list-disc text-lg text-start ml-4 text-gray-500 dark:text-gray-400">
                <li>Web Application Security</li>
                <li>Network Security</li>
                <li>Cloud Security</li>
              </ul>
              <ul className="list-disc text-lg ml-4 lg:ml-0 text-start text-gray-500 dark:text-gray-400">
                <li>Databases</li>
                <li>OSINT</li>
                <li>Forensics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center mx-16 lg:mx-40 pt-1.5"  data-aos="fade-up">
          <div className="flex flex-col py-8 px-8 w-full h-ma bg-gray-100 rounded-md dark:bg-gray-800 shadow-inner shadow-gray-700">
            <h3 className="mb-2 text-2xl lg:text-4xl font-medium text-center text-gray-900 dark:text-white">Soft Skill</h3>
              <p className="text-lg text-justify text-gray-500 dark:text-gray-400 ">In addition to my technical abilities, I possess a range of soft skills that contribute to my overall effectiveness and success in both academic and professional environments. These skills enhance my ability to collaborate with others, adapt to various situations, and continually strive for excellence.</p>
                <ul className="flex flex-wrap list-disc list-inside text-lg justify-between ml-4 text-gray-500 dark:text-gray-400">
                  <li>Problem Solving</li>
                  <li>Teamwork</li>
                  <li>Communication</li>
                  <li>Leadership</li>
                  <li>Adaptability</li>
                  <li>Time Management</li>
                </ul>
          </div>
        </div>
      </div>

  )
}

export default Skills