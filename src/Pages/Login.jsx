import React from 'react'
import Header from '../components/header/Header'
import "./Login.scss"
export default function Login() {
  return (
    <div>
        <Header></Header>
        <div className='loginCover'>
                <div className='loginContainer'>
                        <div className='userCover'>
                            <span className='userLabel'>Kullanıcı Adı:</span>
                            <input   className='userInput' type="text" />
                        </div>
                        <div className='userCover'>
                            <span className='userLabel'>Şifre:</span>
                            <input  className='userInput' type="password" />
                        </div>
                        <input className='submitButton' type="submit" value={"Giriş"} />
                </div>
        </div>
    </div>
  )
}
