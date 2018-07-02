import React, { Component } from 'react';
import './Cell.css';
import { changeCellState } from '../../actions';
import { connect } from 'react-redux';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAliveClassName: ""
    }
    this.changeCellState = this.changeCellState.bind(this);
  }

  changeCellState() {
    if (this.props.wasAlive) {
      this.setState({
        isAliveClassName: ""
      })
    } else {
      this.setState({
        isAliveClassName: "is-alive"
      })
    }
    this.props.dispatch(changeCellState(this.props.x, this.props.y));
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

export default connect()(Cell);
