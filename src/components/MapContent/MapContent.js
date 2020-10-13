import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import dataRestaurants from "../../data/dataRestaurants.js";
import './MapContent.css';

class MapContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurants: dataRestaurants,
      currentPosition: [40.422705,-3.697594]
    };
    this.getMarkers = this.getMarkers.bind(this);
  }
  getMarkers() {
    return this.state.restaurants.map((restaurant) => (
      <Marker position={[restaurant.latitude, restaurant.lomgitude]}>
        <Popup>{restaurant.Restaurant}</Popup>
      </Marker>
    ));
  }
  render() {
    return (
      <section>
        <Map center={this.state.currentPosition} zoom={150}>
        {/* <Map center={[dataRestaurants.latitude, dataRestaurants.lomgitude]} zoom={15}> */}
          {this.getMarkers()}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png"
            // attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
          />
          <Marker position={this.state.currentPosition}></Marker>
        </Map>
      </section>
    );
  }
}

export default MapContent;