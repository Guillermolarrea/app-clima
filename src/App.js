import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { Route } from 'react-router-dom';
import City from './components/City';
import Abaut from './components/Abaut';

function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "7b51a9fe1195810206687b8c7e1147ec";
  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      })
     
    }
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }
    function onFilter(ciudadId) {
      let city = cities.filter(c => c.id === parseInt(ciudadId));
      if(city.length > 0) {
          return city[0];
      } else {
          return null;
      }
    }
    
    return (
      <div className="App">
        <Route path={"/"} render={()=> <Nav onSearch={onSearch}/>} />
        <Route exact path={"/"} render={()=><Cards cities={cities} onClose={onClose}/>} />
        <Route exact path= {"/abaut"} component={Abaut}/>
        <Route exact path={"/city/:cityId"} render ={({match})=><City city={onFilter(match.params.cityId)}></City>}/>
      </div>
  );
}



export default App;
