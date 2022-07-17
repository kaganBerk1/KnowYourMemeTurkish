import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, useNavigate,useLocation, createSearchParams } from "react-router-dom";
import "./Header.scss"
import axios from '../../Api/axios';
export default function Header() {
  const [value, setValue] = useState("Ara...");
  const navigate = useNavigate();
  const location = useLocation();
  const from= location.state?.from?.pathname || "";
  function handleText(event){
    
    setValue(event.target.value)
  }

  function getSearch(){
    const params = { searchText: value};

    navigate({
      pathname: '/memes',
      search: `?${createSearchParams(params)}`,
    });
  }
  return (
    <div>
        <div className='HeaderContainer'>
            <Link  to="/home" className='logo'>Bunun Nesi Komik</Link >
            <div className='search'>
                <Icon className='icon' onClick={()=>{
                    getSearch()
                }} icon="bx:search-alt" />
                <input className='searchText' onClick={()=>{
                  setValue("")
                }} onKeyDown={(e)=>{
                  if (e.key === 'Enter') {
                    getSearch();
                  }
                }}  type="text" value={value}  onChange={(event)=>handleText(event)}/>
            </div>
        </div>
        <div className='Tabs'>
                <Link  to="/memes" className='allMemes'>Bütün Mimler</Link >

        </div>
    </div>
  )
}
