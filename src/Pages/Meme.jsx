import React from 'react'
import axios from '../Api/axios'
import Header from '../components/header/Header'
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
    minWidth:"500px"
  }
  const rowStyle = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderBottom:"3px dotted #CCCCCC",
    paddingBottom:"30px",
   
  }
  const detailStyle={
    display:"flex",
    flexWrap:"wrap",
    width:"100%",
    justifyContent:"center",
    marginLeft:"40px"
  }
  return (
    <div>
      <Header></Header>
      <div className='coverSingleMeme'>
        <div className='SingleMeme' to={`/memes/${meme.id}`}>
         <div style={props.width>1024?rowStyle:{}}>
          <img className='memeImage' src={meme.memeImage}></img>
          <div style={props.width>1024?columnStyle:{}}>
            <div className='memeTitle'>{meme.title}</div>
            <div className='descriptionTite' >Tanım:</div>
            <div className='memeDescription'>{meme.description}</div>
          </div> 
         </div>
          <div  style={props.width>1024?detailStyle:{}}>
            <div style={props.width>1024?columnStyle:{}}>
              <div className='descriptionTite' >Kaynak:</div>
              <div className={props.width>1024?"memeDescription memeDescriptionWrap":"memeDescription"}>{meme.origin}</div>
              <div className='descriptionTite' >Yazar Notu:</div>
              <div className={props.width>1024?"memeDescription memeDescriptionWrap bottomMargin":"memeDescription"}>{meme.writerNote}</div>
            </div>
            <div style={props.width>1024?columnStyle:{}}>
              <div className='descriptionTite' >İlgili Linkler:</div>
              <ul className='relatedLinks'>
              {meme.relatedLinks?.map((el)=>{
                  return(
                    <li  className='relatedLink'>
                      <a target="_blank" href={`${el}`}>{el}</a>
                    </li>
                  )
              })}
              </ul>
              <div className='descriptionTite' >Yazar:</div>
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
