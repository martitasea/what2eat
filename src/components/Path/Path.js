import React, { Component } from 'react';
import { withLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-graphhopper";
import './Path.css';




class Path extends Component {
  constructor(props){
    super(props);
    this.state = {
      vehicle: "foot",
    };
  }
	

  componentDidMount(){
	this.createLeafletElement();
  }

  createLeafletElement() {
	 console.log(this.props)
		let apiKey = "c04f2fd2-8161-4d7f-898a-827d1fdc05bc";
		let leafletElement = L.Routing.control({
            "waypoints": 
            [
				L.latLng(this.props.pointA.lat,this.props.pointA.lon),
				L.latLng(this.props.pointB.lat,this.props.pointB.lon),
			],
			"router": new L.Routing.graphHopper(apiKey,{"urlParameters": {"vehicle": "foot","locale": "es"
		}}),
			"lineOptions": {
				"styles": [{"color": "#eaac33",	"opacity": 0.6,	"weight": 5	}],
	 			"addWaypoints": false
			 },
			//  to remove all markers of routing
			 createMarker: function() { return null; },
	 		"routeWhileDragging": true,
			"addWaypoints": true,
	 		//Arrastrar y cambiar de posición
	 		"draggableWaypoints": true,
	 		//put on screen the route
	 		"fitSelectedRoutes": 'true',
			"showAlternatives": false,
			
		 }).addTo(this.props.map.leafletElement);
		//  console.log(leafletElement)
		leafletElement.hide();
		// leafletElement.on("routeselected", (e) => console.log(e.route.instructions));
	}

	render() {
		return false
	}
}

export default  withLeaflet(Path);