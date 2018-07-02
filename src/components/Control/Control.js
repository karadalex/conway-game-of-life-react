import React, { Component } from 'react';
import './Control.css';
import { connect } from 'react-redux';
import { goToPreviousState, goToNextState} from '../../actions';

class Control extends Component {
  constructor() {
    super();
    this.onClickRun = this.onClickRun.bind(this);
    this.onClickPrevious = this.onClickPrevious.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickClear = this.onClickClear.bind(this);
  }

  onClickRun() {
    // TODO
  }

  onClickPrevious() {
    this.props.dispatch(goToPreviousState());
  }

  onClickNext() {
    this.props.dispatch(goToNextState());
  }

  onClickClear() {
    // TODO
  }

  render() {
    return (
      <div className="Control">
        <p>
          Click on boxes to set the initial state and press "Run" to start
        </p>
        <button onClick={this.onClickRun}> Run </button>
        <button onClick={this.onClickPrevious}> Previous State </button>
        <button onClick={this.onClickNext}> Next State </button>
        <button onClick={this.onClickClear}> Clear </button>
      </div>
    );
  }
}

export default connect()(Control);
