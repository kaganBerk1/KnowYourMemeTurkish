import React from 'react'
import Header from '../components/header/Header'
import { Link } from "react-router-dom";
import "./Memes.scss"
import { useEffect } from 'react';
import axios from "axios";
export default function Memes() {
  const [memes,setMemes]= React.useState([]);

 useEffect(()=>{
    axios.get("http://localhost:8000/api/memes").then(res => {
      console.log(res)
      setMemes(res?.data?.memes)
    }).catch((err)=>{
        console.log(err)
    })
 },[])

  return (
    <div> 
      <Header></Header>
      <div className='Cover'>
        {
         memes.map((el)=>{
              return(
                  <Link className='wholeMemes' to={`/memes/${el._id}`} key={el.id}>
                    <img src={el.memeImage}></img>
                    <div className='memeDescription'>{el.title}</div>
                    <span className='writer'>
                      {el.admin}
                      </span>
                  </Link>
              )
          })
        }
      </div>
    </div>
  )
}
