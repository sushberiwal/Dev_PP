import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IntersectionDemo from './IntersectionObserver/IntersectionDemo';
import Buttons from './MaterialUI/Buttons';
import Grids from "./MaterialUI/Grids";
import { Grid } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <IntersectionDemo></IntersectionDemo> */}
    {/* <Buttons></Buttons> */}
    {/* <Grids></Grids> */}
  </React.StrictMode>,
  document.getElementById('root')
);
