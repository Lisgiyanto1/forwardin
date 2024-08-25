'use client'
import { Button } from "flowbite-react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import Chevron Icons
import Image from 'next/image';
import { useState } from "react";

export default function Opportunity() {
    const [activeButton, setActiveButton] = useState("Bisnis dan Pemasaran");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
        setDropdownOpen(false); // Tutup dropdown saat button dipilih
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="h-auto w-screen bg-gray-100 bg-cover bg-center overflow-hidden">
            <div className="flex items-center justify-center flex-col h-full">
                <div className="lg:w-1/2 ">
                    <h1 className="font-extrabold text-blue-500 text-3xl  text-center">{`"One Step Closer to More Effective and Connected Communication!"`}</h1>
                </div>

                <div className="w-full lg:ml-44 lg:w-10/12 flex flex-col lg:flex-row justify-between items-center lg:items-start">

                    {/* Image Section */}
                    <div className="w-full lg:ml-5 lg:w-full flex justify-center items-center">
                        <Image
                            src="/img5.png"
                            alt="dashboard"
                            width={400}
                            height={400}
                            className="object-cover"
                        />
                    </div>

                    {/* Button and Text Section */}
                    <div className="w-full lg:w-auto ml-5 mb-5 lg:mr-10">
                        <div className="flex flex-col w-full justify-center items-center">

                            {/* Mobile View: Dropdown Button */}
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

                                {/* Dropdown for Buttons */}
                                {dropdownOpen && (
                                    <div className="flex flex-col justify-center items-center p-2 l mt-2 space-y-2">
                                        {activeButton !== "Bisnis dan Pemasaran" && (
                                            <Button
                                                onClick={() => handleClick("Bisnis dan Pemasaran")}
                                                className="w-60 py-2 px-4 border-2 border-blue-500 bg-white text-blue-500 rounded-2xl hover:bg-blue-700 hover:text-white"
                                            >
                                                Bisnis dan Pemasaran
                                            </Button>
                                        )}
                                        {activeButton !== "Komersial dan Penjualan" && (
                                            <Button
                                                onClick={() => handleClick("Komersial dan Penjualan")}
                                                className="w-60 py-2 px-4 border-2 border-blue-500 bg-white text-blue-500 rounded-2xl hover:bg-blue-700 hover:text-white"
                                            >
                                                Komersial dan Penjualan
                                            </Button>
                                        )}
                                        {activeButton !== "Organisasi Sosial" && (
                                            <Button
                                                onClick={() => handleClick("Organisasi Sosial")}
                                                className="w-60 py-2 px-4 border-2 border-blue-500 bg-white text-blue-500 rounded-2xl hover:bg-blue-700 hover:text-white"
                                            >
                                                Organisasi Sosial
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Desktop View: Buttons in Row */}
                            <div className="hidden md:flex flex-row gap-2 justify-start mb-4 items-center">
                                <Button
                                    onClick={() => handleClick("Bisnis dan Pemasaran")}
                                    className={`mr-4 w-auto py-1 px-4 border-2 rounded-2xl text-white 
                                      ${activeButton === "Bisnis dan Pemasaran" ? "bg-blue-500 border-blue-500" : "bg-white border-blue-500 text-blue-500"} 
                                      hover:bg-blue-700 hover:text-white`}
                                >
                                    Bisnis dan Pemasaran
                                </Button>

                                <Button
                                    onClick={() => handleClick("Komersial dan Penjualan")}
                                    className={`mr-4 w-auto py-1 px-4 border-2 rounded-2xl 
                                      ${activeButton === "Komersial dan Penjualan" ? "bg-blue-500 border-blue-500 text-white" : "bg-white border-blue-500 text-blue-500"} 
                                      hover:bg-blue-700 hover:text-white`}
                                >
                                    Komersial dan Penjualan
                                </Button>

                                <Button
                                    onClick={() => handleClick("Organisasi Sosial")}
                                    className={`mr-4 w-auto py-1 px-4 border-2 rounded-2xl 
                                      ${activeButton === "Organisasi Sosial" ? "bg-blue-500 border-blue-500 text-white" : "bg-white border-blue-500 text-blue-500"} 
                                      hover:bg-blue-700 hover:text-white`}
                                >
                                    Organisasi Sosial
                                </Button>
                            </div>

                            <p className="text-base font-semibold mb-4 pl-5 pt-5 lg:pt-0 lg:pl:0">
                                Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
