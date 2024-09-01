'use client'
import { motion, MotionValue } from "framer-motion";
import Image from 'next/image';

interface BroadcastProps {
    bounceScale: MotionValue<number>;
}

export default function Broadcast({ bounceScale }: BroadcastProps) {
    return (
        <motion.div
            className="h-screen z-0 w-screen bg-gradient-to-b from-transparent to bg-gray-100 bg-cover bg-center overflow-hidden"
        >
            <div className="flex items-center justify-center h-full">
                <div className="w-full lg:ml-44 lg:w-10/12 flex flex-col lg:flex-row justify-between items-center lg:items-start">

                    {/* Image Section Left */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        style={{
                            scale: bounceScale,
                        }}
                    >
                        <Image
                            src="/img2.png"
                            alt="dashboard-left"
                            width={900}
                            height={900}
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Image Section Right */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        style={{
                            scale: bounceScale,
                        }}
                    >
                        <div className="w-full lg:w-2/3 ml-5 lg:mr-10">
                            <div className="flex flex-col w-full px-4">
                                <p className="text-4xl font-extrabold mb-4">
                                    Reach Further with Ease
                                </p>
                                <p className="text-base font-semibold mb-4">
                                    Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
