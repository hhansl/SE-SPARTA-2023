import Image from "next/image" ; 

const Home = () => {
  return (
    <main className="dark:bg-gray-900">
      <div className="flex flex-row justify-center font-sans justify space-x-10 p-8">
        <div className="relative rounded-md w-64 h-72 overflow-hidden">
          <Image  src="/ahsan.jpg" className="object-cover transform translate-x-4 -translate-y-24 scale-125" height={300} width={400}  alt="foto diri" />
        </div>
        <div className="flex flex-col justify-center max-w-2xl">
          <div className="flex flex-row justify">           
            <h1 className="mb-3 mr-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hello I'm Ahsan</h1>
            <h3 className="mb-3 text-3xl font-regular leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> Malik</h3>
          </div>
          <p className="mb-3 text-lg text-gray-500 text-wrap md:text-xl dark:text-gray-400 ">An undergraduate ITB Informatics Engineering student and currently diving into software development and cybersecurity, eager to master the latest tech and security solutions. My goal is to able make meaningful impact on society</p>
          <div className="flex flex-row space-x-2">
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
      
      <div className="flex flex-col items-center space-y-4">
        <h2 className="mb-4 mt-4 text-4xl font-medium leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Interest
        </h2>
        <div className="flex flex-row justify-center mx-40 space-x-4">
          <div className="flex flex-col items-center w-full p-4 bg-gray-100 rounded-md dark:bg-gray-800">
            <h3 className="mb-2 text-2xl font-medium text-gray-900 dark:text-white">Software Development</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">Developing software and applications to solve real-world problems and improve user experience.</p>
          </div>
          <div className="flex flex-col items-center w-full p-4 bg-gray-100 rounded-md dark:bg-gray-800">
            <h3 className="mb-2 text-2xl font-medium text-gray-900 dark:text-white">Cybersecurity</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">Protecting systems and networks from cyber attacks and ensuring data confidentiality, integrity, and availability.</p>
          </div>
        </div>
        <div>
          
        </div>
      </div>

    </main>
    );
  };

export default Home;