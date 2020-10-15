import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '../Button/Button';
import Files from '../Files/Files';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import data from '../../data/data.js';
import './AListView.css';

class AListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: data
    };
    this.getDishes=this.getDishes.bind(this)
  }
  
  getDishes(){
    return this.state.dishes.map((dish)=>(
      <Files
        className="file"
        restaurantName={dish.restaurantName}
        name={dish.name}
        address={dish.address[0]}
        phone={dish.telephone}
        latitude={dish.latitude}
        longitude={dish.longitude}
        starState={
          (dish.ranking===1)
            ?process.env.PUBLIC_URL +"./media/star01.svg"
            :(dish.ranking===2)
              ?process.env.PUBLIC_URL +"./media/star02.svg"
              :(dish.ranking===3)
                ?process.env.PUBLIC_URL +"./media/star03.svg"
                :(dish.ranking===4)
                  ?process.env.PUBLIC_URL +"./media/star04.svg"
                  :(dish.ranking===5)
                    ?process.env.PUBLIC_URL +"./media/star05.svg"
                    :process.env.PUBLIC_URL +"./media/star00.svg"
        }
      />
    ))
  }

 render() {
  console.log(this.context)
    return (
      <div>
        <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <SubHeader params={this.state.params}/>
        {this.getDishes()}
        <footer className="two">
          <Link to="/listview">
        <Button className="little ghost" text="LISTA"/>
          </Link>
          <Link to="/mapview">
        <Button className="little blue" text="MAPA"/>
          </Link>
        </footer>
      </div>
    );
  }
}
export default AListView;








