import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import Admin from './AdminScreen/Admin'
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    {/* <Admin/> */}
  </React.StrictMode>
);

