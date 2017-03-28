import React, { Component } from 'react';
import './List.css';
import ListItem from './list-item/ListItem';

class List extends Component {
  render() {
    const listItems = this.props.groceries.map((item) => <ListItem item={ item } key={ item.name + item.quantity } />);
    return (
        <ul className="list">
            { listItems }
        </ul>
    );
  }
}

export default List;
