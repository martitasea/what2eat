import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import icon from './media/restaurantIcon.png'
// import iconShadow from 'leaflet/dist/images/icon-shadow.png';

export const RestaurantIcon = L.icon({
	iconUrl: './media/restaurantIcon.png',
    // shadowUrl: iconShadow,
    iconSize: [40,40],
    iconAnchor: [0,30],
    popupAnchor:[25,-40],
    shadowAnchor:[-2,42]
});