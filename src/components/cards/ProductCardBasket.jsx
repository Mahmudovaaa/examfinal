import React from 'react'
import Button from '../buttons/Button'

const ProductCardBasket = ({item, sil}) => {
  return (
    <div>
    <img src={item.avatar} alt="apiLogo" />
    <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
    </div>
    <div>
        <Button text={'SIL'} onclick={sil}/>
    </div>
  </div>
  )
}

export default ProductCardBasket