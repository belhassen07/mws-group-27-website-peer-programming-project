import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './main-router';

ReactDOM.render(
  <Router>
    <div>
      <App />
      <MainRouter />
    </div>
  </Router>,
  document.getElementById('root')
);
