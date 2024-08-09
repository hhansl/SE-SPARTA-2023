import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="flex flex-col mx-12 items-center" data-aos="fade-up">
        <h2 className="mb-4 text-4xl font-medium text-end leading-none tracking-tight md:text-4xl lg:text-5xl text-white">Contact</h2>
        <p className="text-lg lg:text-xl  text-center text-gray-400">Feel free to reach out to me through the following channels!</p>
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

  )
}

export default Contact