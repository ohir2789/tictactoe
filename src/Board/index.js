import React, { Component } from 'react';
import Cube from '../Cube';

class Board extends Component {
  constructor(props){
      super(props);
      this.state = {
        gameBoard : Array(9).fill('')
      }
      this.props.onRestart(()=>this.restart());
  }

  restart(){
      this.setState({gameBoard:Array(9).fill('')})
  }

  playedTurn(index){
      if(!this.state.gameBoard[index]){
          this.setTool(index);
          this.props.playTurn(this.state.gameBoard);
          this.checkTie();
      }
  }

  checkTie(){
     if(this.state.gameBoard.find(tool=>!tool)==undefined) this.restart();
  }

  setTool(index){
    let arr = this.state.gameBoard;
    arr[index]=this.props.tool();
    this.setState({gameBoard:arr});
  }

  render() {
    return (
      <div>
          {
              this.state.gameBoard.map((cube,i)=> {
                  if((i+1)%3===0){
                      return (
                          <span key={i}>
                            <Cube turn={()=>this.playedTurn(i)} sign={cube}/>
                            <div></div>
                          </span>
                    )
                  } else return <Cube turn={()=>this.playedTurn(i)} key={i} sign={cube}/>;
              })
          }
      </div>
    );
  }
}

export default Board;
