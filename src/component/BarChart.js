import React from 'react';
import ChartComponent from '../Chart';

const BarChart = () => {
    const data = {
        labels: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
        datasets: [{
            label: 'Quantity',
            data: [10, 5, 20, 7, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        }],
    };

    console.log("Data for BarChart:", data);

    return <ChartComponent type="bar" data={data} />;
};

export default BarChart;
