import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
       margin:0;
       padding:0;
       box-sizing:border-box 
       }`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <Global />
    <App />
    <ToastContainer autoClose={1000} />
  </BrowserRouter>
);
