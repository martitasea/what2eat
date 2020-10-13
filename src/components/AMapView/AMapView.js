import React, { Component } from 'react';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import MapContent from '../MapContent/MapContent';
import Files from '../Files/Files';
import Button from '../Button/Button';
import './AMapView.css';

class AMapView extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

   render() {
    return (
      <div>
        <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <SubHeader/>
        <MapContent/>
        <footer className="two">
          <Button class="little blue" text="LISTA"/>
          <Button class="little ghost" text="MAPA"/>
        </footer>
        <Files className="fileMap"/>
      </div>
    );
  }
}

export default AMapView;