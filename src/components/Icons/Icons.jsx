import React from 'react';
import search from '../../images/search.png'
import favorites from '../../images/favorites.png'
import cart from '../../images/cart.png'


export const Icons = () => {
  return (
    <div className='icons-wrapper'>
<img src={search} alt="" />
<img src={favorites} alt="" />
<img src={cart} alt="" />
    </div>
  )
}

export default Icons;