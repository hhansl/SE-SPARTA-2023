import React from 'react'

const Interest = () => {
  return (
    <div className="flex flex-col items-center pt-6 lg:pt-8 pb-8 lg:pb-12 px-16 lg:px-40 space-y-4 bg-gradient-to-b from-[#1a2131] to-[#1f2737]" >
        <h2 className="mb-2 mt-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" data-aos="fade-up">
          Interest
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-center items-center space-x-2" data-aos="fade-left">
          <img src="/coding.png" alt="Software Development" className="w-32" />
          <div className="flex flex-col max-w-4xl p-4 ms-auto">
            <h3 className="mb-2 text-2xl md:text-2xl lg:text-4xl font-medium text-gray-900 dark:text-white">Software Development</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 text-justify">Actively studying and developing software such as web application and mobile applications to improve user experience.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-x-2" data-aos="fade-left">
          <img src="/kali-2.svg" alt="Kali Linux" className="w-32 mb-2" />
          <div className="flex flex-col max-w-4xl p-4 ms-auto">
            <h3 className="mb-2 text-2xl md:text-2xl lg:text-4xl font-medium text-gray-900 dark:text-white">Cyber Security</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 text-justify">Actively studying and competing in cybersecurity to protect systems and networks from cyber attacks and ensuring data confidentiality, integrity, and availability</p>
          </div>
        </div>
      </div>
  )
}

export default Interest