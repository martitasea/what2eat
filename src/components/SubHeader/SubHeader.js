import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './SubHeader.css';

class SubHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      // params: this.props.match.params.cat
    };
 }

  render() {
    return (
      <Link to="/categorymenu">
      <section class="moreCat">
        <img className="iconPlus" src={process.env.PUBLIC_URL +"/media/plus-circle.svg"} alt=""/>
        <p className="pPlus">{this.props.params}</p>
        {/* <p className="pPlus">{this.props.params.toUpperCase()}</p> */}
      </section>
      </Link>
    );
  }
}

export default SubHeader;