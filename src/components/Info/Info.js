import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Info.css';

class Info extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="center">
          <p className={this.props.className}>{this.props.text}</p>
        <Link to="/intro">
          <img src={this.props.src} alt={this.props.alt}/>
        </Link>
      </div>
    );
  }
}

export default Info;