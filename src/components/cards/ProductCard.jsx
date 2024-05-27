import React from 'react'
import Button from '../buttons/Button'
import styles from './ProductCard.module.scss'
const ProductCard = ({item, basket, wishlist}) => {
  return (
  <div className={styles.ctnProducts}>
    <img src={item.thumbnail} alt="apiLogo" />
    <div className={styles.price}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
    </div>
    <div className={styles.btn}>
        <Button text={'gobasket'} onclick={basket}/>
        <Button text={'gowishlist'} onclick={wishlist}/>
    </div>
  </div>
  )
}

export default ProductCard