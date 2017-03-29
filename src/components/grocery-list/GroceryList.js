import React, { Component } from 'react';
import './GroceryList.css';
import List from '../list/List';
import Form from '../form/Form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listActions from '../../state/actions/list';

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="grocery-list">
        <Form onAddItem={ this.props.actions.addItem } />
        <List groceries={ this.props.list } onCheck={ this.props.actions.check }/>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    list: state.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(listActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList);