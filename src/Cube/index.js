import React, { Component } from 'react';
import Sign from '../Sign';
import {CubeElement} from './styles';

class Cube extends Component {
  render() {
    return (
      <CubeElement onClick={this.props.turn}>
        <Sign sign={this.props.sign}/>
      </CubeElement>
    );
  }
}

export default Cube;
