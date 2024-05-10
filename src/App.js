import logo from './logo.svg';
import './App.css';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import WeatherCard from "./components/WeatherCard";
import {api_key, api_base_url} from "./apis/config";
import {Container} from "react-bootstrap";
import { useState, useEffect } from 'react';
import CurrentForecast from './components/CurrentForecast';

function App() {   
  const [city, setCity] = useState("");
  const [data,setData] = useState([]);
  const[currentWeatherData, setCurrentWeatherData] = useState([]);  
 
const url = `${api_base_url}/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

const getCurrentWeatherData = () => {
  fetch(url)
  .then(resp=>resp.json())
  .then(currentWeatherData=> setCurrentWeatherData(currentWeatherData))
  setCity("")
}
console.log(currentWeatherData);

 const search = () => {
        fetch(`${api_base_url}/data/2.5/forecast?q=${city},us&appid=${api_key}&units=metric`)
        .then(response=>response.json())
        .then(data=>setData(data.list))
      setCity("")
    }
  


 return (
    <Container className="App">
        <Row>
        <Col>
        <h1 className="mt-3">Enter the city name</h1>        
        </Col>
      </Row>
      <Row >
        <Col xs={4} className="text-center">
        <FormControl value={city} placeholder="Enter city" onChange={event=>setCity(event.target.value)} />
        </Col>
      <p className="mt-3">Weather in {city}</p>          
      </Row>
      <Row>
        <Col>
        <Button variant="outline-info" onClick={search}>Get 5 day/3 hour forecast</Button>
        </Col>
      </Row>
      <Row>
        <Col>
        <Button variant="outline-info" onClick={getCurrentWeatherData}>Get Current forecast</Button>
        </Col>
      </Row>
      {/* {currentWeatherData.weather && currentWeatherData.weather[0].icon} */}
      <Row>
        <Col>
        {currentWeatherData.weather && <CurrentForecast 
        location = {currentWeatherData.name}
        temp={currentWeatherData.main ? <p>{currentWeatherData.main.temp.toFixed() + " \xB0C"}</p> : null}
        description={currentWeatherData.weather ? <p>{currentWeatherData.weather[0].main}</p> : null}
        icon={currentWeatherData.weather ? currentWeatherData.weather[0].icon : ""}
        feels={currentWeatherData.main ? <p>{"Feels like " + currentWeatherData.main.feels_like.toFixed() + " \xB0C"}</p> : null}
        humidity={currentWeatherData.main ? <p>{"Humidity " + currentWeatherData.main.humidity + " %"}</p> : null}
        wind={currentWeatherData.wind ? <p>{"Wind Speed " + currentWeatherData.wind.speed + " MPH"}</p> : null}
        />}
        </Col>
      </Row> 

  <Row>
      {data.map((element)=> (
      <Col key={element.id}>
      <WeatherCard 
      dt={element.dt * 1000}      
      temp_min = {element.main.temp_min.toFixed() + "\xB0C"}
      temp_max ={element.main.temp_max.toFixed() + "\xB0C"}
      icon={element.weather[0].icon}
      main={element.weather[0].main}
      /> 
      </Col>))}
  </Row> 
      </Container>   
  );
}

export default App;