// import React, { Component } from 'react';
// import { withLeaflet } from "react-leaflet";
// import L from "leaflet";
// import "leaflet-routing-machine";
// import "lrm-graphhopper";
// import './Path.css';



// class Path extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       vehicle: "foot",
// 	  color: "#0c4261",
// 	  endlatitude: 40.4211900848,
// 	  endlongitude: -3.6968397888,
//     };
//   }

//   componentDidMount(){
//     this.createLeafletElement();
//   }

//   createLeafletElement() {
// 		let apiKey = "c04f2fd2-8161-4d7f-898a-827d1fdc05bc";
// 		let leafletElement = L.Routing.control({
//             "waypoints": 
//             [
// 				L.latLng(this.props.originlatitude, this.props.originlongitude),
// 				L.latLng(this.state.endlatitude, this.state.endlongitude),
// 			],
//             "router": new L.Routing.graphHopper(apiKey, 
//             {
// 				"urlParameters": {
// 					"vehicle": "foot",
// 					"locale": "es"
// 				}
// 			}),
// 			"lineOptions": {
//                 "styles": 
//                 [
// 					{
// 						"color": "#eaac33",
// 						"opacity": 0.6,
// 						"weight": 4
// 					}
// 	 			],
// 	 			"addWaypoints": false
// 	 		},
// 	 		"routeWhileDragging": true,
// 	 		"addWaypoints": true,
// 	 		//drag
// 	 		"draggableWaypoints": true,
// 	 		//put on screen the route
// 	 		"fitSelectedRoutes": true,
// 	 		"showAlternatives": false
// 	 	}).addTo(this.props.map.leafletElement);
// 	 	leafletElement.hide();
// 	 	// leafletElement.on("routeselected", (e) => console.log(e.route.instructions));
// 	}

// 	render() {
// 		return false
// 	}
// }

// export default Path;