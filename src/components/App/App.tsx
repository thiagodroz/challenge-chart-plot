import React from 'react';

import { Chart } from 'components/Chart';
import { Editor } from 'components/Editor';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import Styles from './App.module.scss';

export const App = () => (
  <div className={Styles.Component}>
    <Header />
    <div className={Styles.Content}>
      <Editor />
      <Chart />
    </div>
    <Footer />
  </div>
);
