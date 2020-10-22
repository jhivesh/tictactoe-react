import React, { Component } from 'react'
import Square from "./../Components/Square";
import "./../index.css"; 

export default class Board extends Component {
    constructor(props){super(props) ; 
    this.state={
        squares : Array(9).fill(null),
        xisNext : true
     };   }
     
     handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xisNext ? "X" : "O";
        this.setState({
            squares:squares,
            xisNext : !this.state.xisNext,
        })
    }
    renderSquare(i) {
        return (<Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)}/>);
      }

    

    render() {
        const title = "Tic-Tac-Toe";
        let winner = calculateWinner(this.state.squares);   
        
        let status; 
        if (winner) {
            status =  "Congratulation you won !!! " + winner;  
        }else{
            status = "Next Player  : - " + (this.state.xisNext ? "X" : "O")
            
        }
      return (
      <div class="container">{title}
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
        )
    }
}
function calculateWinner(squares){
    const lines = [ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    for (let i = 0; i < lines.length; i++) {
        let [a,b,c] = lines[i];
        // if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
        //     return squares[a]
        // }
        // return null;
        if (squares[a] === squares[b] && squares[b] === squares[c]) {
          return squares[a]
        }
        
    }

    
}  