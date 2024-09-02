import { Button } from "flowbite-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

interface OpportunityProps {
    controls: any; // Consider refining the type here
}

const buttonOptions = [
    "Bisnis dan Pemasaran",
    "Komersial dan Penjualan",
    "Organisasi Sosial",
];

const Opportunity = ({ controls }: OpportunityProps) => {
    const [activeButton, setActiveButton] = useState(buttonOptions[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            controls.start((i: number) => ({
                opacity: [0, 1],
                y: [20, 0],
                transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
            }));
        } else {
            controls.start({ opacity: 0 });
        }
    }, [controls, inView]);

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,
                duration: 0.4,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
            },
        }),
    };

    return (
        <div className="h-auto w-screen bg-gray-100 bg-cover bg-center overflow-hidden pt-20">
            <div className="flex items-center justify-center flex-col h-full">
                <div className="lg:w-1/2">
                    <motion.h1
                        className="font-extrabold text-blue-500 text-3xl text-center"
                        ref={ref}
                        custom={0}
                        animate={controls}
                    >
                        {"One Step Closer to More Effective and Connected Communication!"}
                    </motion.h1>
                </div>

                <div className="w-full lg:ml-44 lg:w-10/12 flex flex-col lg:flex-row justify-between items-center lg:items-start">
                    <motion.div
                        className="w-full lg:ml-5 lg:w-full flex justify-center items-center"
                        ref={ref}
                        custom={1}
                        animate={controls}
                    >
                        <Image
                            src="/img5.png"
                            alt="dashboard"
                            width={400}
                            height={400}
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="w-full lg:w-auto ml-5 mb-5 lg:mr-10">
                        <div className="flex flex-col w-full justify-center items-center">
                            {/* Desktop Button Layout */}
                <motion.div
                    className="hidden md:flex space-x-4 mb-5"
                    animate={controls} // Pass controls to animate based on scroll
                    initial={{ opacity: 0, y: 20 }} // Start from invisible and slightly below
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                >
                    {buttonOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0.5 }}
                            animate={{
                                scale: activeButton === option ? 1.1 : 1,
                                opacity: activeButton === option ? 1 : 0.8,
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            <button
                                onClick={() => handleClick(option)}
                                className={`px-4 py-2 border-2 rounded-2xl font-semibold transition-all duration-300 transform ${
                                    activeButton === option
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "bg-white text-blue-500 border-blue-500 hover:bg-blue-700 hover:text-white"
                                }`}
                            >
                                {option}
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                            {/* Mobile Dropdown Button */}
                            <div className="md:hidden bg-white rounded-3xl">
                                <Button
                                    onClick={toggleDropdown}
                                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-700 flex justify-between items-center"
                                >
                                    {activeButton}
                                    <span className="ml-2">
                                        {dropdownOpen ? <ChevronUp /> : <ChevronDown />}
                                    </span>
                                </Button>

                                {dropdownOpen && (
                                    <div className="flex flex-col justify-center items-center p-2 mt-2 space-y-2">
                                        {buttonOptions.map((option, index) => (
                                            <motion.div
                                                key={index}
                                                variants={dropdownVariants}
                                                initial="hidden"
                                                animate="visible"
                                                custom={index}
                                            >
                                                <Button
                                                    onClick={() => handleClick(option)}
                                                    className={`w-60 py-2 px-4 border-2 border-blue-500 bg-white text-blue-500 rounded-2xl hover:bg-blue-700 hover:text-white ${activeButton === option ? 'bg-blue-500 text-white' : ''
                                                        }`}
                                                >
                                                    {option}
                                                </Button>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <motion.p
                                className="text-base font-semibold mb-4 pl-5 pt-5 lg:pt-0 lg:pl-0"
                                ref={ref}
                                custom={3}
                                animate={controls}
                            >
                                Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opportunity;
