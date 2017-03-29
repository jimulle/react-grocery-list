import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemCheckboxChange = this.handleItemCheckboxChange.bind(this);
  }

  handleItemCheckboxChange(event) {
    this.props.onCheck(this.props.item);
  }

  render() {
    return (
      <li className="list-item">
        <input type="checkbox" checked={ this.props.item.purchased } onChange={ (event)=> this.handleItemCheckboxChange(event) } />
        &nbsp;
        { this.props.item.name }
        &nbsp;
        <span className="quantity">(x{ this.props.item.quantity })</span>
      </li>
    );
  }
}

export default ListItem;
