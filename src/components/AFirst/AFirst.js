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
      <main className="blue">
        <Info 
          classP="blue"
          text="Reto de tripulaciones Alba, Jose Luis, David y Marta"  src="media/logo-big-white.svg" 
          alt="Logo What2Eat" 
          classImage="logoBig"/>
      </main>
    );
  }
}

export default AFirst;