import React from 'react'
import Header from '../components/header/Header'
import Information from '../components/Informations/Information'
import ThreeMemes from '../components/memes/ThreeMemes'
export default function Home(props) {
  return (
    <div>
        <Header {...props} ></Header>
        <Information  {...props}></Information>
        <ThreeMemes  {...props}></ThreeMemes>
    </div>
  )
}
