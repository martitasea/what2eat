import React, { Component } from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import HeadLittle from '../HeadLittle/HeadLittle';
import './AFilter.css';

class AFilter extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

   render() {
    return (
      <main>
        <HeadLittle rutaLogo="./media/logo-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <Form/>
        <Button class="big blue" text="PRUEBA"/>
      </main>
    );
  }
}

export default AFilter;