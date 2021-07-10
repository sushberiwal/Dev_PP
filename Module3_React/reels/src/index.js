import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IntersectionDemo from './IntersectionObserver/IntersectionDemo';
import Buttons from './MaterialUI/Buttons';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <IntersectionDemo></IntersectionDemo> */}
    <Buttons></Buttons>
  </React.StrictMode>,
  document.getElementById('root')
);
