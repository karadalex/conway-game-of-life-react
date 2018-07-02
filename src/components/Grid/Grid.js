import React, { Component } from 'react';
import './Grid.css';
import Cell from '../Cell/Cell';
import { connect } from 'react-redux';

class Grid extends Component {
  render() {
    return (
      <div className="Grid">
        {this.props.grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <Cell 
                key={`(${colIndex}, ${rowIndex})`} 
                x={colIndex}
                y={rowIndex}
                wasAlive={this.props.grid[rowIndex][colIndex]}
              />
            ))}
          </div>  
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grid: state.grid
  };
}

export default connect(mapStateToProps)(Grid);
