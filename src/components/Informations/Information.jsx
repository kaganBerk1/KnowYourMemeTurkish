import React from 'react'
import { getTranslated } from '../../utils/utils'
import "./Information.scss"
export default function Information(props) {
  return (
    <div className='Container'>
        <div className='InfoContainer'>
            <span className='title'>{getTranslated(props.lang,"who_I")}</span>
            <div>{getTranslated(props.lang,"description_Who")}</div>
        </div>
        <div className='InfoContainer'>
            <span className='title'>{getTranslated(props.lang,"meme_meaning")}</span>
            <div>{getTranslated(props.lang,"description_meme")}</div>
        </div>
    </div>
  )
}
