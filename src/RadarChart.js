import React from 'react';
import ChartComponent from './Chart';

const RadarChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My Radar Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
        }],
    };

    return <ChartComponent type="radar" data={data} />;
};

export default RadarChart;
