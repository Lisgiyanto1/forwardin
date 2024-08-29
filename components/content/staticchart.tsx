'use client'
import "chart.js/auto";
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useDarkMode } from '@/context/DarkMode';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticsChart = () => {
    const isDarkMode = useDarkMode();
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
        <div className={`${isDarkMode? '': 'border-2 border-gray-200'}`}>

<div className={`p-4 rounded-lg shadow `}>
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

            {/* ChartJS Doughnut Chart */}
            <div className="mt-4 w-40 h-40 mx-auto">
                <Doughnut data={data} options={options} />
            </div>
        </div>
        </div>
        
    );
}

export default StatisticsChart;
