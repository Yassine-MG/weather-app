import React from "react";
import "../styles/WeatherDay.css"
import icone from "./icons/cloudy.png"

export default function WeatherDay(props) {
  return (
    <div>
        <div className='day-container'>
            
            <h3>{props.dayName}</h3>
            <h4>{props.date}</h4>
            <img src={props.icon} className="weather-icon" alt="weather Icon"/>
            <h2>{props.temperature}°C</h2>
        </div> 
    </div>
  )
} 
// props.icon = "partly-cloudy-day"
