import Axios  from 'axios'
import React from 'react'
import Header from '../components/header/Header'
import "./Login.scss"
export default function Login() {
  const [userName,setUserName]= React.useState("")
  const [userPassword,setUserPassword]= React.useState("")

  const signIn = ()=>{
     Axios.post("http://localhost:8000/api/signin",{
       name:userName,
       password:userPassword
     }).then((res)=>{
      console.log(res)
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
