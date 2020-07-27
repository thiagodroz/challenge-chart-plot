import React from 'react';

import Styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={Styles.Component}>
    <button type="button" className={Styles.Button}>
      Generate Chart
    </button>
  </footer>
);
