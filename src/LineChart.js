import React from 'react';
import ChartComponent from './Chart';

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        }],
    };

    return <ChartComponent type="line" data={data} />;
};

export default LineChart;
