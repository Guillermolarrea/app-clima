import React, {useState} from "react";
import s from "../styles/Search.module.css"




export default function SearchBar({onSearch}) {
  const [input, setInput]= useState("") 
  const handleInputChange = (e) => {
    setInput (e.target.value)
  }

  return (  
    <form className={s.search} onSubmit={(e) => {
      e.preventDefault();
      onSearch(input);
    }}>      
      <input className={s.input}
        type="text"
        placeholder="  Ciudad..."
        value={input}
        onChange={handleInputChange}
      />
      <input className={s.btn} type="submit" value="Agregar"/>
    </form>
  );
}
