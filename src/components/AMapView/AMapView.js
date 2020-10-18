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
  //   return  this.state.dishes.filter((dish)=>
  //     (dish.style.toUpperCase()===contxt.category.toUpperCase()&&
  //     (dish.rangeprice.toString()===(contxt.price.toString()))&&
  //     (
  //         (dish.name.includes(contxt.dish))||
  //         (dish.name.includes(contxt.dish.toLowerCase()))||
  //         (dish.name.includes(contxt.dish.toUpperCase()))
  //     ))) 
  //       <Files 
  //       className="shadow file column"
  //       restaurantName={dish.restaurantName}
  //       name={dish.name}
  //       address={dish.address[0]}
  //       phone={dish.telephone}
  //       latitude={dish.latitude}
  //       longitude={dish.longitude}
  //       price={dish.price}
  //       euroState={
  //         (dish.rangeprice===1)
  //           ?process.env.PUBLIC_URL +"./media/euro01.svg"
  //           :(dish.rangeprice===2)
  //             ?process.env.PUBLIC_URL +"./media/euro02.svg"
  //             :process.env.PUBLIC_URL +"./media/euro03.svg"
  //       }
  //       starState={
  //         (dish.ranking===1)
  //           ?process.env.PUBLIC_URL +"./media/star01.svg"
  //           :(dish.ranking===2)
  //             ?process.env.PUBLIC_URL +"./media/star02.svg"
  //             :(dish.ranking===3)
  //               ?process.env.PUBLIC_URL +"./media/star03.svg"
  //               :(dish.ranking===4)
  //                 ?process.env.PUBLIC_URL +"./media/star04.svg"
  //                 :(dish.ranking===5)
  //                   ?process.env.PUBLIC_URL +"./media/star05.svg"
  //                   :process.env.PUBLIC_URL +"./media/star00.svg"
  //                }/>
  //       )
  //   }


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