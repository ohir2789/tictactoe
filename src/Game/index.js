import React, { Component } from 'react';
import Player from '../Player';
import Board from '../Board';
import winner from './winner';
import setTurn from './turn';
import randomPlayer from './random-player';
import Restart from './Restart';
import {GameElement} from './styles';
import {X,O} from '../Sign/signs';

class Game extends Component {
  constructor(props){
      super(props);
      this.state = {
          player1 : {
              sign:X,
              score:0
          },
          player2: {
              sign:O,
              score:0
          },
          turn:randomPlayer(),
          winner:false,
          onRestart: null
      }
  }

  playTurn(readOnlyBoard){
    const win = winner(readOnlyBoard);

    if(win) this.setWinner(win);
    else this.setState({turn:setTurn(this.state.turn)});
  }

  setWinner(win){
        this.addScore(win);
        this.setState({winner:true});
  }

  setOnRestart(callback){
      this.setState({onRestart:callback});
  }

  addScore(winner){
      if(winner==X){
        this.addToPlayer('player1');
      } else {
        this.addToPlayer('player2');
      }
  }

  addToPlayer(player){
        let playerToAdd = this.state[player];
        playerToAdd.score++;
        let playerObj = {};
        playerObj[player] = playerToAdd;
        this.setState(playerObj);
  }

  restart(){
    this.setState({turn:randomPlayer()});
    this.setState({winner:false});
    this.state.onRestart();
  }

  render() {
    return (
      <GameElement>
       <Player player={this.state.player1} turn={this.state.turn}/>
       <Player player={this.state.player2} turn={this.state.turn}/>
       <hr/>
       <Board onRestart={(callback)=>this.setOnRestart(callback)} playTurn={(readOnlyBoard)=>this.playTurn(readOnlyBoard)} tool={()=>this.state.turn}/>
        <Restart winner={this.state.winner} onRestart={()=>this.restart()}/>
      </GameElement>
    );
  }
}

export default Game;
