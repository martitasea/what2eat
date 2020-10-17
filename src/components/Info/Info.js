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
          <p className={this.props.classP}>{this.props.text}</p>
        <Link to="/onBoarding">
          <img className={this.props.classImage} src={this.props.src} alt={this.props.alt}/>
        </Link>
      </div>
    );
  }
}

export default Info;