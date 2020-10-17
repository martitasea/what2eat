import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import Form from '../Form/Form';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import './AFilter.css';

class AFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <main>
        <HeadLittle rutaLogo="./media/logo-big-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <SubHeader/>  
        <Form/>
      </main>
    );
  }
}

export default AFilter;