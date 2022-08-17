import React from 'react';
import Logo from '../imgs/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from "../styles/Nav.module.css"

export default function Nav({onSearch}) {
  return (
    <div className={s.container}>
      <div className={s.contLeft}>
        <img className={s.imgHenry} src={Logo} alt="logo de henry"/> <p className={s.parrafo}>Henry</p>
      </div>
          <SearchBar onSearch={onSearch}/>
    </div>
    
  );
};


