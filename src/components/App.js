import React, { Component } from 'react';
import logo from '../logo.svg';
import AddTodo from '../containers/AddTodo'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <AddTodo />
      </div>
    );
  }
}

export default App;
