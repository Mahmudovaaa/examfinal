import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { FaBars } from "react-icons/fa";

const Header = () => {
    const navigation = useNavigate()

const goHome = () => {
    navigation('/')
}
const goBasket = () => {
    navigation('/basket')
}
const goWish = () => {
    navigation('/wishlist')
}
const goPanel = () => {
    navigation('/panel')
}
  return (
<div className={styles.container}>
    <div className={styles.mainContainer}>
        <div className={styles.oneImg}>
            <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="wineslogo" />
        </div>
        <div className={styles.navbar}>
            <ul>
                <li><a onClick={goHome}>HOME</a></li>
                <li><a onClick={goBasket}>BASKET</a></li>
                <li><a onClick={goWish}>WISHLIST</a></li>
                <li><a onClick={goPanel}>ADMIN PANEL</a></li>
                <li><a >CONTACT</a></li>
            </ul>
          <div className={styles.bar}>
          <FaBars style={{fontSize:'25px'}}/>
          </div>
        </div>
    </div>
</div>
  )
}

export default Header