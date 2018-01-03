import React, { Component } from 'react';
import res from '../images/restart.png';
import {RestartElement} from './styles';

class Restart extends Component {
  render() {
    return (
      <span >
        {this.props.winner ? <RestartElement onClick={()=>this.props.onRestart()} src={res}/>: null}
      </span>
    );
  }
}

export default Restart;
