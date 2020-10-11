import React, { Component } from 'react';
import './HeadLittle.css';

class HeadLittle extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <img src={this.props.rutaMenu} alt={this.props.altMenu}/>
        <img src={this.props.rutaLogo} alt={this.props.altLogo}/>
      </header>
    );
  }
}

export default HeadLittle;