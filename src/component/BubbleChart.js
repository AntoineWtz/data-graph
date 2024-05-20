import React from 'react';
import ChartComponent from '../Chart';

const BubbleChart = () => {
    const data = {
        datasets: [{
            label: 'My Bubble Dataset',
            data: [
                { x: 20, y: 30, r: 15 },
                { x: 40, y: 10, r: 10 },
                { x: 30, y: 20, r: 25 },
            ],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }],
    };

    return <ChartComponent type="bubble" data={data} />;
};

export default BubbleChart;
