import React, { useState, useRef, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ButtonGroup, Grid } from '@mui/material';
import SelectButton from '../Buttons/SelectButton';

// Generate 100 data points with random values
const generateData = (numDays) => {
  const data = [];
  const startDate = new Date('2023-01-01');
  for (let i = 0; i < numDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    const formattedDate = currentDate.toISOString().split('T')[0];
    data.push({
      name: formattedDate,
      uv: Math.floor(Math.random() * 10000),
      pv: Math.floor(Math.random() * 10000),
      amt: Math.floor(Math.random() * 10000),
    });
  }
  return data;
};

const data = generateData(100);

// Filter function to get data based on selected range
const filterData = (range) => {
  switch (range) {
    case '1D':
      return data.slice(-1); // Last day
    case '3D':
      return data.slice(-3); // Last 3 days
    case '1M':
      return data.slice(-30); // Last 30 days
    case '1Y':
      return data.slice(-365); // Last year
    case '5Y':
      return data; // Assuming data has 5 years
    default:
      return data;
  }
};

const TradingChart = () => {
  const [timeRange, setTimeRange] = useState('1D');
  const [zoomLevel, setZoomLevel] = useState(1);
  const chartRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const filteredData = filterData(timeRange);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault(); // Prevent the default scrolling behavior
      if (e.deltaY < 0) {
        // Zoom in
        setZoomLevel((prevZoomLevel) => Math.min(prevZoomLevel + 0.1, 5));
      } else {
        // Zoom out
        setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 0.1, 1));
      }
    };

    const chart = chartRef.current;
    chart.addEventListener('wheel', handleWheel);

    return () => {
      chart.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - chartRef.current.offsetLeft);
    setScrollLeft(chartRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - chartRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Scroll-fast
    chartRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Grid item xs={12}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <SelectButton
          onClick={() => setTimeRange('1D')}
          selected={timeRange === '1D'}
        >
          1D
        </SelectButton>
        <SelectButton
          onClick={() => setTimeRange('3D')}
          selected={timeRange === '3D'}
        >
          3D
        </SelectButton>
        <SelectButton
          onClick={() => setTimeRange('1M')}
          selected={timeRange === '1M'}
        >
          1M
        </SelectButton>
        <SelectButton
          onClick={() => setTimeRange('1Y')}
          selected={timeRange === '1Y'}
        >
          1Y
        </SelectButton>
        <SelectButton
          onClick={() => setTimeRange('5Y')}
          selected={timeRange === '5Y'}
        >
          5Y
        </SelectButton>
      </div>
      <div
        className="charts"
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          overflowX: 'scroll',
          overflowY: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer and Edge
        }}
        ref={chartRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div style={{ width: `${2000 / zoomLevel}px` }}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={filteredData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Grid>
  );
};

export default TradingChart;
