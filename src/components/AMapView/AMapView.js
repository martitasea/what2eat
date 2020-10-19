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
    // this.getDishesMap=this.getDishesMap.bind(this)
  }

  // getDishesMap(contxt){
  //   console.log(this.state.dishes)



  render() {
    return (
      <div>
          <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
          <SubHeader/>
          <MapContent/>
          <Files className="fileMap"/>
          {/* <MyConsumer>
          {(contxt)=>(
            <div className="centro">
              {this.getDishesMap(contxt)}
            </div>
          )}
        </MyConsumer> */}
          <footer className="two">
          <Link to="/listview">
            <Button className="little blue" text="LISTA"/>
          </Link>
          <Link to="/mapview">
            <Button className="little ghost" text="MAPA"/>
          </Link>
          </footer>
      </div>
    );
  }
}
export default AMapView;