import React from 'react'
import logo from '../../images/nba-nike.png'
import './TitleContainer.css'

export const TitleContainer = ({ first, second })  => {
  return (
    <div className='title-container-wrapper'>
      <h2>{first}</h2>
      <img src={logo}/>
      <h2>{second}</h2>

    </div>
  )
}

export default TitleContainer;
