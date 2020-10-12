import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <div className={this.props.className}>
        <img 
          className="icon" 
          src={this.props.src} 
          alt={this.props.alt}
          />
        <input 
          className="box"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          min="0"
          max="3"
          step="1"/>
      </div>
    );
  }
}

export default Question;