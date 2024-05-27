import React from 'react'
import { FaHeart } from "react-icons/fa";
import styles from './Footer.module.scss'

const Footer = () => {
  return (
   <div className={styles.footerDiv}>
    <div className={styles.container}>
        <p>Copyright ©2024 All rights reserved | This template is made with <FaHeart style={{color:'red'}}/> by Colorlib</p>
    </div>
   </div>
  )
}

export default Footer