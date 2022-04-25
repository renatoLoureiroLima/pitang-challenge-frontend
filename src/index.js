import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import Router from './router';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Router />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
