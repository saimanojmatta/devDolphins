import React from "react";
import { ChevronRight } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";


const  Hero=()=> {
  return (
    <div id='home' className="relative w-full flex flex-col">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <section className="py-28 z-10">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm  text-gray-400 group font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              Over 200+ deals finished
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>
            <h2 className="text-4xl md:text-5xl font-geist font-normal tracking-tighter lg:text-5xl text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
            Empowering Your Digital Transformation
            </h2>
            <p className="font-geist">
            Transform your ideas into reality with our expert team and state-of-the-art technology solutions.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <button className="inline-flex h-12 items-center justify-center font-geist rounded-md border border-gray-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 ">
                Get Started 
              <Image src={'/Arrow.svg'} alt="" width={15} height={15} className="ml-1"/>
              </button>
             
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              className=" md:rounded-tl-[108px]"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center font-displayAlt text-sm text-gray-700 font-semibold">
            Trusted by the best companies
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
          <Image src={'/DigitalOcean.svg'}alt="digitalOCean" width={200} height={200}/>
          <Image src={'/openai.svg'}alt="openai" width={200} height={200}/>
          <Image src={'/Cloudflare.svg'}alt="CloudFflare" width={150} height={150}/>
          <Image src={'/Larvel.svg'}alt="Larvel" width={150} height={150}/>
          </div>
        </div>
        
      </section>
    </div>
  );
}
export default Hero


      
            