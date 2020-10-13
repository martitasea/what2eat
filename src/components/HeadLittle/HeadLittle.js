import React, { Component } from 'react';
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
        <img 
          className="menu"
          src={process.env.PUBLIC_URL +"/media/menuHamburguesa.svg" }
          alt="Logo What2Eat"/>
        <img 
          className="logoLittle"
          src={process.env.PUBLIC_URL +" /media/logo-lit-blue.svg" }
          alt="Logo What2Eat"/>
      </header>
    );
  }
}

export default HeadLittle;