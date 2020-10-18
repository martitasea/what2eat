import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './HeadLittle.css';

class HeadLittle extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <header>
        {/* <Link to="/">
          <img 
            className="menu"
            src={process.env.PUBLIC_URL +"/media/home-circle.svg" }
            alt="Logo What2Eat"/>
        </Link> */}
        <Link to="/">
          <img 
            className="logoLittle"
            src={process.env.PUBLIC_URL +" /media/logo-lit-blue.svg" }
            alt="Logo What2Eat"/>
        </Link>
      </header>
    );
  }
}

export default HeadLittle;