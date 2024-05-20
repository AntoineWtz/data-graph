import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Graphs and diagrams examples</h1>
      <div className="chart-container">
        <BarChart />
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
};

export default App;
