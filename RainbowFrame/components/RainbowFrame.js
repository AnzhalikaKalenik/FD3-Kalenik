import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

// import VotesQuestion from './VotesQuestion';
// import VotesAnswer from './VotesAnswer';

// import colors from '../colors.json';
var colors= require('../colors.json');

class RainbowFrame extends React.Component {

  // static propTypes = {
  //   colors:PropTypes.arrayOf(
  //     PropTypes.shape({
  //       code: PropTypes.number.isRequired,
  //       text: PropTypes.string.isRequired,
  //     })
  //   )
  // };

  render() {

    let curr = this.props.children;
    for (let color of this.props.colors){
      curr = <div style={{border:"solid 1px"+color}}>{curr}</div>
    }

    return curr;
  }
}

export default RainbowFrame;
