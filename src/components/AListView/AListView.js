import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '../Button/Button';
import Files from '../Files/Files';
import HeadLittle from '../HeadLittle/HeadLittle';
import SubHeader from '../SubHeader/SubHeader';
import data from '../../data/data.js';
import './AListView.css';
import CategoryContext from '../userContext';

class AListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      params: this.props.params,
      dishes: data,
      currentStyle: []
    };
    // this.getDishes=this.getDishes.bind(this)
  }
  // static contextType = CategoryContext;

 render() {
  console.log(this.context)
    return (
      <div>
        <HeadLittle rutaLogo="./media/logo-lit-blue.svg" altLogo="Logo what2eat" rutaMenu="./media/menuHamburguesa.svg" altMenu="Menú"/> 
        <SubHeader params={this.state.params}/>
        {/* {this.getDishes()} */}
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






  // getStyle(){
  //   // const currentStyle=[]
  //   return this.state.merge.filter((meal)=>(
  //     this.state.currentStyle = meal.style==="Pizza"))
  // };

  // getDishes(){
  //   return this.state.currentStyle.map((dish)=>(
  //     <Files
  //       className="file"
  //       name={}
  //   ))}
  //     <Files 
  //     className="file"
  //     name={dish.dishesRestaurant}
      // web={dish.Web}
      // address={dish.Address[0]}
      // phone={dish.Phone}
      // latitude={dish.latitude}
      // longitude={dish.lomgitude}
      // ranking={dish.Ranking}
      // starState={
      //   (dish.Ranking===1)
      // ?process.env.PUBLIC_URL +"./media/star01.svg"
      // :(dish.Ranking===2)
      // ?process.env.PUBLIC_URL +"./media/star02.svg"
      // :(dish.Ranking===3)
      // ?process.env.PUBLIC_URL +"./media/star03.svg"
      // :(dish.Ranking===4)
      // ?process.env.PUBLIC_URL +"./media/star04.svg"
      // :(dish.Ranking===5)
      // ?process.env.PUBLIC_URL +"./media/star05.svg"
      // :process.env.PUBLIC_URL +"./media/star00.svg"}
  //     />
  //   ))

  // }


