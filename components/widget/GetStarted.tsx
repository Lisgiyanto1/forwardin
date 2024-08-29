'use client'

import { useState } from "react";
import Aside from "./Aside";
import { Button } from "flowbite-react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import WelcomeGet from "./WelcomeGet";
import Broadcast from "./BroadCast";
import Campaign from "./Campaign";
import Auto from "./Auto";
import Opportunity from "./Opportunity";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Contact from "./Contact";

export default function GetStarted() {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState("GetStarted");

  const handleRoute = () => {
    router.push('/signup')
  }
  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-screen  bg-white rounded shadow-md flex flex-col md:flex-row">
      <div className="hidden lg:block w-auto h-full rounded">
        <Aside onSelectPage={handleScroll} />
      </div>
      <div className="w-full h-full flex-1 overflow-auto">

        <section id="GetStarted" className="min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url('/background.png')` }}>
          <WelcomeGet />
        </section>


        <section id="Broadcast" className="min-h-screen bg-gray-100 mb-0">
          <Broadcast />
        </section>

        <section id="Campaign" className="min-h-screen bg-gray-100 mb-0">
          <Campaign />
        </section>

        <section id="Auto" className="min-h-screen bg-gray-100 mb-0">
          <Auto />
        </section>

        <section id="Opportunity" className="min-h-screen bg-gray-100 mb-0 pt-20 pb-16">
          <Opportunity />
        </section>

        <section id="Pricing" className="min-h-screen bg-gray-100 mb-0">
          <Pricing />
        </section>


        <section id="CombinedPage" className="relative -z-10 min-h-screen bg-blue-600 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-cover  bg-bottom ')]" style={{ backgroundImage: `url('/background2.png')`, margin: '0', padding: '0' }}>

          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div id="CombinedPage#Menu1" className="mb-8">
              <FAQ />
            </div>
            <div id="CombinedPage#Menu2">
              <Contact />
              
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
