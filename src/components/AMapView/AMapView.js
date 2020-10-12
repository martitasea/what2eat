import React, { Component } from 'react';
import HeadLittle from '../HeadLittle/HeadLittle';
import MapContent from '../MapContent/MapContent';
import Files from '../Files/Files';
import './AMapView.css';
import Button from '../Button/Button';

class AMapView extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

   render() {
    return (
      <main>
        <HeadLittle rutaLogo="./media/logo-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <MapContent/>
        <Files/>
        <Button class="little ghost" text="SALTAR"/>
        <Button class="little blue" text="SIGUIENTE"/>
      </main>
    );
  }
}

export default AMapView;