import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import data from "../../data/data.js";
import moreRestaurants from "../../data/json_mas_rest";
import './MapContent.css';
import {L} from 'leaflet';

class MapContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurantsOk: data,
      restaurantsFake: moreRestaurants,
      currentPosition: [40.422705,-3.697594],
      restMarker: 'map-pin.svg'
    }
    this.getDishesOk = this.getDishesOk.bind(this);
    this.getDishesFake = this.getDishesFake.bind(this);
  }
  

  
  getDishesOk() {
    return this.state.restaurantsOk.map((restaurant) => (
      <Marker 
        position={[restaurant.latitude, restaurant.longitude]}
        // icon={customMarker}
      >
        <Popup>{restaurant.restaurantName}</Popup>
      </Marker>
    ));
  }
  getDishesFake() {
    return this.state.restaurantsFake.map((restaurant) => (
      <Marker 
        position={[restaurant.latitude, restaurant.longitude]}
        // icon={customMarker}
      >
        <Popup>{restaurant.restaurantName}</Popup>
      </Marker>
    ));
  }

  render() {
    return (
      <section>
        <Map center={this.state.currentPosition} zoom={150}>
          {this.getDishesOk()}
          {this.getDishesFake()}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png"
            // attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
          />
          <Marker 
            position={this.state.currentPosition}/>
        </Map>
      </section>
    );
  }
}

export default MapContent;

// getMarkers() {
//   const customMarker = new L.icon({
//     iconUrl: require("./map-pin.svg"),
//     iconSize: [40,45] })
//   return this.state.dishes.map((restaurant) => (
//     <Marker 
//       position={[restaurant.latitude, restaurant.longitude]}
//       icon={customMarker}
//     >
//       <Popup>{restaurant.restaurantName}</Popup>
//     </Marker>
//   ));
// }