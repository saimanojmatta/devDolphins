import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import LeaderShip from "@/components/LeaderShip";

import Services from "@/components/Services";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItem } from "@/lib/data";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex  flex-col overflow-hidden mx-auto sm:px-10 px-5">
     <FloatingNav navItems={navItem}/>
      <Hero/>
      <AboutUs/>
      <Services/>
     <LeaderShip/>
     <Contact/>
    
     


    </main>
  );
}
