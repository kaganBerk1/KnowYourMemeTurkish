import React from 'react'
import Header from '../components/header/Header'
import userPhoto from "./../images/userPhoto.jpg"
import "./Meme.scss"
export default function Meme(props) {
  let dummyObject=
    {
      id:0,
      admin:"kağan",
      title:"  Ulan Bu ok Zehirli İşte",
      description:" Arog'da bir sahneden alınan bu söz. kişiye şaka yollu bir şekilde sürekli canını sıkan durumlar ya da sözler için kullanılan bir tanımdır.  ",
      writerNote:"Benim en sevdiğim mimlerden biridir.",
      origin:"Arog filminde geçmektedir.",
      relatedLinks:[
        "https://www.youtube.com/watch?v=dZnm7X4HY50",
        "https://www.youtube.com/watch?v=dZnm7X4HY50",
        "https://www.youtube.com/watch?v=dZnm7X4HY50"
      ],
      image:"data:image/jpeg;base64,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"
  }
  console.log(props)
  /// Styles For Desktop Ui
  const columnStyle={
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
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
    marginLeft:"-60px"
  }
  return (
    <div>
      <Header></Header>
      <div className='coverSingleMeme'>
        <div className='SingleMeme' to={`/memes/${dummyObject.id}`}>
         <div style={props.width>1024?rowStyle:{}}>
          <img className='memeImage' src={dummyObject.image}></img>
          <div style={props.width>1024?columnStyle:{}}>
            <div className='memeTitle'>{dummyObject.title}</div>
            <div className='descriptionTite' >Tanım:</div>
            <div className='memeDescription'>{dummyObject.description}</div>
          </div> 
         </div>
          <div  style={props.width>1024?detailStyle:{}}>
            <div style={props.width>1024?columnStyle:{}}>
              <div className='descriptionTite' >Kaynak:</div>
              <div className={props.width>1024?"memeDescription memeDescriptionWrap":"memeDescription"}>{dummyObject.origin}</div>
              <div className='descriptionTite' >Yazar Notu:</div>
              <div className={props.width>1024?"memeDescription memeDescriptionWrap bottomMargin":"memeDescription"}>{dummyObject.writerNote}</div>
            </div>
            <div style={props.width>1024?columnStyle:{}}>
              <div className='descriptionTite' >İlgili Linkler:</div>
              <ul className='relatedLinks'>
              {dummyObject.relatedLinks.map((el)=>{
                  return(
                    <li  className='relatedLink'>
                      <a target="_blank" href={`${el}`}>{el}</a>
                    </li>
                  )
              })}
              </ul>
              <div className='descriptionTite' >Yazar:</div>
              <span className='writer'>
                <img  className="writerImage"  src={userPhoto} alt="" />
                <span  className="writerName">{dummyObject.admin}</span>
              </span>
            </div>
          </div>
        </div>
                  
      </div>
      </div>
  )
}
