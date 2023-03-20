import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'//
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';

import * as bootstrap from 'bootstrap'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root') 
);