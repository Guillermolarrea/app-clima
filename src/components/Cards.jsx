import React from 'react';
import Card from './Card';
import s from "../styles/Cards.module.css"

// export default function Cards({cities}) {
//   // acá va tu código
//   return <div className={s.container}>

//     {cities?.map((c) =>(
//       <Card  
//       key = {c.id}
//       max={c.main.temp_max}
//       min={c.main.temp_min}
//       name={c.name}
//       img={c.weather[0].icon}
//       onClose={onClose}
//       />
//      ))}
//   </div>
// };
export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={s.container}>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            key={c.id}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}