import React, { Component } from 'react';
import './FooterControls.css';

class FooterControls extends Component {

  removeCheckedItems() {
      this.props.removeChecked();
  }

  render() {
    return (
        <div className="controls">
            <button onClick={ e => this.removeCheckedItems() } >Remove All Completed</button>
        </div>
    );
  }
}

export default FooterControls;
