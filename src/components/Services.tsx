'use client'
import Image from "next/image"
import { BackgroundGradient } from "./ui/background-gradient"

type Props = {}
const Services = (props: Props) => {
  return (
    <div id="services" className="flex flex-col items-center ">
        <h1 className=" m-8 heading">Our Specialized 
          <span className="text-purple"> Services</span>
        </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center mx-auto" >
     
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-black-100   ">
        <Image
          src={`/java2.jpeg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-card-foreground">
        Java Full Stack Solutions
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-gray-400">
        Our Java Full Stack Application solutions provide end-to-end development services, leveraging technologies like Angular/React for frontend and Java Spring Boot for backend. We offer robust database integration, API development, cloud deployment (AWS, Google Cloud, Azure), and implement DevOps practices (CI/CD, automated testing). Security is ensured with SSL/TLS, OAuth, and compliance with regulations. Our agile process includes consultation, design, development, testing, and ongoing support, delivering scalable, cost-efficient, and customized web applications to meet your business needs.
        </p>
       
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-black-100">
        <Image
          src={`/RAG.jpg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-card-foreground">
        AI (LLM) RAG Solutions
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-gray-400">
        We offer Retrieval Augmented Generation (RAG) solutions that enhance the performance of large language models (LLMs) by integrating external data sources at inference time. RAG enables LLMs to access relevant knowledge beyond their training data, resulting in more accurate, up-to-date, and verifiable predictions. Our RAG solutions utilize vector databases and feature stores to seamlessly incorporate information retrieval into the LLM text generation process. By augmenting user prompts with additional context, RAG can significantly improve LLM performance compared to models without retrieval
        </p>
       
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-black-100">
        <Image
          src={`/Digital.jpg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-card-foreground">
        Digital Transformation Services
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-gray-400">
        Our digital transformation services empower you to embrace the latest technologies and trends, ensuring you stay ahead of the competition. We offer comprehensive services including digital strategy, user experience design, and application development. Our digital strategy services help define a clear roadmap to success, while our user experience design ensures intuitive and engaging interfaces. Our application development leverages modern technologies to build robust, scalable solutions. Together, these services drive innovation, enhance efficiency, and achieve your business goals. Partner with us  .
        </p>
       
      </BackgroundGradient>
      
    </div>
    </div>
  

  )
}
export default Services