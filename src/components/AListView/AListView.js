import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '../Button/Button';
import Files from '../Files/Files';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import dataRestaurants from '../../data/dataRestaurants.js';
import './AListView.css';

class AListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      params: this.props.params,
      restaurants: dataRestaurants
    };
    this.getRestaurants=this.getRestaurants.bind(this)
  }

  getRestaurants(){
    return this.state.restaurants.map((restaurant)=>(
      <Files 
      className="file"
      name={restaurant.Restaurant}
      web={restaurant.Web}
      address={restaurant.Address[0]}
      phone="915395856"
      latitude={restaurant.latitude}
      longitude={restaurant.lomgitude}
      />
    ))

  }

 render() {
    return (
      <div>
        <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <SubHeader params={this.state.params}/>
        {this.getRestaurants()}
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