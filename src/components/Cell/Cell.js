import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  constructor() {
    super();
    this.state = {
      isAliveClassName: "",
      wasAlive: false,
    }
    this.changeCellState = this.changeCellState.bind(this);
  }

  changeCellState() {
    if (this.state.wasAlive) {
      this.setState({
        isAliveClassName: ""
      })
    } else {
      this.setState({
        isAliveClassName: "is-alive"
      })
    }
    this.setState({
      wasAlive: !this.state.wasAlive
    });
    console.log(`(${this.props.x}, ${this.props.y}) was clicked`);
  }

  render() {
    return (
      <div className={"Cell " + this.state.isAliveClassName} 
        onClick={this.changeCellState}>
      </div>
    );
  }
}

export default Cell;
