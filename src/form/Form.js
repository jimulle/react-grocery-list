import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        quantity: ''
    };
    this.addItemToList = this.addItemToList.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleNameChange(e) {
      this.setState({
          name: e.target.value
      });
  }

  handleQuantityChange(e) {
      this.setState({
          quantity: e.target.value
      });
  }

  addItemToList() {
    this.props.onAddItemToList(this.state);
    this.setState({
        name: '',
        quantity: ''
    });
  }

  render() {
    return (
        <div className="form">
            <label>
                Item:
                <input type="text" value={ this.state.name } onChange={ e => this.handleNameChange(e) } />
            </label>
            &nbsp;
            <label>
                Quantity:
                <input type="number" value={ this.state.quantity } onChange={ e => this.handleQuantityChange(e) } />
            </label>
            &nbsp;
            <button onClick={ e => this.addItemToList() } >Add to list</button>
        </div>
    );
  }
}

export default Form;
