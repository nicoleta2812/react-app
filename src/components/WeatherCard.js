import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    const date = new Date(dt);
    // console.log(date);
    
    return (
        <Card className="mb-4 bg-primary-subtle" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          <Card.Body>
            <Card.Title>{main}</Card.Title>
            <p>{date.toLocaleDateString()} — {date.toLocaleTimeString()}</p>
           <p>Min temp: {temp_min}</p>
           <p>Max temp: {temp_max}</p>
          </Card.Body>
        </Card>
      )
}
export default WeatherCard;