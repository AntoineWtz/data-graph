import React from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const ChartComponent = ({ type, data }) => {
    const chartRef = React.useRef(null);

    React.useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: type,
            data: data,
        });
    }, [type, data]);

    return (
        <div className="chart-wrapper">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default ChartComponent;
