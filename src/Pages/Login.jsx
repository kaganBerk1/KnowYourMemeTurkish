import Axios  from 'axios'
import {useRef,useState,useEffect,useContext} from "react"
import AuthContext from '../Context/AuthProvider'
import React from 'react'
import Header from '../components/header/Header'
import "./Login.scss"
import useAuth from '../hooks/useAuth'
export default function Login() {
  const {setAuth} = useAuth();
  const [userName,setUserName]= useState("")
  const [userPassword,setUserPassword]= useState("")

  const signIn = ()=>{
     Axios.post("http://localhost:8000/api/signin",{
       name:userName,
       password:userPassword
     }
     ).then((res)=>{
       console.log(res)
       setAuth({userName});
     }).catch((err)=>{
         console.log(err)
     })
  }

  return (
    <div>
        <Header></Header>
        <div className='loginCover'>
                <div className='loginContainer'>
                        <div className='userCover'>
                            <span className='userLabel'>Kullanıcı Adı:</span>
                            <input  onChange={(e)=>setUserName(e.target.value)} className='userInput' type="text" />
                        </div>
                        <div className='userCover'>
                            <span className='userLabel'>Şifre:</span>
                            <input onChange={(e)=>setUserPassword(e.target.value)}  className='userInput' type="password" />
                        </div>
                        <input onClick={signIn} className='submitButton' type="submit" value={"Giriş"} />
                </div>
        </div>
    </div>
  )
}
