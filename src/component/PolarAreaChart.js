import React from 'react';
import ChartComponent from '../Chart';

const PolarAreaChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'My Polar Area Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
            ],
            borderWidth: 1,
        }],
    };

    return <ChartComponent type="polarArea" data={data} />;
};

export default PolarAreaChart;
