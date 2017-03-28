import React, { Component } from 'react';
import './GroceryList.css';
import List from '../list/List';

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
          { id: '001', name: 'apple', quantity: 3, purchased: false },
          { id: '002', name: 'banana', quantity: 6, purchased: true },
          { id: '004', name: 'green bell pepper', quantity: 1, purchased: false }
      ]
    };
    
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(item, value) {
    var index = this.state.groceries.findIndex(x=> x.id === item.id);
    if (index > -1) {
      this.setState({
        groceries: [
          ...this.state.groceries.slice(0,index),
          Object.assign({}, this.state.groceries[index], { purchased: value }),
          ...this.state.groceries.slice(index+1)
        ]
      });
    } else {
      // error
      console.log('item does not exist...')
    }
  }

  render() {
    return (
      <div className="grocery-list">
        <List groceries={ this.state.groceries } onHandleCheckboxChange={ this.handleCheckboxChange }/>
      </div>
    );
  }
}

export default GroceryList;