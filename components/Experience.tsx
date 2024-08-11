import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
        <>
      <div className="flex flex-col pt-20 lg:pt-24 px-12 lg:px-40" data-aos="fade-left">
        <h2 className="mb-4 mt-4 text-4xl font-semibold text-end leading-none tracking-tightmd:text-4xl lg:text-6xl text-white" data-aos="fade-right">Achievement <small className="ms-2 font-semibold text-gray-400">and</small> Experience</h2>
        <p className="text-gray-300 lg:text-lg text-right" data-aos="fade-right">As a dedicated student, I have actively participated in various organizations, taking on roles that have helped me develop leadership, teamwork, and problem-solving skills. My involvement in these organizations has allowed me to contribute to meaningful projects, collaborate with diverse teams, and enhance my abilities in managing tasks and leading initiatives. Below is a list of my achievement/certification and organizational experiences:</p>
        
        <div className="flex flex-wrap mt-4 pt-2 pb-1 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium mr-4">Eagle Scout</h3>
          <p className="text-lg lg:text-xl font-medium text-gray-300">2019</p>
        </div>
          <p className="text-gray-400">Eagle Scouts are young members of the Scout Movement who have achieved the highest skills and awards at each level of scouting education.</p>
        
        <div className="flex flex-wrap pt-2 pb-1 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium mr-4">Scout Troop Leader</h3>
          <p className="text-lg lg:text-xl font-medium text-gray-300">2019-2020</p>
        </div>
          <p className="text-gray-400">As the leader of the Boy Scouts my responsibilities include overseeing and coordinating troop activities, leading meetings, and ensuring the welfare and development of all scouts under their supervision.</p>

        <div className="flex flex-wrap pt-2 pb-1 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl mr-4 text-white font-medium">Chairman of the Student Representative Counsil</h3>
          <p className="text-lg lg:text-xl font-medium text-gray-300">2022-2023</p>
        </div>
          <p className="text-gray-400">As the Chairman of the Student Representative Council (MPK), my primary responsibilities include leading and managing the council to ensure effective student representation and governance.</p>

        <div className="flex flex-wrap pt-2 pb-1 my-auto place-items-end">
          <h3 className="text-2xl lg:text-3xl text-white font-medium mr-4">Competition Staff on Sandbox by IEEE ITB SB</h3>
          <p className="text-lg lg:text-xl font-medium text-gray-300">2023-2024</p>
        </div>
          <p className="text-gray-400">As a competition staff my responsibilities include designing a fair scoring system and coordinating with the judges on how to score the participants works.</p>
        
        <div className="flex flex-wrap pt-2 pb-1 my-auto place-items-end ">
          <a href='https://learn.microsoft.com/api/credentials/share/id-id/AhsanMalik-6856/BEBE5A596DEB02A7?sharingId=A5E72D6FE8886B06'>
            <h3 className="text-2xl lg:text-3xl text-white hover:text-blue-500 font-medium mr-4">Microsoft 365 Certified: Fundamentals</h3>
          </a>
          <p className="text-lg lg:text-xl font-medium text-gray-300">2023</p>
        </div>
          <p className="text-gray-400">I possess a Microsoft certification that covers in-depth knowledge of cloud concepts, Microsoft 365 applications and services, as well as security, compliance, privacy, and trust within Microsoft 365.</p>
        
        <div className="flex flex-wrap pt-2 pb-1 my-auto place-items-end">
          <a href='https://learn.microsoft.com/api/credentials/share/id-id/AhsanMalik-6856/F20E1324EC87DA8E?sharingId=A5E72D6FE8886B06' className='block'>
          <h3 className="text-2xl lg:text-3xl text-white hover:text-blue-500 font-medium mr-4">Microsoft 365 Certified: Security, Compliance, and Identity Fundamentals</h3>

          </a>          
          <p className="text-lg lg:text-xl font-medium text-gray-300">2023</p>
        </div>
          <p className="text-gray-400">I hold a Microsoft certification that demonstrates my expertise in security, compliance, and identity concepts, including a strong understanding of Microsoft Entra capabilities and the comprehensive security and compliance solutions provided by Microsoft.</p>
        

      </div>

      <hr className="h-px mx-10 lg:mx-20 my-16 border-0 bg-gray-500"/>

        </>
    )
}

export default Experience