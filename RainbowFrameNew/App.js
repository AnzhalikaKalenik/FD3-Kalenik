import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

// let colorsArr=require('./colors.json');
import colors from './colors.json';

ReactDOM.render(
  <RainbowFrame colors={colors}>
    <div style={{textAlign:"center", fontWeight:"bold", fontSize:"35px", padding:"15px"}}>Hello!</div>
  </RainbowFrame>
  , document.getElementById('container') 
);