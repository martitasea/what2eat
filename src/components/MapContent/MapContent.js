import React, { Component } from 'react';
import { Map, TileLayer, Marker } from "react-leaflet";
import dataRestaurants from "../dataRestaurants.js";
import './MapContent.css';

class MapContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurants: dataRestaurants
    };
    // this.getMarkers = this.getMarkers.bind(this);
  }
  // getMarkers() {
  //   return this.state.restaurants.map((restaurant) => (
  //     <Marker position={[restaurant.latitude, restaurant.lomgitude]}>
  //       <Popup>{restaurant.Restaurant}</Popup>
  //     </Marker>
  //   ));
  // }
  render() {
    return (
      <section>
        <Map center={[40.7,-3]} zoom={50}>
        {/* <Map center={[dataRestaurants.latitude, dataRestaurants.lomgitude]} zoom={50}> */}
          {/* {this.getMarkers()} */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png"
            attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
          />
          <Marker position={[40,-3]}></Marker>
        </Map>
      </section>
    );
  }
}

export default MapContent;