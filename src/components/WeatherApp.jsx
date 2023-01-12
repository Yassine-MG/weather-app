import React, { useEffect, useState } from "react";
import "../styles/WeatherApp.css";
import WeatherDay from "./WeatherDay";
import WeatherGPS from "./WeatherGPS";

/* 
API :
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/casablanca?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json
*/


export default function WeatherApp() {

    // DATA FROM INPUT SEARCH OF THE USER :
    const [correct, setCorrect] = useState(false);

    const [searchedLocation, setSearchedLocation] = useState ("");
    const [displaySearchedLocation, setDisplaySearchedLocation] = useState(null);

    const [fetchedDataCity, setFetchedDataCity] = useState([]);
    const [date, setDate] = useState(null);
    const [icon, setIcon] = useState("");
    const [temp, setTemp] = useState(null);

    
    // DATA FROM GPS LOCATION OF THE USER :
    // const [locationGps, setLocationGps] = useState (null);
    // const [gpsTime, setGpsTime] = useState (null);
    // let time = new Date();
    // const gpsTiming = time.toLocaleTimeString();
    // setGpsTime(gpsTiming);


    // METHODS AND HOOKS :
    const handleInput = (e)=>{
        setSearchedLocation(e.target.value)
        console.log(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (searchedLocation.trim() !== "") {
            setCorrect(true);
            fetch(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchedLocation}?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json`
            )
        .then((response)=> response.json())
        .then((result)=>{
        setFetchedDataCity(result);
        })
        }  
    }

    useEffect(()=>{
        if(correct) {
                // setSearchedLocation(""); 
                setTemp(fetchedDataCity.currentConditions.temp);
                setIcon(fetchedDataCity.days[0].icon);
                setDate(fetchedDataCity.days[0].datetime);
                setDisplaySearchedLocation(fetchedDataCity.address);
                setCorrect(false);
        }
        setSearchedLocation("");
    },[fetchedDataCity]); 
   
    // **************************************************************************************************************************
    // DOM : 
  return (
    <div>
       <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a city" onChange={handleInput} value={searchedLocation}/>
            <button type="submit">Valid</button>
       </form>
       <div className="Days">
            <WeatherDay /* dayName={getDay(date)}*/ locationSearched={displaySearchedLocation} date={date} src={`icons/${icon}.png`} temperature={temp}></WeatherDay>
            {/* <WeatherDay dayName="" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="WED" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="THU" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="FRI" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="SAT" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="SUN" date={} icon={} temperature={}></WeatherDay> */}
       </div>  
       <div className="Location">
           {/* <WeatherGPS locationGps={locationGps} localTime={gpsTiming} /> */}
       </div>
    </div>
  )
}

