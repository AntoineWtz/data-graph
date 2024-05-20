import React from 'react';
import ChartComponent from '../Chart';

const ScatterChart = () => {
    const data = {
        datasets: [{
            label: 'My Scatter Dataset',
            data: [
                { x: 65, y: 75 },
                { x: 59, y: 49 },
                { x: 80, y: 90 },
                { x: 81, y: 29 },
                { x: 56, y: 36 },
                { x: 55, y: 25 },
                { x: 40, y: 18 },
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
        }],
    };

    return <ChartComponent type="scatter" data={data} />;
};

export default ScatterChart;
