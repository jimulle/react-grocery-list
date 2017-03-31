import React, { Component } from 'react';
import './List.css';
import ListItem from './list-item/ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChanged = this.handleCheckboxChanged.bind(this);
    this.handleClearChecked = this.handleClearChecked.bind(this);
  }

  handleCheckboxChanged(item) {
    this.props.onCheck(item);
  }

  handleClearChecked() {
    this.props.onClear();
  }

  render() {
    let listItems = this.props.groceries.map((item) => <ListItem item={ item } onCheck={ this.handleCheckboxChanged } key={ item.id } />);
    return (
      <div>
        <ul className="list">
            { listItems }
        </ul>
        <button onClick={ () => this.handleClearChecked() } >Clear Checked</button>
      </div>
    );
  }
}

export default List;
