import React from 'react'
import Header from '../components/header/Header'
import { Link, useLocation } from "react-router-dom";
import dots from "../images/dots.gif"
import "./Memes.scss"
import { useEffect } from 'react';
import axios from '../Api/axios'
import { getTranslated } from '../utils/utils';
export default function Memes(props) {
  const [memes,setMemes]= React.useState([]);
  const [loading,setLoading]= React.useState(false);

  const location = useLocation();
 useEffect(()=>{
    let path=window.location.search
    setLoading(true)
    if(path.includes("searchText")){
      getMemesBySearchText();
    }else{
      getAllMemes();
    }
 },[location])
 function getAllMemes(){
    axios.get("/api/memes").then(res => {
      console.log(res)
      setMemes(res?.data?.memes)
      setLoading(false)
    }).catch((err)=>{
        console.log(err)
    })
 }

 function getMemesBySearchText(){
      let value=window.location.search.split("=").pop()
      console.log(value)
      axios.get("/api/search",{
        params:{
          searchText: value
        }
      }).then(res => {
        console.log(res)
        setMemes(res?.data?.memes)
        setLoading(false)
      }).catch((err)=>{
          console.log(err)
      })
     
 }

  return (
    <div> 
      <Header {...props}></Header>
    {
      !loading?
      <div className='Cover'>
        {
          !memes.length>0
          ?
          <div className='Cover' >
              <span className='noFound'>
                {getTranslated(props.lang,"not_found")}
              </span>
          </div>
          :
          <>
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
      </>
        }
    </div>
    :
    <div style={{display:"flex",justifyContent:"center"}}>
      <img style={{width:"80px",height:"80px"}} src={dots} alt="loading..." />
    </div>
    }
    </div>
  )
}
