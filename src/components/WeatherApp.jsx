import { getByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "../styles/WeatherApp.css";
import WeatherDay from "./WeatherDay";

// import WeatherLocation from "./WeatherLocation";
/* 
api:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/casablanca?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json
*/


export default function WeatherApp() {
    const [location, setLocation] = useState ("");
    const [correct, setCorrect] = useState(false);
    // const [existingFetch, setExistingFetch] = useState(false);

    // FROM THE FETCH VISUAL CROSSING
    const [fetchedDataCity, setFetchedDataCity] = useState([]);
    // const [ , set] = useState(null);
    const [date, setDate] = useState(null);
    const [icon, setIcon] = useState("");
    const [temp, setTemp] = useState(null);


    const handleInput = (e)=>{
        setLocation(e.target.value)
        console.log(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (location.trim() !== "") {
            setCorrect(true);
            fetch(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json`
            )
        .then((response)=> response.json())
        .then((result)=>{
            // setting the entire data of the city :
            setFetchedDataCity(result);
            setLocation("") ; 
        })
        }      
    }


    useEffect(()=>{
        if(correct) {
                // setting the entire data of the city :
                console.log(fetchedDataCity);
                setLocation("") ; 
                setTemp(fetchedDataCity.currentConditions.temp);
                setIcon(fetchedDataCity.days[0].icon);
                setDate(fetchedDataCity.days[0].datetime);
                setCorrect(false);
        }
    },[fetchedDataCity]); 
    console.log(temp);
    console.log(icon); 
    console.log(date);
    let Ranya = "./icons/"+`${icon}`+".png"
  return (
    <div>
       <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a city" onChange={handleInput} value={location}/>
            <button type="submit">Valid</button>
       </form>
       <div className="Days">
            <WeatherDay /* dayName={getDay(date)}*/ date={date} icon={Ranya} temperature={temp}></WeatherDay>
            {/* <WeatherDay dayName="" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="WED" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="THU" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="FRI" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="SAT" date={} icon={} temperature={}></WeatherDay>
            <WeatherDay dayName="SUN" date={} icon={} temperature={}></WeatherDay> */}
       </div>   
    </div>
  )
}

