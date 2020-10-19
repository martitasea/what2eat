import React, { Component } from 'react';
import {Link} from "react-router-dom";
import HeadLittle from '../HeadLittle/HeadLittle';
import './NotFound.css';

class NotFound extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <div className="column">
        <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <div className="notD">
        <h2 className="notH">Oooohh!</h2>
        <img src="./media/404.svg" alt="Error 404"/>
        <h1 className="notH">ME TEMO QUE ESTA NO ES LA PÁGINA QUE ESTABAS BUSCANDO...</h1>
        <footer className="one">
        <Link to="/">
        <button className="ghost big error">VOLVER A HOME</button>
        </Link>
        <Link to="/categorymenu">
        <button className="blue big error">ELIGE TIPO DE PLATO</button>
        </Link>
        </footer>
        </div>
      </div>
    );
  }
}

export default NotFound;