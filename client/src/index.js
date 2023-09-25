// Julian Haurin - Portfolio Website Client Side- 9/13/23

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='h-full'>
      <App />

    </div> 
    </BrowserRouter>  
  </React.StrictMode>
);


