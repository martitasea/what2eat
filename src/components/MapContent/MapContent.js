import React, { Component } from 'react';
import {L, Routing} from 'leaflet';
import { Map, TileLayer, Marker, Popup, Circle, Polyline} from "react-leaflet";
import {UserIcon} from "./userIcon.js"
import {RestaurantIcon} from "./restaurantIcon.js"
import './MapContent.css';
import dataDishes from "../../data/data.js";
import moreRestaurants from "../../data/json_mas_rest";
import { MyConsumer } from '../userContext.js';
import {geolocated} from 'react-geolocated';
import Path from '../Path/Path.js';

const defaultLat=40.4215507;
const defaultLong=-3.692684799999999;



class MapContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurantsOk: dataDishes,
      restaurantsFake: moreRestaurants,
      restMarker: 'map-pin.svg',
      lat:40.422346,
      lon:  -3.696573,
      // pointBlat:40.422050,
      // pointBlong:-3.697562,
      renderRoute:true,
      //Restaurante CARNE>Solomillo

    }
    this.getDishesOk = this.getDishesOk.bind(this);
  }
  
  getInfo(contxt){
    console.log("Has hecho click en el PopUp")
    // console.log(this.state.restaurantsOk.restaurantName)
    // contxt.changeLatitudeB(43)
    // contxt.changeLongitudeB(-3)
    }

    handleChangeDish(event){
      let dish=event.target.value;
      // console.log(dish);
      this.setState({dish: dish})
    }
  
  getDishesOk(contxt) {
    return this.state.restaurantsOk.filter((restaurant) => 
       (
          (restaurant.style.toUpperCase()===contxt.category.toUpperCase())&&
       (
          (restaurant.name.includes(contxt.dish))||
          (restaurant.name.includes(contxt.dish.toLowerCase()))||
          (restaurant.name.includes(contxt.dish.toUpperCase()))
       )
       )
       ).map((restaurant)=>
      <Marker position={[restaurant.latitude, restaurant.longitude]} icon={RestaurantIcon}>
        <Popup
         closeButton={false}
        //  onOpen={this.getInfo}
        >
          <section className="popupcontent">
            <article className="rankingprice">
              <div>
                <img className="iconStar" src={"./media/star"+restaurant.ranking+".svg"} alt="Ranking en estrellas"/>
              </div>
              <p className="priceName">{restaurant.price} €</p>
              {/* <button className="goMap">
                      <img className="iconGo" src="./media/go.svg" alt="" onClick={this.getInfo}/>
              </button> */}
            </article>
            <article className="name">
              <p className="dishName">{restaurant.name.toUpperCase()}</p>
              <div className="restaurant">
                  <p className="restaurantName">{restaurant.restaurantName}</p>
                  <div className="divphone">
                    <img className="iconRestaurant2" src="./media/phone.svg" alt="Teléfono"/>
                    <p className="phone">{restaurant.telephone}</p>
                  </div>
                    
              </div>
            </article>
          </section>
        </Popup>
      </Marker>
       )
  }

  instantiateMap(map) {
		if (!this.state.map) {
			this.setState({ ...this.state, "map": map });
		}
	}
  render() {
    const longitude=this.props.coords? 
    this.props.coords.longitude
    : defaultLong
  
    const latitude=this.props.coords? 
    this.props.coords.latitude
    : defaultLat


return(
      <MyConsumer>
         {(contxt)=>
          (
            <section>
               <Map center={[latitude, longitude]} zoom={80} ref={this.instantiateMap.bind(this)}>
                 {this.getDishesOk(contxt)}
              
               <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png"
                // attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
              />
               <Circle
                center={{lat:latitude, lng: longitude}}
                fillColor="#eaac33"
                fillOpacity="0.35"
                radius={1000}
                stroke={false}
                color="#eaac33"
              />
              {/* {this.state.renderRoute}&& */}
              <Path pointA={{ lat: latitude, lon: longitude}} pointB={{lat:this.state.lat, lon:this.state.lon}} map={this.state.map} />
             {/* <Path pointA={{ lat: latitude, lon: longitude}} pointB={{lat:contxt.pointBlat, lon:contxt.poinBlon}} map={this.state.map} />       */}
               {
             !this.props.coords?
             <div>Loading...</div>
             :<Marker 
               position={[latitude, longitude]} 
               icon={UserIcon}
               />
           }
              </Map>
            </section>
          )
          }
      </MyConsumer>
    );
}
}

export default geolocated({
  positionOptions:{
    enableHighAccuracy: false
  },
  userDecisionTimeout: 10000
})(MapContent);








 {/* <Polyline 
            positions={[
              [40.421659, -3.692885],
              [40.421485, -3.692888],
              [40.421389, -3.692636],
              [40.421878, -3.692424],
              [40.421952, -3.696319],
              [40.422072, -3.697352],
              [40.422121, -3.697530],
              [40.422050, -3.697562]
            ]}
            fill-rule="evenodd"
            color="#eaac33"
              /> */}

                // getDishesFake() {
  //   return this.state.restaurantsFake.map((restaurant) => (
  //     <Marker position={[restaurant.latitude, restaurant.longitude]} icon={RestaurantIcon}
  //     >
  //       <Popup 
  //       closeButton={false}
  //       >
  //         <p>{restaurant.restaurantName.toUpperCase()}</p>
  //       </Popup>
  //     </Marker>
  //   ));
  // }

  // getDishesOk() {
//   return this.state.restaurantsOk.map((restaurant) => (
//     <Marker position={[restaurant.originlatitude, restaurant.originlongitude]} icon={RestaurantIcon}>
//       <Popup
//        closeButton={false}
//        onOpen={this.getInfo}
//       >{restaurant.restaurantName.toUpperCase()}</Popup>
//     </Marker>
//   ));
// }