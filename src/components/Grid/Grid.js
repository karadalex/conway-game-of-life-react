import React, { Component } from 'react';
import './Grid.css';
import Cell from '../Cell/Cell';

class Grid extends Component {
  constructor() {
    super();
    var grid = new Array(50).fill(new Array(100).fill(0));
    this.state = {
      grid
    };
  }

  render() {
    return (
      <div className="Grid">
        {this.state.grid.map(row => (
          <div className="row">
            {row.map(cell => (
              <Cell/>
            ))}
          </div>  
        ))}
      </div>
    );
  }
}

export default Grid;
