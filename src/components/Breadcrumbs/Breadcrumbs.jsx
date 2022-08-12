import React from 'react';
import point from '../../images/point.png'
import './Breadcrumbs.css'

function Breadcrumbs({ first, second }) {
  return (
    <div className='breadcrumbs-wrapper'>
      <h2><img src={point} /></h2>
      <h2>{first}</h2>
      <h2><img src={point} /></h2>
      <h2>{second}</h2>
    </div>
  )
}


export default Breadcrumbs