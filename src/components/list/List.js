import React, { Component } from 'react';
import './List.css';
import ListItem from './list-item/ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChanged = this.handleCheckboxChanged.bind(this);
  }

  handleCheckboxChanged(item) {
    this.props.onCheck(item);
  }

  render() {
    let listItems = this.props.groceries.map((item) => <ListItem item={ item } onCheck={ this.handleCheckboxChanged } key={ item.id } />);
    return (
        <ul className="list">
            { listItems }
        </ul>
    );
  }
}

export default List;
