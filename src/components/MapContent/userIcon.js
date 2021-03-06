import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import icon from './media/user-pin.svg';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const UserIcon = L.icon({
	iconUrl: './media/user-pin.svg',
    shadowUrl: iconShadow,
    iconSize: [40,40],
    iconAnchor: [15,50],
    shadowAnchor:[7,50]
});