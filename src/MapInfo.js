import React from "react";
import { MapContainer, Marker, GeoJSON, TileLayer, Popup } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import worldGeoJSON from "geojson-world-map";
import { FaMapMarkerAlt } from "react-icons/fa";
import Location from "./Location";

export default function MapInfo(props) {
  const position = [props.map_data.location.lat, props.map_data.location.long];
  const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
  });

  return (
    <div className="MapInfo">
      <div className="map_info_container">
        <p>Department name {props.map_data.name}</p>
        <p>
          <FaMapMarkerAlt /> <Location location={props.map_data.location} />
        </p>
        <p>{props.map_data.address}</p>
        <p>{props.map_data.phone}</p>
        <p>{props.map_data.email}</p>
      </div>
      <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            fillColor: "#202336",
            weight: 1,
            fillOpacity: 5,
          })}
        />
        <Marker position={position} icon={icon}>
          <Popup>
            <div className="address">{props.map_data.address}</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
