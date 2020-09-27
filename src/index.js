import React from 'react';
import ReactDOM from 'react-dom';

import './google-analytics';
import { Home } from './pages/home';

import './App.sass';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
