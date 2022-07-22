import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, useNavigate,useLocation, createSearchParams } from "react-router-dom";
import "./Header.scss"
import axios from '../../Api/axios';
import { getTranslated } from '../../utils/utils';
export default function Header(props) {
  const [value, setValue] = useState(getTranslated(props.lang,"search"));
  const navigate = useNavigate();
  const location = useLocation();


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
                <Link  to="/memes" className='allMemes'>{getTranslated(props.lang,"all_memes")}</Link >

        </div>
    </div>
  )
}
