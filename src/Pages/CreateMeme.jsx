import React from 'react'
import Header from '../components/header/Header'
import {  useNavigate } from "react-router-dom";

import "./CreateMeme.scss"
import useAuth from '../hooks/useAuth';
import axios from '../Api/axios';
export default function CreateMeme() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [origin, setOrigin] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [adminNotes, setAdminNotes] = React.useState("");
  const [relatedLinks, setRelatedLinks] = React.useState([]);
  const {auth} = useAuth();
  const navigate = useNavigate();
  React.useEffect(()=>{
        const itemStr = localStorage.getItem("token")
        const item = JSON.parse(itemStr)
        const now = new Date()
        if (itemStr&&now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem("token")
            navigate("/login");
        }
  })

  const onFormSubmit = e =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('memeImage', selectedImage);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('origin', origin);
    formData.append('writerNote', adminNotes);
    relatedLinks.forEach((item) => formData.append("relatedLinks[]", item))
    formData.append('admin', auth?.userName);
    axios.post("/api/memeCreate",formData).then(res => {
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
    function relatedLinkHandle(index,newValue){
        const newState = [...relatedLinks]
        newState[index] = newValue
        setRelatedLinks(newState)
    }
  return (
    <div>
        <Header></Header>
        <div className='createCover'>
            <div className='rowStyle'>
                <h3>Mim Görseli: </h3>
                <div className='imageUploadCover'>
                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                    className='uploadButton' 
                    />
                    {selectedImage && (
                        <div>
                        <img  className='imageCover' alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                        <br />
                        <button className='buttonCover'  onClick={()=>setSelectedImage(null)}>Remove</button>
                        </div>
                    )}
                </div>
                </div>
                <div className='rowStyle'>
                <h3>Mim Başlığı: </h3>
                <div >
                    <textarea className='descriptionCover'  onChange={(event) => setTitle(event.target.value)} name="comment" form="usrform"></textarea>
                </div>
                </div>
                <div className='rowStyle'>
                <h3>Mim Tanımı: </h3>
                <div >
                    <textarea className='descriptionCover'  onChange={(event) => setDescription(event.target.value)} name="comment" form="usrform"></textarea>
                </div>
                </div>
                <div className='rowStyle'>
                <h3>Mim Kaynağı: </h3>
                <div >
                    <textarea className='descriptionCover'  onChange={(event) =>setOrigin(event.target.value)} name="comment" form="usrform"></textarea>
                </div>
                </div>
                <div className='rowStyle'>
                <h3>Yazar Notu: </h3>
                <div >
                    <textarea className='descriptionCover' onChange={(event) => setAdminNotes(event.target.value)} name="comment" form="usrform"></textarea>
                </div>
                </div>
                <div className='rowStyle'>
                <h3>İlgili Linkler: </h3>
                <div style={{display:"flex",flexDirection:"column",marginBottom:"10px"}}>
                    <input  onChange={(event) =>  relatedLinkHandle(0,event.target.value)}  className='relatedLinkCover'  type="text"/>
                    <input onChange={(event) =>  relatedLinkHandle(1,event.target.value)}   className='relatedLinkCover'  type="text"/>
                    <input onChange={(event) =>  relatedLinkHandle(2,event.target.value)} className='relatedLinkCover'  type="text"/>
                    <input onChange={(event) =>  relatedLinkHandle(3,event.target.value)}   className='relatedLinkCover'  type="text"/>
                </div>
                </div>
                <input className='submit' onClick={onFormSubmit} type="submit" />
            </div>
    </div>
  )
}
