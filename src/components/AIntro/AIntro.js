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
      <main className="intro" >
        <Info
        classP="grey" 
        text="No te conformes con la recomendación sobre un restaurante, pregúntate"  
        src="media/logo-big-blue.svg" 
        alt="Logo what2eat"
        classImage="logoBig"/>
      </main>
      <footer className="one">
        <Button class="big blue" text="REGÍSTRATE"/>
        <Button class="big ghost" text="INICIA SESIÓN"/>
      </footer> 
      </>
    );
  }
}

export default AIntro;