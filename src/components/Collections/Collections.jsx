import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import './Collections.css'

class Collections extends React.Component {

  render() {

    return (
      <div className='collections-container'>
        <div className='small'>
          <Breadcrumb title='jerseys bestsellers' />
        </div>
        <div className='big red'>
          <Breadcrumb title='bestsellers' />
        </div>
        <div className='big white'>
          <Breadcrumb title='collection' />
        </div>
        <div className='small'>
          <Breadcrumb title='the jerseys of the best nba players of the regular seasons.' />
        </div>
      </div>
    )
  }
}

export default Collections

