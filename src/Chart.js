import React from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const ChartComponent = ({ type, data, title }) => {
    const chartRef = React.useRef(null);
    const chartInstanceRef = React.useRef(null);

    React.useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: type,
            data: data,
        });

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [type, data]);

    return (
        <div className="chart-card">
            <div className="chart-card-content">
                <h2>{title}</h2>
                <div className="chart-wrapper">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;