import {  Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export const navItem=[
    {name:"Home",link:"#home"},
    {name:"About us",link:"#aboutus"},
    {name:"Services",link:"#services"},
    {name:"LeaderShip",link:"#leadership"},
    {name:"Contact Us",link:"#contactus"},
]

export const content = [
    {
      title: "About Us",
      description:
        "DevDolphins is a pioneering software service company specializing in Java full stack development, AI LLM (RAG) solutions, and digital transformation services, committed to driving success for our clients.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/aboutus.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Our Mission",
      description:
        "At DevDolphins, our mission is to deliver innovative technology solutions that empower businesses to achieve their digital transformation goals and stay ahead in the competitive market.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/ourmission.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Our Services",
      description:
        "We offer a comprehensive range of services, including Java full stack development, AI LLM (RAG) solutions, and digital transformation services, designed to meet the diverse needs of modern businesses.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/ourservices.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Our Story",
      description:
        "Founded in 2024, DevDolphins has swiftly grown into a tech industry leader. Our journey began with a passion for innovation and a commitment to excellence. Over the years, we've built a reputation for delivering top-notch solutions that drive success and transformation for our clients. Our dedicated team of experts continuously pushes the boundaries of technology to create impactful and lasting results.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/ourstory.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
];

export const cards = [
  {
    description: "Founder, CEO & CTO",
    title: "Madhav KSV",
    src: "/elonmusk.jpg",
    ctaText: "Visit",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Leading our innovative team is Madhav, an accomplished IIT Kharagpur graduate with over 18 years of industry experience. His impressive career includes key roles at top-tier companies like Nvidia and HP, where he honed his hands-on coding skills and built a strong delivery track record.  Madhavs enthusiasm for learning new technologies and mentoring teams underpins our dedication to excellence and innovation. Under his leadership, we are committed to delivering state-of-the-art solutions, building a strong technology team and fostering a culture of continuous growth and technological advancement.
        </p>
      );
    },
  },
  {
    description: "Founder, CIO & COO",
    title: "Akkiraju Hari Kishore",
    src: "/leonardomen.jpg",
    ctaText: "Visit",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Hari, a passionate advocate for testing as a service, brings over 26 years of IT industry experience to our leadership team. With extensive IT delivery expertise spanning start-ups, product companies, and both captive and vendor organizations, he is well-versed in digital transformation and transitioning work from onshore to offshore. <br /> <br /> His robust background includes over a decade of coding experience in application development and maintenance. Hari has held leadership roles at tech giants such as Wells Fargo and Infosys, showcasing his ability to drive innovation and excellence across diverse environments.
        </p>
      );
    },
  },
];
export const contactInfo = [
  {
    title: "Email",
    description: "Our friendly team is here to help.",
    value: "admin@devdolphin.com",
    icon:Mail,
    link: "mailto:admin@marketplace.com",
  },
  {
    title: "Office",
    description: "5th Floor, Edureka, Anishka Towers Mall, Close to Nexus Mall (Near Forum).",
    value: " Kukatpally, Hyderabad, Telangana 500085",
    icon: MapPin,
    link: "#",
  },
  {
    title: "Phone",
    description: "Mon-Fri from 9am to 5pm.",
    value: "1-800-123-4567",
    icon: Phone,
    link: "tel:1-800-123-4567",
  },
];