import React from 'react';
import Logo from '../imgs/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from "../styles/Nav.module.css"
import { Link } from 'react-router-dom';

export default function Nav({onSearch}) {
  return (
    <div className={s.container}>
      <div className={s.contLeft}>
        <Link to="/">
        <img className={s.imgHenry} src={Logo} alt="logo de henry"/><p className={s.parrafo}>Henry</p></Link>
      </div>
      <div className= {s.link}>
      <Link to="/abaut" >
        <span>Abaut</span>
      </Link>
      </div>
          <SearchBar onSearch={onSearch}/>
    </div>
    
  );
};


