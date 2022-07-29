import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

// let colorsArr=require('./colors.json');
import colorsArr from './colors.json';

ReactDOM.render(
  <RainbowFrame 
    colors={colorsArr}
  />
  , document.getElementById('container') 
);

