'use client';

import { Button } from "flowbite-react";
import { ArrowRightIcon } from "lucide-react";
import Image from 'next/image';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';


interface AutoProps {
    bounceY: MotionValue<number>;
}
export default function Auto({ bounceY }: AutoProps) {


    return (
        <div className="h-screen w-screen bg-gray-100 bg-cover bg-center overflow-hidden">
            <div className="flex items-center justify-center h-full">
                <div className="w-full lg:ml-44 lg:w-10/12 flex flex-col lg:flex-row justify-between items-center lg:items-start">

                    {/* Image Section */}
                    <motion.div
                        className="w-full lg:w-full"
                        style={{ scale: bounceY }}
                       
                    >
                        <Image
                            src="/img4.png"
                            alt="dashboard"
                            width={900}
                            height={900}
                            className="object-cover"
                        />
                    </motion.div>


                    <motion.div
                        className="w-full lg:w-2/3 ml-5 lg:mr-10"
                        style={{ scale: bounceY }}
                    
                    >
                        <div className="flex flex-col w-full px-4">
                            <p className="text-4xl font-extrabold mb-4">
                                Respond Faster with the Convenience of Auto Reply
                            </p>
                            <p className="text-base font-semibold mb-4">
                                Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
