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
          src="./media/menuHamburguesa.svg" 
          alt="Logo What2Eat"/>
        <img 
          className="logoLittle"
          src="./media/logo-lit-blue.svg" 
          alt="Logo What2Eat"/>
      </header>
    );
  }
}

export default HeadLittle;