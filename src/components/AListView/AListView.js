import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '../Button/Button';
import Files from '../Files/Files';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import data from '../../data/data.js';
import './AListView.css';
import { MyConsumer } from '../userContext';
import Info from '../Info/Info';

class AListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: data
    };
    this.getDishes=this.getDishes.bind(this)
  }


  getDishes(contxt){
    // console.log(this.state.dishes)
    let platos = this.state.dishes.filter((dish)=>
      ((dish.style.toUpperCase()===contxt.category.toUpperCase())
      &&
      // (dish.rangeprice===contxt.price)&&
      (
          (dish.name.includes(contxt.dish))||
          (dish.name.includes(contxt.dish.toLowerCase()))||
          (dish.name.includes(contxt.dish.toUpperCase()))
      //Order dishes by ranking
      )
      )
      ).sort(function(a, b){
            let x=a["ranking"],
            y=b["ranking"];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
          })
          if(platos.length>0){
            return platos.map((dish)=>{
              return <Files
                className="shadow file column"
               restaurantName={dish.restaurantName.toUpperCase()}
               name={dish.name}
                address={dish.address[0]}
                phone={dish.telephone}
                latitude={dish.latitude}
                longitude={dish.longitude}
                price={dish.price}
                euroState={
                        (dish.rangeprice===1)
                          ?process.env.PUBLIC_URL +"./media/euro01.svg"
                          :(dish.rangeprice===2)
                            ?process.env.PUBLIC_URL +"./media/euro02.svg"
                            :process.env.PUBLIC_URL +"./media/euro03.svg"
                           }
                      // <img className="iconStar" src={"./media/star"+restaurant.ranking+".svg"} alt="Ranking en estrellas"/>
                      starState={process.env.PUBLIC_URL +"./media/star"+dish.ranking+".svg"}
              />
            })
          }else{
            return (
              <div>
              <MyConsumer>
               {(contxt)=>(
                <p className="detail">Plato: {contxt.dish} - Dirección: {contxt.address} - Distancia {contxt.dist} km</p>
               )
              }
              </MyConsumer>
              <Info 
                classImage="emptyImg" 
                src={process.env.PUBLIC_URL +"./media/empty.jpg"} 
                alt="No results"
                classP="emptyP blue"
                text="NO HAY PLATOS CON ESAS CARACTERÍSTICAS"/>
              </div>
            )
            // <img className="empty" src={process.env.PUBLIC_URL +"./media/empty.jpg"} alt=""/>
          }
  }

 render() {
    return (
      <section>
        <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <SubHeader/>
        <MyConsumer>
          {(contxt)=>(
            <div className="centro files">
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