
import Icon from "./Assets/marker.png"
import L from "leaflet"

const IconLocation = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowAnchor: null,
    shadowSize: null ,
    iconSize: [35,35],
    className: "leaflet-venue-icon"
})

export default IconLocation