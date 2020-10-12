import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="context">
        <button class={this.props.class}>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;