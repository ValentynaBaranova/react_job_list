import React from "react";

export default function Navigation(props) {
  let mapUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-l+000(${props.coord.lat})/${props.coord.lang}/500x300?access_token=YOUR_MAPBOX_ACCESS_TOKEN`;
  console.log(props.coord.lat);
  return (
    <div>
      <img src={mapUrl} alt="Static map"></img>
    </div>
  );
}
