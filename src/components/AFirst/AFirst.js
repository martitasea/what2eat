import React, { Component } from 'react';
import Info from "../Info/Info";
import './AFirst.css';

class AFirst extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  
  render() {
    return (
      <body className="first">
        <Info className="first" text="Reto de tripulaciones Alba, Jose Luis, David y Marta"  src="media/logo-white.svg" alt="Logo What2Eat" />
      </body>
    );
  }
}

export default AFirst;