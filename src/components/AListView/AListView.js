import React, { Component } from 'react';
import Button from '../Button/Button';
import Files from '../Files/Files';
import HeadLittle from '../HeadLittle/HeadLittle';
import './AListView.css';

class AListView extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

 render() {
    return (
      <div>
        <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <Files/>
        <footer>
        <Button class="little ghost" text="SALTAR"/>
        <Button class="little blue" text="SIGUIENTE"/>
        </footer>
      </div>
    );
  }
}

export default AListView;