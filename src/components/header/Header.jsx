import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import "./Header.scss"
export default function Header() {
  const [value, setValue] = useState("Ara...");

  function handleText(event){
    setValue(event.target.value)
  }
  return (
    <div>
        <div className='HeaderContainer'>
            <div className='logo'>Bunun Nesi Komik</div>
            <div className='search'>
                <Icon className='icon' icon="bx:search-alt" />
                <input className='searchText' onClick={()=>{
                    setValue("")
                }} type="text" value={value}  onChange={(event)=>handleText(event)}/>
            </div>
        </div>
        <div className='Tabs'>
                <span>Bütün Mimler</span>
        </div>
    </div>
  )
}
