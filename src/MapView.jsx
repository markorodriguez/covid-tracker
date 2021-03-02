import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import IconLocation from "./IconLocation";

function MapView(props) {
  
  const position = [-10, -76]

  const clickPopup = (value) =>{
    props.chosenCountry(value)
  }

  return (
    <MapContainer
      className="leaflet-container"
      center={position}
      zoom={3}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    
        {props.coords.map((el,index)=>{return <Marker id={el.country} key={index} icon={IconLocation} position={[el.countryInfo.lat, el.countryInfo.long]}>
            <Popup className="popup" onOpen={()=>{clickPopup(el.country)}}>
              <p>{el.country}</p>
              <img className="flag" src={el.countryInfo.flag} alt={el.country}/>
            </Popup>
          </Marker>})
        }
    </MapContainer>
  );
}

export default MapView;
