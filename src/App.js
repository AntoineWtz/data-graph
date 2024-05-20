import React from 'react';
import BarChart from './component/BarChart';
import LineChart from './component/LineChart';
import PieChart from './component/PieChart';
import RadarChart from './component/RadarChart';
import DoughnutChart from './component/DoughnutChart';
import PolarAreaChart from './component/PolarAreaChart';
import BubbleChart from './component/BubbleChart';
import ScatterChart from './component/ScatterChart';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Graphs and diagrams examples</h1>
      <div className="chart-container">
        <BarChart />
        <LineChart />
        <BubbleChart />
        <ScatterChart />
        <PieChart />
        <RadarChart />
        <DoughnutChart />
        <PolarAreaChart />
      </div>
    </div>
  );
};

export default App;
