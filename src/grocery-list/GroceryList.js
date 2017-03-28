import React, { Component } from 'react';
import './GroceryList.css';
import List from '../list/List';

class GroceryList extends Component {
  render() {
    const groceries = [
            { name: 'apple', quantity: 3, purchased: false },
            { name: 'banana', quantity: 6, purchased: true },
            { name: 'green bell pepper', quantity: 1, purchased: false }
        ];
    return (
      <div className="grocery-list">
        <List groceries={ groceries }/>
      </div>
    );
  }
}

export default GroceryList;