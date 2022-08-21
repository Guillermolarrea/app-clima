import React from 'react';
import { Link } from 'react-router-dom';
import s from  '../styles/Card.module.css';


export default function Card({min, max, name, img, onClose, id}) {
  // acá va tu código
  
  
  return <div className= {s.container}>
    <div className={s.btnPosition}>
      <button className={s.btn} onClick={onClose}> X </button>
    </div>
      <Link to={`/city/${id}`}>
    <h2>{name}</h2>
    </Link>
    <div>
      <div className={s.minMaxPosition}>
      <div>
        <h4>Min</h4>
        <p>{min}°</p>
      </div>
      <div>
        <h4>Max</h4>
        <p>{max}°</p>
      </div>
      <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
      </div>
    </div>
  </div>
};