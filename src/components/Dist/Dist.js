import React, { Component } from 'react';
import './Dist.css';

class Dist extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="question">
      <img 
          className="icon" 
          src={this.props.src} 
          alt={this.props.alt}
      />
      <select className="box" name="dist">
        <option value="1">1 km</option>
        <option value="5">5 km</option>
        <option value="10">10 km</option>
        <option value="50">50 km</option>
      </select>
      </div>
    );
  }
}

export default Dist;