import React from 'react'
import Button from '../../components/buttons/Button'

const DashCard = ({item, sil}) => {
  return (
    <div>
    <img src={item.thumbnail} alt="apiLogo" />
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

export default DashCard