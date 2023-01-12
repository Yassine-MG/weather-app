import React from "react";
import "../styles/WeatherDay.css"

export default function WeatherDay(props) {
  return (
    <div>
        <div className='day-container'>
            <h1>{props.locationSearched}</h1>
            <h3>{props.dayName}</h3>
            <h4>{props.date}</h4>
            <img src={props.src} className="weather-icon" 
            onError={event => {
              event.target.src = "icons/cloudy.png"
              
            }}
            />
            <h2>{props.temperature}°C</h2>
        </div> 
    </div>
  )
} 
