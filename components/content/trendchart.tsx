import { Line } from 'react-chartjs-2';

export const TrendChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Trend Interaksi Pesan',
                data: [5, 4.5, 4.7, 4.2, 4.1, 4, 3.8, 3.6, 3.4, 3.2, 3, 2.9],
                fill: false,
                borderColor: 'rgba(0, 119, 255, 1)',
                tension: 0.1,
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
                    text: 'Month',
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
