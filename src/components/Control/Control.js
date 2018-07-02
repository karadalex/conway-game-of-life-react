import React, { Component } from 'react';
import './Control.css';

class Control extends Component {
  constructor() {
    super();
    this.runGameOfLife = this.runGameOfLife.bind(this);
    this.clearGrid = this.clearGrid.bind(this);
  }

  runGameOfLife() {
    // TODO
  }

  clearGrid() {
    // TODO
  }

  render() {
    return (
      <div className="Control">
        <p>
          Click on boxes to set the initial state and press "Run" to start
        </p>
        <button onClick={this.runGameOfLife}> Run </button>
        <button onClick={this.clearGrid}> Clear </button>
      </div>
    );
  }
}

export default Control;
