import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/App';
import { CodeProvider } from 'contexts/CodeContext';
import { EventsProvider } from 'contexts/EventsContext';

import * as serviceWorker from './serviceWorker';
import 'typeface-source-sans-pro';
import 'typeface-source-code-pro';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <CodeProvider>
      <EventsProvider>
        <App />
      </EventsProvider>
    </CodeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
