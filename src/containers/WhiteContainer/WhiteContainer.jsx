import React from 'react'
import BottomLink from '../../components/BottomLink/BottomLink'
import CollectionsEvery from '../../components/CollectionsEvery/CollectionsEvery'
import Conferences from '../../components/Conferences/Conferences'
import './WhiteContainer.css'


const WhiteContainer = () => {
  return (
    <div className='white-container'>
      <CollectionsEvery />
      <div className='conferences-wrapper'>
        <div className='east block'>
          <Conferences title='east' />
        </div>
        <div className='west block'>
          <Conferences title='west' />
        </div>
      </div>
      <BottomLink title='About Team' />
    </div>
  )
}

export default WhiteContainer