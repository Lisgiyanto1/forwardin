'use client'
import "chart.js/auto";

import { useState } from 'react';
import { Dropdown } from 'flowbite-react'; // Assuming you're using Flowbite for dropdowns
import { GrafikChart } from './grafikchart';
import { TrendChart } from './trendchart';
import { useDarkMode } from '@/context/DarkMode';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Doughnut } from 'react-chartjs-2';


const Analitik = () => {
    const [selectedDevice, setSelectedDevice] = useState('RMX3263');
    const [selectedDate, setSelectedDate] = useState('29.8.2023');
    const { isDarkMode } = useDarkMode();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);
    const dark = isDarkMode ? 'bg-gray-900 text-white shadow-lg shadow-blue-500 ' : 'bg-white text-gray-900 ';
    const typoDark = isDarkMode ? 'bg-gray-700 text-white shadow-lg shadow-blue-500 ' : 'border-2 border-gray-300 text-gray-900 ';

    const data = {
        labels: ['Total Pesan Keluar', 'Total Pesan Gagal', 'Total Pesan Masuk'],
        datasets: [
            {
                label: 'Pesan Statistics',
                data: [45, 8, 23],
                backgroundColor: ['#3b82f6', '#d1d5db', '#10b981'],
                borderColor: ['#ffffff'],
                borderWidth: 2,
            },
        ],
    };


    const options = {
        cutout: '70%',
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <>
            <div className={`${dark} w-full p-6 flex  flex-col gap-10  rounded-lg `}>
                <h2 className="text-lg font-semibold ">Analitik</h2>
                <div className={`flex flex-col md:flex-row gap-6 w-auto`}>
                    {/* Ringkasan Hari Ini */}
                    <div className={`p-4 w-1/2   rounded-lg shadow ${typoDark}`}>
                        <h3 className="text-md font-semibold mb-4">Ringkasan hari ini</h3>
                        <div className='flex flex-row gap-4 '>

                            <div className={`mb-4 w-auto flex flex-col  px-3 py-2 rounded-xl justify-center ${isDarkMode ? 'bg-gray-400' : 'bg-gray-200'}`}>
                                {/* Label with dropdown toggle */}
                                <label className=" text-sm font-medium mb-2  flex items-center justify-between cursor-pointer " onClick={toggleDropdown}>
                                    <span className='flex-col flex'>
                                        Device
                                        <p className='font-extrabold text-sm'>{`${selectedDevice}`}</p>
                                    </span>

                                    {isDropdownOpen ? (
                                        <ChevronUp className="ml-2 w-4 h-4" />
                                    ) : (
                                        <ChevronDown className="ml-2 w-4 h-4" />
                                    )}
                                </label>

                                {/* Dropdown options */}
                                {isDropdownOpen && (
                                    <div className={`w-auto ${isDarkMode ? 'bg-gray-500 hover:text-gray-900' : 'bg-gray-300 '} border border-gray-300 rounded-xl mt-2`}>
                                        <div
                                            className={`p-2 ${isDarkMode ? 'text-white hover:text-gray-900 rounded-xl hover:bg-gray-100 hover:font-semibold' : 'hover:bg-gray-500 hover:text-white rounded-xl'} cursor-pointer`}
                                            onClick={() => {
                                                setSelectedDevice('RMX3263');
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            RMX3263
                                        </div>
                                        <div
                                            className={`p-2 ${isDarkMode ? 'text-white hover:text-gray-900  rounded-xl hover:bg-gray-100' : 'hover:bg-gray-500 hover:text-white rounded-xl'} cursor-pointer`}
                                            onClick={() => {
                                                setSelectedDevice('Another Device');
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Another Device
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={`mb-4 w-2/6  rounded-xl py-2 px-2  ${isDarkMode ? 'bg-gray-400' : 'bg-gray-200'}`}>
                                <label className="block text-sm font-medium  mb-2">Aktif sejak</label>
                                <input
                                    type="text"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className={`w-full p-2 border font-bold rounded-md ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300 border-gray-300'}`}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-sm font-semibold">Pesan Keluar</p>
                                <p className="text-xl font-bold">24</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Pesan Masuk</p>
                                <p className="text-xl font-bold">7</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Pesan Gagal</p>
                                <p className="text-xl font-bold">0</p>
                            </div>
                        </div>
                    </div>

                    {/* Total Statistik Pesan */}
                    <div className={`p-4 rounded-lg w-full shadow ${typoDark}`}>
                        <h3 className="text-md font-semibold mb-4">Total statistik pesan</h3>
                        <div className='flex flex-row justify-between items-center  gap-5'>
                            <div className='flex gap-5'>
                                <div className="flex flex-col gap-4 ">

                                    <div>
                                        <p className="text-sm font-semibold">Total Pesan Gagal</p>
                                        <p className="text-xl font-bold">8</p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold">Total Pesan Masuk</p>
                                        <p className="text-xl font-bold">23</p>
                                    </div>


                                </div>
                                <div className='mb-12'>
                                    <p className="text-sm font-semibold ">Total Pesan Keluar</p>
                                    <p className="text-xl font-bold">45</p>
                                </div>
                            </div>
                            {/* ChartJS Doughnut Chart */}
                            <div className=" w-40 h-40 mb-5 pb-4 ">
                                <Doughnut data={data} options={options} />
                            </div>

                        </div>
                    </div>

                </div>
                {/* Grafik Guys */}
                <div className="p-4 bg-gray-50 rounded-lg shadow">
                    <h3 className="text-md font-semibold mb-4">Grafik chart perjam</h3>
                    <GrafikChart />
                </div>
                {/* Trend Grafik Guys */}
                <div className="p-4 bg-gray-50 rounded-lg shadow">
                    <h3 className="text-md font-semibold mb-4">Trend Interaksi Pesan</h3>
                    <TrendChart />
                </div>
            </div>
        </>

    );
};

export default Analitik;
