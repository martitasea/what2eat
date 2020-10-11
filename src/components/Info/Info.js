import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <p class={this.props.class}>{this.props.text}</p>
        <img src={this.props.src} alt={this.props.alt} id={this.props.id}/>
      </main>
    );
  }
}

export default Info;