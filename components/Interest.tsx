import React from 'react'
import Image from 'next/image'

const Interest = () => {
  return (
    <div className="flex flex-col items-center pt-6 lg:pt-8 pb-8 lg:pb-12 px-8 lg:px-40 space-y-4 bg-gradient-to-b from-[#1a2131] to-[#1f2737]" >
        <h2 className="mb-2 mt-4 text-5xl font-semibold leading-none tracking-tight md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-white drop-shadow-lg shadow-blue-200 " data-aos="fade-up">
          Interest
        </h2>
        
        <div className="flex flex-col pb-4 lg:flex-row justify-center items-center space-x-2" data-aos="fade-left">
          <Image src="/coding 1.svg" alt="Software Development" className="w-32" width={32} height={32} />
          <div className="flex flex-col max-w-4xl p-4 ms-auto">
            <h3 className="mb-2 text-2xl md:text-2xl lg:text-4xl font-medium text-white">Software Development</h3>
            <p className="text-lg text-gray-300 text-justify">Actively studying and developing software such as web application and mobile applications to improve user experience.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-x-2" data-aos="fade-left">
          <Image src="/kali-2.svg" alt="Kali Linux" className="w-32 mb-2" width={32} height={32} />
          <div className="flex flex-col max-w-4xl p-4 ms-auto">
            <h3 className="mb-2 text-2xl md:text-2xl lg:text-4xl font-medium text-white">Cyber Security</h3>
            <p className="text-lg text-gray-300 text-justify">Actively studying and competing in cybersecurity to protect systems and networks from cyber attacks and ensuring data confidentiality, integrity, and availability</p>
          </div>
        </div>
      </div>
  )
}

export default Interest