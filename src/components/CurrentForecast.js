import React from "react"
import { Image } from "react-bootstrap";

const CurrentForecast = ({location, temp, description,icon,feels, humidity, wind}) => {
    console.log(icon)
    return (
        <div className="current bg-primary-subtle text-primary-emphasis rounded p-3">
            <p className="location">{location}</p>
            <h2 className="temp">{temp}</h2>
            <p className="description">{description}</p>
            <Image src={`https://openweathermap.org/img/wn/${icon}@2x.png`} rounded></Image>
            <p className="feels">{feels}</p>        
            <p className="humidity">{humidity}</p>
            <p className="wind">{wind}</p>
    </div>
    )
}

export default CurrentForecast;