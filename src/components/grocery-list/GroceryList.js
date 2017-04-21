import React, { Component } from 'react';
import './GroceryList.css';
import List from '../list/List';
import Form from '../form/Form';
import FooterControls from '../footer-controls/FooterControls';
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
        <List groceries={ this.props.list } onCheck={ this.props.actions.check } onRemoveItem={ this.props.actions.remove } />
        <FooterControls removeChecked={ this.props.actions.clear } />
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