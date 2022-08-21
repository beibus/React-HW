import React from 'react'
import image from '../../images/cobe-mj.png'
import { Message } from '../../components/Message/Message'
import './TopImageContainer.css'

const TopImageContainer = () => {
  return (
    <div className='image-container'>
      <div className='right-message'>
      <Message/>
      </div>
      <div className='image-wrapper'>
      <img src={image}/>
      </div>
    </div>
  )
}

export default TopImageContainer;
