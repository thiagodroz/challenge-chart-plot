import React from 'react';

import { useGenerateChart } from 'hooks/chartHook';
import Styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const generateChart = useGenerateChart();

  return (
    <footer className={Styles.Component}>
      <button type="button" className={Styles.Button} onClick={generateChart}>
        Generate Chart
      </button>
    </footer>
  );
};
