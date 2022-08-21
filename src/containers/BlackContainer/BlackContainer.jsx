import React from 'react'
import BottomLink from '../../components/BottomLink/BottomLink'
import Collections from '../../components/Collections/Collections'
import { CardsContainer } from '../CardsContainer/CardsContainer'
import './BlackContainer.css'
import whiteLogo from '../../images/nba-nike-white.png'

const BlackContainer = () => {
  return (
    <div className='black-container'>
      <Collections />
      <CardsContainer />
      <div className='lower-section-wrapper'>
        <BottomLink title='View all' />
        <img src={whiteLogo} alt="" />
      </div>
    </div>
  )
}

export default BlackContainer