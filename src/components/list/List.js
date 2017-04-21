import React, { Component } from 'react';
import './List.css';
import ListItem from './list-item/ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChanged = this.handleCheckboxChanged.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleCheckboxChanged(item) {
    this.props.onCheck(item);
  }

  handleRemoveItem(item) {
    this.props.onRemoveItem(item);
  }

  render() {
    let listItems = this.props.groceries.map(
      (item) => 
        (<ListItem
          item={ item }
          onCheck={ this.handleCheckboxChanged }
          onRemove={ this.handleRemoveItem }
          key={ item.id }
        />)
    );
    return (
      <div>
        <ul className="list">
            { listItems }
        </ul>
      </div>
    );
  }
}

export default List;
