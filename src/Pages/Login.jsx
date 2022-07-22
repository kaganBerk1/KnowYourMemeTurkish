import {useRef,useState,useEffect,useContext} from "react"
import { Link,useNavigate,useLocation, Navigate } from 'react-router-dom'
import React from 'react'
import Header from '../components/header/Header'
import "./Login.scss"
import useAuth from '../hooks/useAuth'
import axios from '../Api/axios'
export default function Login(props) {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from= location.state?.from?.pathname || "/create";
  const [userName,setUserName]= useState("")
  const [userPassword,setUserPassword]= useState("")

  const signIn = ()=>{
     axios.post("/api/signin",{
       name:userName,
       password:userPassword
     }
     ).then((res)=>{
       const now = new Date()
       let token = res.data.token
       setAuth({userName,token});
       const item = {
         token: token,
         expiry: now.getTime() + (24 * 60 * 60 * 1000),
       }

       localStorage.setItem("token", JSON.stringify(item))
       navigate(from);
     }).catch((err)=>{
         console.log(err)
     })
  }

  return (
    <div>
        <Header {...props}></Header>
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
