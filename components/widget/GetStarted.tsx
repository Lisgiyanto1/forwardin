'use client';

import { useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Aside from './Aside';
import WelcomeGet from './WelcomeGet';
import Broadcast from './BroadCast';
import Campaign from './Campaign';
import Auto from './Auto';
import Opportunity from './Opportunity';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Contact from './Contact';

export default function GetStarted() {
  const [selectedPage, setSelectedPage] = useState('GetStarted');

  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { scrollYProgress } = useScroll();

  // Animasi untuk gambar utama WelcomeGet
  const welcomeTranslateX = useTransform(scrollYProgress, [0, 0.1], [-100, 0]);
  const welcomeScale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const textTranslateX = useTransform(scrollYProgress, [0.1, 0.2], [100, 0]);

  const bounceScale = useSpring(useTransform(scrollYProgress, [0, 0.2, 1], [0.9, 1, 0]), {
   
    stiffness: 300,
    damping: 15,
  });

  const bounceY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0]), // Bounce effect
    {
      stiffness: 300,
      damping: 15,
    }
  );

  const bounceScaleCampaign = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0]), 
    {
      stiffness: 300,
      damping: 15,
    }
  );


  // Animations for WelcomeGet component
  const welcomeX = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const welcomeOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const welcomeBlur = useTransform(scrollYProgress, [0, 0.2], ['0px', '10px']);

  // Campaign section animations
  const imageY = useTransform(scrollYProgress, [0.3, 0.5], [0, -300]); 
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [0, 300]);  
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);  

  // Reverse animations on scroll up
  const imageYOut = useTransform(scrollYProgress, [0.5, 0.7], [-300, 0]); 
  const textYOut = useTransform(scrollYProgress, [0.5, 0.7], [300, 0]);  
  const opacityOut = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);  

  return (
    <div className="w-full h-screen bg-white rounded shadow-md flex flex-col md:flex-row">
      <div className="hidden lg:block w-auto h-full rounded">
        <Aside onSelectPage={handleScroll} />
      </div>
      <div className="w-full h-full flex-1 overflow-auto">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section id="GetStarted" className="min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url('/background.png')` }}>
          <WelcomeGet bounceScale={bounceScale} />
          </section>

          <section id="Broadcast" className="min-h-screen bg-gray-100 mb-0">
            <Broadcast
              bounceScale={bounceScale}
            />
          </section>
          <section id="Campaign" className="min-h-screen bg-gray-100 mb-0">
            <Campaign 
              bounceScale={bounceScaleCampaign}
            />
          </section>

          <section id="Auto" className="min-h-screen bg-gray-100 mb-0">
            <Auto bounceY={bounceY} />
          </section>

          <section id="Opportunity" className="min-h-screen bg-gray-100 mb-0 pt-20 pb-16">
            <Opportunity />
          </section>

          <section id="Pricing" className="min-h-screen bg-gray-100 mb-0">
            <Pricing />
          </section>

          <section id="CombinedPage" className="relative min-h-screen bg-blue-600 mb-16 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-bottom" style={{ backgroundImage: `url('/background2.png')` }}>
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
        </motion.div>
      </div>
    </div>
  );
}
