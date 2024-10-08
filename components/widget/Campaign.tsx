'use client';

import Image from 'next/image';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';

interface CampaignProps {
  bounceScale: MotionValue<number>;
}

export default function Campaign({ bounceScale }: CampaignProps) {
 
  return (
    <div className="h-screen w-screen bg-cover bg-center overflow-hidden bg-white">
      <div className="flex items-center justify-center h-full">
        <div className="w-full lg:ml-44 lg:pt-0 lg:w-10/12 flex flex-col lg:flex-row justify-between items-center lg:items-start">
    
          <motion.div
            style={{ scale: bounceScale }}
            className="w-full lg:w-full lg:order-1"
          >
            <Image
              src="/img3.png"
              alt="dashboard"
              width={900}
              height={900}
              className="object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
           style={{ scale: bounceScale }}
           
           
            className="w-full lg:w-2/3"
          >
            <div className="flex flex-col w-full px-4">
              <p className="text-4xl font-extrabold mb-4">
                Right Time, Effective Messages
              </p>
              <p className="text-base font-semibold mb-4">
                Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
