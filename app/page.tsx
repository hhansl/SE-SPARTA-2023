"use client";
import Image from "next/image" ; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row justify-center font-sans space-x-10 p-8" >
        <div className="relative rounded-lg w-64 h-72 overflow-hidden mx-auto lg:mx-0" data-aos="fade right">
          <img  src="/ahsan.jpg" className="object-cover transform translate-x-4 -translate-y-24 scale-125"  alt="foto diri" />
        </div>
        <div className="flex flex-col text-center justify-center max-w-2xl">
          <h1 className="mb-2 mr-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl bg-gradient-to-br from-white to-[#86adfc] inline-block text-transparent bg-clip-text text-left" data-aos="fade-left">Hello I'm</h1>
          <h3 className="mb-3 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl bg-gradient-to-br from-white to-[#86adfc] inline-block text-transparent bg-clip-text text-left" data-aos="fade-left">Ahsan Malik Al Farisi</h3>
          <p className="mb-4 text-lg text-gray-500 text-wrap text-justify md:text-xl lg:text-lg dark:text-gray-400" data-aos="fade-left">An undergraduate ITB Informatics Engineering student and currently diving into software development and cybersecurity, eager to master the latest tech and security solutions. My goal is to able make meaningful impact on society</p>
          <div className="flex flex-row space-x-5" data-aos="fade-left">
            <a href="https://github.com/hhansl">
              <Image src="/github-mark-white.png" alt="github logo" height={30} width={30}></Image>
            </a>
            <a href="https://www.linkedin.com/in/ahsan-malik-al-farisi-86a735254/">
              <Image src="/In-Blue-34@2x.png" alt="linkedin logo" height={30} width={30}></Image>
            </a>
              <a href="https://www.instagram.com/ahsuunn/" className="-translate-x-1">
                <Image src="/instagram-logo.png" alt="instagram logo" height={30} width={33}></Image>
              </a>
          </div>
        </div>
      </div>  
      
      <hr className="h-px mx-20 mb-4 bg-gray-200 border-0 dark:bg-gray-700"/>
      
      <div className="flex flex-col items-center mx-40 space-y-4" data-aos="fade-up">
        <h2 className="mb-4 mt-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Interest
        </h2>
        
        <div className="flex flex-row justify-center items-center space-x-2">
          <img src="/coding.png" alt="Software Development" className="w-32" />
          <div className="flex flex-col max-w-4xl p-4 ms-auto">
            <h3 className="mb-2 text-2xl lg:text-4xl font-medium text-gray-900 dark:text-white">Software Development</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 text-justify">Actively studying and developing software such as web application and mobile applications to improve user experience.</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-2">
          <img src="/kali-2.svg" alt="Kali Linux" className="w-32" />
          <div className="flex flex-col max-w-4xl p-4 ms-auto">
            <h3 className="mb-2 text-2xl lg:text-4xl font-medium text-gray-900 dark:text-white">Cyber Security</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 text-justify">Actively studying and competing in cybersecurity to protect systems and networks from cyber attacks and ensuring data confidentiality, integrity, and availability</p>
          </div>
        </div>
        
      </div>
      
      <div className="mt-8 flex flex-col items-center space-y-4" data-aos="fade-up">
        <h2 className="mb-4 mt-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Skill
        </h2>

        <div className="flex flex-row mx-40 space-x-6">
          <div className="flex flex-col w-full py-4 px-8 ms-auto bg-gray-100 rounded-md dark:bg-gray-800">
           <h3 className="mb-2 text-2xl lg:text-4xl text-center font-medium text-gray-900 dark:text-white">Tech Stack</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">In my journey as a developer, I am currently developing my skills in a few fields such as:</p>
              <ul className=" list-disc text-lg text-start ml-4 text-gray-500 dark:text-gray-400">
                <li><span className=" text-[#5898dc] font-semibold">Flutter</span> and <span className="text-[#FFA611] font-semibold">Firebase</span> for mobile application development</li>
                <li><span className=" text-white font-semibold">Next.js</span> and <span className="text-[#06b6d4] font-semibold">Tailwind CSS</span> for web development</li>
                <li><span className=" text-[#ffde57] font-semibold">Python</span> and <span className=" text-[#43769e] font-semibold">C++</span> for algorithm and data structure</li>
              </ul>
              <div className="flex flex-row py-1.5 mt-4 bg-gray-700 rounded-lg">
                <img src="/icon/flutterio-icon.svg" alt="tech stack" className="w-8 mx-auto" />
                <img src="/icon/firebase-icon.svg" alt="tech stack" className="w-8 mx-auto" />
                <img src="/icon/next-js.svg" alt="tech stack" className="w-8 mx-auto" />
                <img src="/icon/tailwind-css-2.svg" alt="tech stack" className="w-8 mx-auto" />
                <img src="/icon/Python-logo-notext.svg" alt="tech stack" className="w-8 mx-auto" />
                <img src="/icon/c.svg" alt="tech stack" className="w-8 mx-auto" />
              </div>
          </div>
          <div className="flex flex-col w-full py-4 px-8 bg-gray-100 rounded-md dark:bg-gray-800">
              <h3 className="mb-2 text-2xl lg:text-4xl font-medium text-center text-gray-900 dark:text-white">Cybersecurity Domains</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">As I immerse myself in the field of cybersecurity, I am actively developing expertise across various specialized domains such as:</p>
              <div className="flex flex-row space-x-4">
                <ul className=" list-disc text-lg text-start ml-4 w-1/2 text-gray-500 dark:text-gray-400">
                  <li>Web Application Security</li>
                  <li>Network Security</li>
                  <li>Cloud Security</li>
                </ul>
                <ul className=" list-disc text-lg text-start text-gray-500 dark:text-gray-400">
                  <li>Databases</li>
                  <li>OSINT</li>
                  <li>Forensics</li>
                </ul>
              </div>
            </div>
        </div>

        <div className="flex flex-col justify-center mx-40 pt-1.5">
          <div className="flex flex-col py-4 px-8 w-full h-ma bg-gray-100 rounded-md dark:bg-gray-800">
            <h3 className="mb-2 text-2xl lg:text-4xl font-medium text-center text-gray-900 dark:text-white">Soft Skill</h3>
              <p className="text-lg text-justify text-gray-500 dark:text-gray-400 ">In addition to my technical abilities, I possess a range of soft skills that contribute to my overall effectiveness and success in both academic and professional environments. These skills enhance my ability to collaborate with others, adapt to various situations, and continually strive for excellence.</p>
                <ul className="flex flex-wrap list-disc text-lg justify-between ml-4 text-gray-500 dark:text-gray-400">
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

      <div className="flex flex-row mt-8 px-40 justify-between ">
        <div className="flex flex-col w-4/5">
          <h2 className="mb-4 mt-4 text-4xl font-medium leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Project</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-justify">Bisa Bisnis is a mobile application designed to support aspiring entrepreneurs by offering comprehensive classes on essential business topics such as marketing and administration. Created with <span className=" text-[#5898dc]">Flutter</span> for the frontend and <span className="text-[#FFA611]">Firebase</span> for the backend, the app ensures a seamless user experience across Android and iOS platforms while providing secure login and authentication features. </p>
        </div>
        <a href="https://github.com/ahsuunn/bisabisnis" className="my-auto lg:my-20 mx-auto">
          <img src="/bb/logo_bb.png" alt="Bisa Bisnis Logo" className="w-16 lg:w-24 drop-shadow-md" />
        </a>
      </div>

      <div className="flex flex-col mx-40 ">
        <h2 className="mb-4 mt-4 text-4xl font-medium text-end leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Achievment and Experience</h2>
        <p className="dark:text-gray-400 lg:text-lg text-justify">As a dedicated student, I have actively participated in various organizations, taking on roles that have helped me develop leadership, teamwork, and problem-solving skills. My involvement in these organizations has allowed me to contribute to meaningful projects, collaborate with diverse teams, and enhance my abilities in managing tasks and leading initiatives. Below is a list of my organizational experiences:</p>
        
        <div className="flex flex-row mt-2 pt-2 pb-1 space-x-4 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium">Eagle Boy Scout</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2019</p>
        </div>
          <p className="text-gray-400">Eagle Scouts are young members of the Scout Movement who have achieved the highest skills and awards at each level of scouting education.</p>
        
        <div className="flex flex-row pt-2 pb-1 space-x-4 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium">Boy Scout Troop Leader</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2019-2020</p>
        </div>
          <p className="text-gray-400">As the leader of the Boy Scouts my responsibilities include overseeing and coordinating troop activities, leading meetings, and ensuring the welfare and development of all scouts under their supervision.</p>

        <div className="flex flex-row pt-2 pb-1 space-x-4 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium">Chairman of the Student Representative Counsil</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2022-2023</p>
        </div>
          <p className="text-gray-400">As the Chairman of the Student Representative Council (MPK), my primary responsibilities include leading and managing the council to ensure effective student representation and governance.</p>

        <div className="flex flex-row pt-2 pb-1 space-x-4 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium">Competition Staff on Sandbox by IEEE ITB SB</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2023-2024</p>
        </div>
          <p className="text-gray-400">As a competition staff my responsibilities include designing a fair scoring system and coordinating with the judges on how to score the participants works.</p>
        
        <div className="flex flex-row pt-2 pb-1 space-x-4 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium">Event Staff on IMPACT 4.0 ITB</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2023-2024</p>
        </div>
          <p className="text-gray-400">As an event staff my job is to plan the schedule of the competition especially at the final stage.</p>
      
      </div>


    </main>
    );
  };

export default Home;