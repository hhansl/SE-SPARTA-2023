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
    <main className="dark:bg-gradient-to-t from-gray-700 to-gray-900 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center min-h-screen font-sans items-center space-x-10 p-8" >
        <div className="relative rounded-lg w-64 h-72 overflow-hidden mb-4 lg:mb-0 mx-auto lg:mx-0" data-aos="fade right">
          <img  src="/ahsan.jpg" className="object-cover transform translate-x-4 -translate-y-24 scale-125"  alt="foto diri" />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center max-w-2xl">
          <h1 className="mb-1 mr-4 text-xl italic font-semibold leading-none tracking-tight text-gray-200 md:text-2xl lg:text-3xl" data-aos="fade-left">Hello I'm</h1>
          <h3 className="mb-3 text-3xl font-bold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl" data-aos="fade-left"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Ahsan Malik</span> Al Farisi</h3>
          <p className="mb-4 mx-auto text-lg text-gray-500 text-wrap text-justify md:text-xl lg:text-lg dark:text-gray-400" data-aos="fade-left">A 2nd year undergraduate <span className="text-gray-200 font-semibold">ITB Informatics Engineering student</span> and currently diving into <span className="text-gray-200">software development</span> with a focus on <span className="text-gray-200">web development</span> and <span className="text-gray-200">mobile app</span> creation. In addition to honing my programming skills, I am deeply passionate about <span className="text-gray-200">cybersecurity</span>, consistently challenging myself through Capture The Flag (CTF) competitions to sharpen my abilities and stay at the forefront of the field.</p>
        </div>
      </div>  
      
      <hr className="h-px mx-14 lg:mx-20 mb-4 bg-gray-200 border-0 dark:bg-gray-700"/>
      
      <div className="flex flex-col items-center mx-16 lg:mx-40 space-y-4" >
        <h2 className="mb-4 mt-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" data-aos="fade-up">
          Interest
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-center items-center space-x-2" data-aos="fade-left">
          <img src="/coding.png" alt="Software Development" className="w-32" />
          <div className="flex flex-col max-w-4xl p-4 ms-auto">
            <h3 className="mb-2 text-lg md:text-2xl lg:text-4xl font-medium text-gray-900 dark:text-white">Software Development</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 text-justify">Actively studying and developing software such as web application and mobile applications to improve user experience.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-x-2" data-aos="fade-left">
          <img src="/kali-2.svg" alt="Kali Linux" className="w-32 mb-2" />
          <div className="flex flex-col max-w-4xl p-4 ms-auto">
            <h3 className="mb-2 text-xl md:text-2xl lg:text-4xl font-medium text-gray-900 dark:text-white">Cyber Security</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 text-justify">Actively studying and competing in cybersecurity to protect systems and networks from cyber attacks and ensuring data confidentiality, integrity, and availability</p>
          </div>
        </div>
        
      </div>
      
      <div className="mt-8 flex flex-col items-center space-y-4" data-aos="fade-up">
        <h2 className="mb-4 mt-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Skill
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 mx-16 lg:mx-40 gap-6">
          <div className="flex flex-col w-full py-4 px-8 bg-gray-100 rounded-md dark:bg-gray-800">
            <h3 className="mb-2 text-2xl lg:text-4xl text-center font-medium text-gray-900 dark:text-white">Tech Stack</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">In my journey as a developer, I am currently developing my skills in a few fields such as:</p>
            <ul className="list-disc text-lg text-start ml-4 text-gray-500 dark:text-gray-400">
              <li><span className="text-[#5898dc] font-semibold">Flutter</span> and <span className="text-[#FFA611] font-semibold">Firebase</span> for mobile application development</li>
              <li><span className="text-white font-semibold">Next.js</span> and <span className="text-[#06b6d4] font-semibold">Tailwind CSS</span> for web development</li>
              <li><span className="text-[#ffde57] font-semibold">Python</span> and <span className="text-[#43769e] font-semibold">C++</span> for algorithm and data structure</li>
            </ul>
            <div className="flex flex-row py-1.5 mt-4 bg-gray-700 rounded-lg">
              <img src="/icon/flutterio-icon.svg" alt="tech stack" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="400" />
              <img src="/icon/firebase-icon.svg" alt="tech stack" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="450" />
              <img src="/icon/next-js.svg" alt="tech stack" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="500"/>
              <img src="/icon/tailwind-css-2.svg" alt="tech stack" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="550"/>
              <img src="/icon/Python-logo-notext.svg" alt="tech stack" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="600"/>
              <img src="/icon/c.svg" alt="tech stack" className="w-6 lg:w-8 my-auto mx-auto" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="650"/>
            </div>
          </div>
          <div className="flex flex-col w-full py-4 px-8 bg-gray-100 rounded-md dark:bg-gray-800">
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

        <div className="flex flex-col justify-center mx-16 lg:mx-40 pt-1.5">
          <div className="flex flex-col py-4 px-8 w-full h-ma bg-gray-100 rounded-md dark:bg-gray-800">
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

      <div className="flex flex-col my-8 px-16 lg:px-40" data-aos="fade-left">
        <h2 className="mb-4 mt-4 text-4xl font-semibold text-start leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white"><span className="underline underline-offset-3 decoration-6 decoration-blue-400 dark:decoration-blue-600">Project</span></h2>  
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <p className="text-lg text-gray-500 dark:text-gray-400 text-left lg:w-4/5">
              <span className="text-white">Bisa Bisnis</span> is a mobile application designed to support aspiring entrepreneurs by offering comprehensive classes on essential business topics such as marketing and administration. Created with <span className="text-[#5898dc]">Flutter</span> for the frontend and <span className="text-[#FFA611]">Firebase</span> for the backend, the app ensures a seamless user experience across Android and iOS platforms while providing secure login and authentication features.
            </p>
            <a href="https://github.com/ahsuunn/bisabisnis" className="">
              <img src="/bb/logo_bb.png" alt="Bisa Bisnis Logo" className="w-22 lg:w-28 drop-shadow-md" />
            </a>
          </div>
      </div>

      <div className="flex flex-col mt-6 lg:mt-0 mx-16 lg:mx-40" data-aos="fade-left">
        <h2 className="mb-4 mt-4 text-4xl font-semibold text-end leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white" data-aos="fade-right">Achievement and Experience</h2>
        <p className="dark:text-gray-400 lg:text-lg text-right" data-aos="fade-right">As a dedicated student, I have actively participated in various organizations, taking on roles that have helped me develop leadership, teamwork, and problem-solving skills. My involvement in these organizations has allowed me to contribute to meaningful projects, collaborate with diverse teams, and enhance my abilities in managing tasks and leading initiatives. Below is a list of my organizational experiences:</p>
        
        <div className="flex flex-wrap mt-2 pt-2 pb-1 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium mr-4">Eagle Scout</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2019</p>
        </div>
          <p className="text-gray-400">Eagle Scouts are young members of the Scout Movement who have achieved the highest skills and awards at each level of scouting education.</p>
        
        <div className="flex flex-wrap pt-2 pb-1 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium mr-4">Scout Troop Leader</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2019-2020</p>
        </div>
          <p className="text-gray-400">As the leader of the Boy Scouts my responsibilities include overseeing and coordinating troop activities, leading meetings, and ensuring the welfare and development of all scouts under their supervision.</p>

        <div className="flex flex-wrap pt-2 pb-1 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl mr-4 text-white font-medium">Chairman of the Student Representative Counsil</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2022-2023</p>
        </div>
          <p className="text-gray-400">As the Chairman of the Student Representative Council (MPK), my primary responsibilities include leading and managing the council to ensure effective student representation and governance.</p>

        <div className="flex flex-wrap pt-2 pb-1 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium mr-4">Competition Staff on Sandbox by IEEE ITB SB</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2023-2024</p>
        </div>
          <p className="text-gray-400">As a competition staff my responsibilities include designing a fair scoring system and coordinating with the judges on how to score the participants works.</p>
        
        <div className="flex flex-wrap pt-2 pb-1 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium mr-4">Event Staff on IMPACT 4.0 ITB</h3>
          <p className="text-lg lg:text-xl text-gray-500 font-medium dark:text-gray-400">2023-2024</p>
        </div>
          <p className="text-gray-400">As an event staff my job is to plan the schedule of the competition especially at the final stage.</p>
      </div>

      <hr className="h-px mx-14 lg:mx-20 my-12 bg-gray-200 border-0 dark:bg-gray-700"/>

      <div className="flex flex-col mx-12 items-center" data-aos="fade-up">
        <h2 className="mb-4 text-4xl font-medium text-end leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Contact</h2>
        <p className="text-lg lg:text-xl text-gray-500 text-center dark:text-gray-400">Feel free to reach out to me through the following channels!</p>
        <div className="flex flex-row space-x-5 p-4 mb-6 items-center">
            <a href="mailto:themalique1910@gmail.com" className="flex flex-row items-center text-white translate-y-0.5">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="38"  height="38"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
            </a>
            <a href="https://github.com/hhansl">
              <Image src="/github-mark-white.png" alt="github logo" height={30} width={30}></Image>
            </a>
            <a href="https://www.linkedin.com/in/ahsan-malik-al-farisi-86a735254/">
              <Image src="/In-Blue-34@2x.png" alt="linkedin logo" height={30} width={30}></Image>
            </a>
              <a href="https://www.instagram.com/ahsuunn/" className="-translate-x-1">
                <Image src="/instagram-logo.png" alt="instagram logo" height={30} width={38}></Image>
              </a>
          </div>
      </div>

    </main>
    );
  };

export default Home;