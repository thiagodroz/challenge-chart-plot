import React from 'react';

import Styles from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={Styles.Component}>
    <h1 className={Styles.Title}>Thiago Nogueira's Challenge</h1>
  </header>
);
