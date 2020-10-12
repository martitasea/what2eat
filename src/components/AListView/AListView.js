import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '../Button/Button';
import Files from '../Files/Files';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
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
        <SubHeader/>
        <Files/>
        <Files/>
        <Files/>
        <Files/>
        <Files/>
        <Files/>
        <footer className="two">
          <Link to="/listview">
        <Button class="little ghost" text="LISTA"/>
          </Link>
          <Link to="/mapview">
        <Button class="little blue" text="MAPA"/>
          </Link>
        </footer>
      </div>
    );
  }
}

export default AListView;