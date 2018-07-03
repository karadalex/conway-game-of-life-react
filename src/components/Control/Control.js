import React, { Component } from 'react';
import './Control.css';
import { connect } from 'react-redux';
import { goToPreviousState, goToNextState, clearGrid} from '../../actions';

class Control extends Component {
  constructor() {
    super();
    this.state = {
      run: false
    }
    this.runAsyncNext = this.runAsyncNext.bind(this);
    this.onClickRun = this.onClickRun.bind(this);
    this.onClickStop = this.onClickStop.bind(this);
    this.onClickPrevious = this.onClickPrevious.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickClear = this.onClickClear.bind(this);
  }

  runAsyncNext() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.onClickNext());
      }, 500);
    });
  }

  async onClickRun() {
    await this.setState({run: true});
    while (this.state.run) {
      await this.runAsyncNext();
    }
  }

  onClickStop() {
    this.setState({run: false});
  }

  onClickPrevious() {
    this.props.dispatch(goToPreviousState());
  }

  onClickNext() {
    this.props.dispatch(goToNextState());
  }

  onClickClear() {
    this.props.dispatch(clearGrid());
  }

  render() {
    return (
      <div className="Control">
        <p>
          Click on boxes to set the initial state and press "Run" to start
        </p>
        <button onClick={this.onClickRun}> Run </button>
        <button onClick={this.onClickStop}> Stop </button>
        <button onClick={this.onClickPrevious}> Previous State </button>
        <button onClick={this.onClickNext}> Next State </button>
        <button onClick={this.onClickClear}> Clear </button>
      </div>
    );
  }
}

export default connect()(Control);
