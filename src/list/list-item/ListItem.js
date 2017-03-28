import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <li className="list-item">
        <input type="checkbox" checked={ this.props.item.purchased } />
        &nbsp;
        { this.props.item.name }
        &nbsp;
        <span className="quantity">(x{ this.props.item.quantity })</span>
      </li>
    );
  }
}

export default ListItem;
