import React, { Component } from 'react';
import Button from '../Button/Button';
import Info from '../Info/Info';
import './AIntro.css';

class AIntro extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

   render() {
    return (
      <>
      <main>
        <Info className="intro" text="No te conformes con la recomendación sobre un restaurante, pregúntate"  src="media/logo-blue.svg" alt="Logo what2eat"/>
      </main>
      <footer>
        <Button class="big blue" text="REGÍSTRATE"/>
        <Button class="big ghost" text="INICIA SESIÓN"/>
      </footer> 
      </>
    );
  }
}

export default AIntro;