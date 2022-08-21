import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import './CollectionsEvery.css'

class CollectionsEvery extends React.Component {

  render() {

    return (
      <div className='every-container'>
        <div className='small'>
          <Breadcrumb title='every team' />
        </div>
        <div className='big blue'>
          <Breadcrumb title=' store' />
        </div>
        <div className='big red'>
          <Breadcrumb title=' team' />
        </div>
        <div className='small'>
          <Breadcrumb title='select your favorite team to view it’s jersys.' />
        </div>
      </div>
    )
  }
}

export default CollectionsEvery

