import React, { useRef, useEffect } from 'react';
import ChartJs from 'chart.js';

import { useEventsContext } from 'contexts/EventsContext';
import Styles from './Chart.module.scss';

export const Chart: React.FC = () => {
  const { events } = useEventsContext();
  const chart = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chart.current) return;

    const context = chart.current.getContext('2d');

    if (context === null) return;

    const myChart = new ChartJs(context, {
      type: 'line',
      data: {
        labels: ['pokemon', 'youtube'],
        datasets: [
          {
            label: 'pendrive',
            backgroundColor: '#FFFFFF',
            borderColor: '#999999',
            data: [1, 2],
            fill: false,
          },
          {
            label: 'charmander',
            backgroundColor: '#FFFFFF',
            borderColor: '#660099',
            data: [3, 1],
            fill: false,
          },
        ],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [chart.current]);

  return (
    <div>
      Chart
      <canvas width="400" height="400" ref={chart} />
    </div>
  );
};
