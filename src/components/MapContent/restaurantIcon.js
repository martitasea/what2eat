import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
import icon from 'leaflet/dist/images/restaurantIcon.png';
import iconShadow from 'leaflet/dist/images/icon-shadow.png';

export const RestaurantIcon = L.icon({
	iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [40,40],
    iconAnchor: [5,40],
    popupAnchor:[25,-40],
    shadowAnchor:[-2,42]
});