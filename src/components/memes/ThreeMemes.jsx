import React from 'react'
import "./ThreeMemes.scss"
import Carousel from 'react-elastic-carousel';
import axios from '../../Api/axios';
import { Link } from 'react-router-dom';
import dots from "../../images/dots.gif"
import { getTranslated } from '../../utils/utils';


export default function ThreeMemes(props) {
 const [memes,setMemes] = React.useState([]) 
 const [width, setWidth] = React.useState(window.innerWidth);
 const [loading,setLoading]= React.useState(false);
 React.useEffect(() => {
   setLoading(true)
   window.addEventListener("resize", () => setWidth(window.innerWidth));
   getThreeMeme();
 }, []);

 function getThreeMeme(){
    axios.get("/api/threeMemes").then(res => {
      console.log(res)
      setMemes(res?.data?.memes)
      setLoading(false)
    }).catch((err)=>{
        console.log(err)
    })
 }
 
 return (
    <div className='Container'>
        <span className='titleThreeMeme'>{getTranslated(props.lang,"last_added")}</span>
        <div className='memesContainer'>
        {
            loading ?
            <div style={{display:"flex",justifyContent:"center"}}>
                    <img style={{width:"80px",height:"80px"}} src={dots} alt="loading..." />
            </div>
            
            :
            <Carousel className='carousel' tiltEasing='ease' enableAutoPlay={true} autoPlaySpeed={5000} showArrows={false} itemsToShow={(width>1300)?3:width>720?2:1}>
                {
                    memes.map((el)=>{
                        return(
                            <Link className='memeContainer' to={`/memes/${el._id}`} key={el.id}>
                                <span className='writer'> {getTranslated(props.lang,"writer")}: {el.admin}</span>
                                <img  className="memeImage" src={el.memeImage} alt="" />
                                <div className='memeDescription'>{el.title}</div>
                            </Link>
                        )
                    })
                }
            </Carousel>
        }
        </div>
    </div>
  )
}
