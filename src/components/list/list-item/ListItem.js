import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemCheckboxChange = this.handleItemCheckboxChange.bind(this);
    this.handleRemoveAnItem = this.handleRemoveAnItem.bind(this);
  }

  handleItemCheckboxChange(event) {
    this.props.onCheck(this.props.item);
  }

  handleRemoveAnItem(event) {
    this.props.onRemove(this.props.item);
  }

  render() {
    let removeItem = () => {
      if (this.props.item.purchased) {
        return (
          <button onClick={ (e) => { this.handleRemoveAnItem(e) } }>x</button>
        );
      }
    }
    return (
      <li className="list-item">
        <input type="checkbox" checked={ this.props.item.purchased } onChange={ (event)=> this.handleItemCheckboxChange(event) } />
        &nbsp;
        <span>{ this.props.item.name }</span>
        &nbsp;
        <span className="quantity">(x{ this.props.item.quantity })</span>
        &nbsp;
        { removeItem() }
      </li>
    );
  }
}

export default ListItem;
