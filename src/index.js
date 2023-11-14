import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';

ReactDOM.render(
  // React.StrictMode is a tool for highlighting potential problems in your application during development. It helps you find and fix problems early.
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);