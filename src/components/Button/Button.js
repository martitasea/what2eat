import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <button>{this.props.text}</button>
      </footer>
    );
  }
}

export default Button;