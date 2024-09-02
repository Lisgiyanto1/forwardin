'use client';

import { useEffect } from 'react';
import { motion, useAnimation, useScroll, useSpring, useTransform } from 'framer-motion';
import Aside from './Aside';
import WelcomeGet from './WelcomeGet';
import Broadcast from './BroadCast';
import Campaign from './Campaign';
import Auto from './Auto';
import Opportunity from './Opportunity';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Contact from './Contact';
import { useInView } from 'react-intersection-observer';

export default function GetStarted() {

  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        scale: [0.5, 1.05, 0.95, 1],
        opacity: [0, 1],
        transition: { delay: i * 0.2, duration: 0.5 },
      }));
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { scrollYProgress } = useScroll();

  const bounceScale = useSpring(useTransform(scrollYProgress, [0, 0.2, 1], [0.9, 1, 0]), {
    stiffness: 300,
    damping: 15,
  });

  const bounceY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0]),
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

  const pricingMotionEffect = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  // Animation for Contact section
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactControls = useAnimation();

  useEffect(() => {
    if (contactInView) {
      contactControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
    } else {
      contactControls.start({
        opacity: 0,
        y: 20
      });
    }
  }, [contactInView, contactControls]);








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
          <section id="GetStarted" ref={ref} className="min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url('/background.png')` }}>

            <WelcomeGet bounceScale={bounceScale} />

          </section>

          <section id="Broadcast" className="min-h-screen bg-gray-100 mb-0">
            <Broadcast bounceScale={bounceScale} />
          </section>

          <section id="Campaign" className="min-h-screen bg-gray-100 mb-0">
            <Campaign bounceScale={bounceScaleCampaign} />
          </section>

          <section id="Auto" className="min-h-screen bg-gray-100 mb-0">
            <Auto bounceY={bounceY} />
          </section>

          <section id="Opportunity" className="min-h-screen bg-gray-100 mb-0 pt-20 pb-16">
            <Opportunity
              controls={controls}
             
            />
          </section>

          <section id="Pricing" ref={ref} className="min-h-screen bg-gray-100 mb-0">
            <Pricing motionEffect={pricingMotionEffect} />
          </section>

          <section id="CombinedPage" className="relative min-h-screen bg-blue-600 mb-16 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-bottom" style={{ backgroundImage: `url('/background2.png')` }}></div>
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
