import React from 'react'
import Header from '../components/header/Header'
import "./CreateMeme.scss"
export default function CreateMeme() {
  const [selectedImage, setSelectedImage] = React.useState(null);
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
                        <button className='buttonCover' onClick={()=>setSelectedImage(null)}>Remove</button>
                        </div>
                    )}
                </div>
                </div>
                <div className='rowStyle'>
                <h3>Mim Tanımı: </h3>
                <div >
                    <textarea className='descriptionCover' name="comment" form="usrform">Enter text here...</textarea>
                </div>
                </div>
                <div className='rowStyle'>
                <h3>Mim Kaynağı: </h3>
                <div >
                    <textarea className='descriptionCover' name="comment" form="usrform">Enter text here...</textarea>
                </div>
                </div>
                <div className='rowStyle'>
                <h3>Yazar Notu: </h3>
                <div >
                    <textarea className='descriptionCover' name="comment" form="usrform">Enter text here...</textarea>
                </div>
                </div>
                <div className='rowStyle'>
                <h3>İlgili Linkler: </h3>
                <div style={{display:"flex",flexDirection:"column",marginBottom:"10px"}}>
                    <input  className='relatedLinkCover'  type="text"/>
                    <input  className='relatedLinkCover'  type="text"/>
                    <input  className='relatedLinkCover'  type="text"/>
                    <input  className='relatedLinkCover'  type="text"/>
                </div>
                </div>
                <input className='submit' type="submit" />
            </div>
    </div>
  )
}
