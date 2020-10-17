import React, { Component } from 'react';
import {Link} from "react-router-dom";
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import MapContent from '../MapContent/MapContent';
import Files from '../Files/Files';
import Button from '../Button/Button';
import './AMapView.css';

class AMapView extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }



  render() {
    console.log("esto"+this.context)
    return (
      <div>
          <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
          <SubHeader params={this.state.params}/>
          <MapContent/>
          <footer className="two">
          <Link to="/listview">
            <Button className="little blue" text="LISTA"/>
          </Link>
          <Link to="/mapview">
            <Button className="little ghost" text="MAPA"/>
          </Link>
          </footer>
          <Files className="fileMap"/>
      </div>
    );
  }
}
export default AMapView;