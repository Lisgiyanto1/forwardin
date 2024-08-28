import { useState } from 'react';
import { Dropdown } from 'flowbite-react'; // Assuming you're using Flowbite for dropdowns
import { GrafikChart } from './grafikchart';
import { TrendChart } from './trendchart';

const Analitik = () => {
    const [selectedDevice, setSelectedDevice] = useState('RMX3263');
    const [selectedDate, setSelectedDate] = useState('29.8.2023');

    return (
        <>
            <div className="w-full p-6 flex  flex-col gap-10 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold ">Analitik</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Ringkasan Hari Ini */}
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-md font-semibold mb-4">Ringkasan hari ini</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Device</label>
                            <Dropdown
                                label={selectedDevice}
                                inline={true}
                                className="w-full"
                            >
                                <Dropdown.Item onClick={() => setSelectedDevice('RMX3263')}>RMX3263</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedDevice('Another Device')}>Another Device</Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Aktif sejak</label>
                            <input
                                type="text"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                readOnly
                            />
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
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-md font-semibold mb-4">Total statistik pesan</h3>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-semibold">Total Pesan Keluar</p>
                                <p className="text-xl font-bold">45</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Total Pesan Gagal</p>
                                <p className="text-xl font-bold">8</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Total Pesan Masuk</p>
                                <p className="text-xl font-bold">23</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="relative w-32 h-32 mx-auto">

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="rounded-full border-8 border-blue-500 border-r-gray-300 border-b-green-500 w-full h-full"></div>
                                    </div>
                                </div>
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
