import React, { Component } from 'react';
import './App.css';
import GroceryList from './grocery-list/GroceryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Shopping List</h2>
        </div>
        <p className="App-intro">
          Add items to your grocery list...
        </p>
        <GroceryList />
      </div>
    );
  }
}

export default App;
