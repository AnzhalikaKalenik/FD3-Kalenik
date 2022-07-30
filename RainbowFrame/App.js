import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

// let colorsArr=require('./colors.json');
import colors from './colors.json';

ReactDOM.render(
  <RainbowFrame colors={colors}>
    Hello!
  </RainbowFrame>
  , document.getElementById('container') 
);

