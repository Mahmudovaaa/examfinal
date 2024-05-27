import React from 'react'
import styles from './Sectionfour.module.scss'
const Sectionfour = () => {
  return (
  <div className={styles.fourHead}>
    <div className={styles.container}>
        <div className={styles.textCommon}>
            <div className={styles.textBlog}>
                <h1>Wine's Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                <span>VIEW ALL PRODUCTS-</span>
            </div>
            <div className={styles.box}>
            <div className={styles.boxs}>
                  <div className={styles.fourImg}>
                  <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg " alt="" />
                  </div>
                   <div className={styles.needspan}>
                   <p>WHAT YOU NEED TO KNOW ABOUT PREMIUM ROSECCO</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</span>
                    <h5>Dave Rogers in News</h5>
                   </div>
                </div>
                <div className={styles.boxs}>
                <div className={styles.fourImg}>
                  <img src="https://preview.colorlib.com/theme/wines/images/img_2.jpg" alt="" />
                  </div>
                  <div className={styles.needspan}>
                   <p>WHAT YOU NEED TO KNOW ABOUT PREMIUM ROSECCO</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</span>
                    <h5>Dave Rogers in News</h5>
                   </div>
                </div>
                <div className={styles.boxs}>
                <div className={styles.fourImg}>
                 <img src="https://preview.colorlib.com/theme/wines/images/img_3.jpg" alt="" />
                 </div>
                 <div className={styles.needspan}>
                   <p>WHAT YOU NEED TO KNOW ABOUT PREMIUM ROSECCO</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</span>
                    <h5>Dave Rogers in News</h5>
                   </div> 
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Sectionfour