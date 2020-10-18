import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '../Button/Button';
import Files from '../Files/Files';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import data from '../../data/data.js';
import './AListView.css';
import { MyConsumer } from '../userContext';

class AListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: data
      // filter: []
    };
    this.getDishes=this.getDishes.bind(this)
  }

  getDishes(contxt){
    console.log("Categoria")
    console.log(contxt.category)
    console.log("Rango")
    console.log(contxt.price)
    return  this.state.dishes.filter((dish)=>
      (dish.style.toUpperCase()===contxt.category.toUpperCase()&&
      (dish.rangeprice.toString()===(contxt.price.toString()))&&
      (
          (dish.name.includes(contxt.dish))||
          (dish.name.includes(contxt.dish.toLowerCase()))||
          (dish.name.includes(contxt.dish.toUpperCase()))
      ))).map((dish)=>
        <Files 
        className="file"
        restaurantName={dish.restaurantName}
        name={dish.name}
        address={dish.address[0]}
        phone={dish.telephone}
        latitude={dish.latitude}
        longitude={dish.longitude}
        price={dish.price}
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
                 }/>
        )
    }

 render() {
    return (
      <section>
        <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <SubHeader/>
        <MyConsumer>
          {(contxt)=>(
            <div className="centro">
              {this.getDishes(contxt)}
            </div>
          )}
        </MyConsumer>
        <footer className="two">
            <Link to="/listview">
          <Button className="little ghost" text="LISTA"/>
            </Link>
            <Link to="/mapview">
          <Button className="little blue" text="MAPA"/>
            </Link>
        </footer>
      </section>
    );
  }
}
export default AListView;





