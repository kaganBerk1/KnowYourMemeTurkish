import React from 'react'
import axios from '../Api/axios'
import Header from '../components/header/Header'
import { getTranslated } from '../utils/utils'
import "./Meme.scss"
export default function Meme(props) {
  const[meme,setMeme] = React.useState({})
  React.useEffect( ()=>{
    let id= window.location.pathname.split("/").pop()
    getData(id)
 },[])


 function getData(id){
    axios.get(`/api/meme`,{
      params:{
        id:id
      }
    }).then(async (res) => {
      console.log(res)
      await setMeme(res?.data)
    }).catch((err)=>{
        console.log(err)
    })
 }
  /// Styles For Desktop Ui
  const columnStyle={
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    minWidth:"450px"
  }
  const rowStyle = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderBottom:"1px solid #CCCCCC",
    paddingBottom:"30px",
   
  }
  const detailStyle={
    display:"flex",
    flexWrap:"wrap",
    width:"100%",
    justifyContent:"center",
    
  }
  return (
    <div>
      <Header {...props}></Header>
      <div className='coverSingleMeme'>
        <div className='SingleMeme' to={`/memes/${meme.id}`}>
         <div style={props.width>1024?rowStyle:{}}>
          <img className='memeImage' src={meme.memeImage}></img>
          <div style={props.width>1024?columnStyle:{}}>
            <div className='memeTitle'>{meme.title}</div>
            <div className='descriptionTite' >{getTranslated(props.lang,"definition")}:</div>
            <div className='memeDescription'>{meme.description}</div>
          </div> 
         </div>
          <div  style={props.width>1024?detailStyle:{}}>
            <div style={props.width>1024?columnStyle:{}}>
              <div className='descriptionTite'>{getTranslated(props.lang,"origin")}:</div>
              <div className={props.width>1024?"memeDescription memeDescriptionWrap":"memeDescription"}>{meme.origin}</div>
              <div className='descriptionTite' >{getTranslated(props.lang,"writer_note")}:</div>
              <div className={props.width>1024?"memeDescription memeDescriptionWrap bottomMargin":"memeDescription"}>{meme.writerNote}</div>
            </div>
            <div style={props.width>1024?columnStyle:{}}>
              <div className='descriptionTite' >{getTranslated(props.lang,"related_links")}:</div>
              <ul className='relatedLinks'>
              {meme.relatedLinks?.map((el)=>{
                  return(
                    <li  className='relatedLink'>
                      <a target="_blank" href={`${el}`}>{el}</a>
                    </li>
                  )
              })}
              </ul>
              <div className='descriptionTite' >{getTranslated(props.lang,"writer")}:</div>
              <span className='writer'>
                <div  className="writerImage" />
                <span  className="writerName">{meme.admin}</span>
              </span>
            </div>
          </div>
        </div>
                  
      </div>
      </div>
  )
}
