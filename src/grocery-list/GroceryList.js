import React, { Component } from 'react';
import './GroceryList.css';
import List from '../list/List';
import Form from '../form/Form';

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
    this.handleAddItemToList = this.handleAddItemToList.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleAddItemToList(item) {
    var id = this.state.groceries
      .map(i => parseInt(i.id, 10))
      .reduce((max, i) => { return max > i ? max : i; }, 0);
    id = id.toString().split('').length >= 3 ? '' + (id + 1) : (id.toString().split('').length === 2 ? '0' + (id + 1) : '00' + (id + 1));
    this.setState({
      groceries: [
        ...this.state.groceries,
        Object.assign({ id: id, purchased: false }, item)
      ]
    })
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
        <Form onAddItemToList={ this.handleAddItemToList } />
        <List groceries={ this.state.groceries } onHandleCheckboxChange={ this.handleCheckboxChange }/>
      </div>
    );
  }
}

export default GroceryList;