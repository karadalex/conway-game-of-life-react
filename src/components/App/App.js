import React, { Component } from 'react';
import './App.css';
import Grid from '../Grid/Grid';
import Control from '../Control/Control';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Control/>
        <Grid/>
      </div>
    );
  }
}

export default App;
