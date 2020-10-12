import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './SubHeader.css';

class SubHeader extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <Link to="/catmenu">
      <section class="moreCat">
        <img className="iconPlus" src="./media/plus-circle.svg" alt=""/>
        <p className="pPlus">ARROCERÍA</p>
      </section>
      </Link>
    );
  }
}

export default SubHeader;