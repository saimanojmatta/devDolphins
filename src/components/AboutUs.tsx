import { content } from "@/lib/data"
import { StickyScroll } from "./ui/StickyScrollReveal"
import SparklesText from "./magicui/sparkles-text"
import { BoltIcon, CommandIcon, DiffIcon, InfinityIcon, RocketIcon, UsersIcon } from "lucide-react"

type Props = {}
const AboutUs = (props: Props) => {
  return (
    <div id="aboutus">
    <div  className="flex flex-col relative w-full justify-center items-center">
      <SparklesText text="About US" className="mb-8"/>
      <StickyScroll content={content} />
    <div className="mt-12 space-y-6 lg:mt-16 bg-black-100">
  <div className="space-y-2">
    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
      Our Values
    </div>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-card-foreground">
      Guiding Principles
    </h2>
    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-card-foreground ">
      At the heart of DevDolphins are our core values that drive our actions and shape our culture.
    </p>
  </div>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-2 text-primary-foreground">
          <RocketIcon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold dark:text-card-foreground">Innovation</h3>
      </div>
      <p className="text-muted-foreground text-gray-600">
        We foster a culture of innovation, continually exploring new technologies to provide groundbreaking solutions.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-2 text-primary-foreground">
          <UsersIcon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold dark:text-card-foreground">Collaboration</h3>
      </div>
      <p className="text-muted-foreground text-gray-600">
        We believe in the power of teamwork, creating a collaborative environment where diverse ideas merge to achieve exceptional results.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-2 text-primary-foreground">
          <BoltIcon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold dark:text-card-foreground">Agility</h3>
      </div>
      <p className="text-muted-foreground text-gray-600">
        We embrace agility, adapting swiftly to market changes and client needs to deliver timely and effective solutions.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-2 text-primary-foreground">
          <InfinityIcon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold dark:text-card-foreground">Integrity</h3>
      </div>
      <p className="text-muted-foreground text-gray-600">
        We uphold the highest standards of ethics and professionalism, ensuring our clients can trust us to deliver exceptional service.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-2 text-primary-foreground">
          <DiffIcon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold dark:text-card-foreground">Diversity</h3>
      </div>
      <p className="text-muted-foreground text-gray-600">
        We celebrate diversity and inclusion, fostering an environment where everyone can thrive and contribute unique perspectives.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-2 text-primary-foreground">
          <CommandIcon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold dark:text-card-foreground">Commitment</h3>
      </div>
      <p className="text-muted-foreground text-gray-600">
        We are dedicated to our clients' success, consistently going above and beyond to ensure satisfaction and long-term growth.
      </p>
    </div>
  </div>
    </div>
    </div>

       
      
     
      
     
    </div>
  )
}
export default AboutUs