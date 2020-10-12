import React, { Component } from 'react';
import Categories from '../Categories/Categories';
import HeadLittle from '../HeadLittle/HeadLittle';
import './ACatMenu.css';

class ACatMenu extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <main>
          <HeadLittle classMenu="menu" rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
          <Categories/>
      </main>
    );
  }
}

export default ACatMenu;