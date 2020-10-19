import React, { Component } from 'react';
import {L} from 'leaflet';
import { Map, TileLayer, Marker, Popup, Circle, Polygon } from "react-leaflet";
import {UserIcon} from "./userIcon.js"
import {RestaurantIcon} from "./restaurantIcon.js"
import './MapContent.css';
import dataDishes from "../../data/data.js";
import moreRestaurants from "../../data/json_mas_rest";
import { MyConsumer } from '../userContext.js';
import Path from '../Path/Path.js';

class MapContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurantsOk: dataDishes,
      restaurantsFake: moreRestaurants,
      originlatitude: 40.422705,
      originlongitude:-3.697594,
      currentPosition: [40.422705,-3.697594],
      restMarker: 'map-pin.svg',

    }
    this.getDishesOk = this.getDishesOk.bind(this);
    this.getDishesFake = this.getDishesFake.bind(this);
    this.getInfo=this.getInfo.bind(this);
  }
  
  getInfo(e){
    console.log("Has hecho click en el PopUp")
  }

  
  getDishesOk(contxt) {
    return this.state.restaurantsOk.filter((restaurant) => 
       (
          restaurant.style.toUpperCase()===contxt.category.toUpperCase()&&
          (restaurant.rangeprice.toString()===(contxt.price.toString()))&&
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
         onOpen={this.getInfo}
        >{restaurant.restaurantName.toUpperCase()}</Popup>
      </Marker>
       )
  }
  getDishesFake() {
    return this.state.restaurantsFake.map((restaurant) => (
      <Marker position={[restaurant.latitude, restaurant.longitude]} icon={RestaurantIcon}
      >
        <Popup
          closeButton={false}
          // openPopup={console.log("Popup abierto")}
        >{restaurant.restaurantName.toUpperCase()}</Popup>
      </Marker>
    ));
  }

  render() {
    return (
      <section>
        <Map center={this.state.currentPosition} zoom={80}>
        <MyConsumer>
          {(contxt)=>(
            <div>
              {this.getDishesOk(contxt)}
            </div>
          )}
        </MyConsumer>
          {/* {this.getDishesOk()} */}
          {/* {this.getDishesFake()} */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png"
            // attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
          />
          <MyConsumer>
          {(contxt)=>(
            <div className="centro">
            {console.log("distancia")}
            {(console.log(contxt.dist))}
              <Circle
                center={{lat:this.state.originlatitude, lng: this.state.originlongitude}}
                fillColor="#0c4261"
                opacity="10"
                radius={contxt.dist}
                stroke={true}
              />
            </div>
          )}
          </MyConsumer>
          {/* <Polygon 
            positions={[
              [43.774361,  -9.177109],
              [43.774361, 3.186964],
              [35.815033,  -1.896236],
              [35.815033,  -9.177109],
            ]}
            fill-rule="evenodd"
            fillColor="gray"
          /> */}
          {/* <Path originlatitude={this.state.originlatitude} originlongitude={this.state.originlongitude}/> */}
          <Marker 
            position={this.state.currentPosition} 
            icon={UserIcon}
            />
        </Map>
      </section>
    );
  }
}

export default MapContent;


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