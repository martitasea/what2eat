import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Info from '../Info/Info';
import Button from '../Button/Button';
import './AIntro.css';

class AIntro extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

   render() {
    return (
      <div>
      <Link to="/onBoarding01">
      <main className="intro" >
        <Info
        classP="grey" 
        text="No te conformes con la recomendación sobre un restaurante, pregúntate"  
        src="media/logo-big-blue.svg" 
        alt="Logo what2eat"
        classImage="logoBig"/>
      </main>
      <footer className="one">
        <Button className="big blue" text="REGÍSTRATE"/>
        <Button className="big ghost" text="INICIA SESIÓN"/>
      </footer> 
      </Link>
      </div>
    );
  }
}

export default AIntro;