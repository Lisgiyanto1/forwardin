import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const GrafikChart = () => {
    const data = {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        datasets: [
            {
                label: 'Grafik Chart Perjam',
                data: [3, 2, 2.5, 3.5, 4, 3, 2.8, 3.2, 3.5, 3.8, 4, 3.7, 3.6, 3.3, 3.2, 2.9, 2.8, 2.7, 2.5, 2.3, 2.1, 2, 2.2, 2.3],
                fill: true,
                backgroundColor: 'rgba(0, 119, 255, 0.2)',
                borderColor: 'rgba(0, 119, 255, 1)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time (Hour)',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Value',
                },
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};
