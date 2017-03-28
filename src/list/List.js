import React, { Component } from 'react';
import './List.css';
import ListItem from './list-item/ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChanged = this.handleCheckboxChanged.bind(this);
  }

  handleCheckboxChanged(item, value) {
    this.props.onHandleCheckboxChange(item, value);
  }

  render() {
    let listItems = this.props.groceries.map((item) => <ListItem item={ item } onHandleItemCheckboxChange={ this.handleCheckboxChanged } key={ item.name + item.quantity } />);
    return (
        <ul className="list">
            { listItems }
        </ul>
    );
  }
}

export default List;
