import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Location(props) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${props.location.lat}&lon=${props.location.long}&appid=8157bb6e9552b92cce5fa67fd2aa22ed&units=metric`
      );
      setCity(response.data.timezone);
      setLoading(false);
    };
    getLocation();
  }, [props.location.lat, props.location.long]);

  if (loading) {
    return "Loading...";
  } else {
    return <span>{city}</span>;
  }
}
