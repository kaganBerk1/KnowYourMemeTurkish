import React, { useState } from 'react';
import Switch from "react-switch";
import { Icon } from '@iconify/react';
import { Link, useNavigate,useLocation, createSearchParams } from "react-router-dom";
import "./Header.scss"
import axios from '../../Api/axios';
import { getTranslated } from '../../utils/utils';
import { useEffect } from 'react';
export default function Header(props) {
  const [value, setValue] = useState("");
  const [checked, setCheck] = useState(props.lang!=="en"?true:false);
  const navigate = useNavigate();
  const location = useLocation();


  function handleText(event){
    setValue(event.target.value)
  }

  useEffect(()=>{
    setValue("")
    setCheck(props.lang!=="en"?false:true)
    setValue(getTranslated(props.lang,"search"))
  },[props.lang])

  function getSearch(){
    const params = { searchText: value};

    navigate({
      pathname: '/memes',
      search: `?${createSearchParams(params)}`,
    });
  }

  async function handleChange(checked){
    setCheck(checked );
    await props.handleLanguage();
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
                <div className='language'>
                  <span>TR</span>
                  <Switch uncheckedIcon={false} checkedIcon={false} onColor="#6A3131" className='switch' onChange={handleChange} checked={checked} />
                  <span>EN</span>
                </div>
        </div>
    </div>
  )
}
