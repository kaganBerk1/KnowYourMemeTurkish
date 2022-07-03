import React from 'react'
import Header from '../components/header/Header'
import Information from '../components/Informations/Information'
import ThreeMemes from '../components/memes/ThreeMemes'
export default function Home() {
  return (
    <div>
        <Header></Header>
        <Information></Information>
        <ThreeMemes></ThreeMemes>
    </div>
  )
}
