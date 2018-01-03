import React, { Component } from 'react';
import Sign from '../Sign';
import Score from './Score';
import {PlayerElement} from './styles';

class Player extends Component {
  render() {
      const {sign,score} = this.props.player;
    return (
      <PlayerElement>
        <Sign sign={sign}/>
        <Score score={score}/>
      </PlayerElement>
    );
  }
}

export default Player;
