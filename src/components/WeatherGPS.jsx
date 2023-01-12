import React, { useEffect, useState } from "react";
import "../styles/WeatherGPS.css";


export default function WeatherLocation(props) {
  return (
    <div className='location-container'>
        <h2>{props.locationGps}</h2>
        <h3>{props.localTime}</h3>  
    </div>
  )
}
