import React from 'react';
import ChartComponent from './Chart';

const PieChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'My Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
            ],
            hoverOffset: 4,
        }],
    };

    return <ChartComponent type="pie" data={data} />;
};

export default PieChart;
