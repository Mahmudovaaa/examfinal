import React from 'react'
import styles from './Sectiontree.module.scss'
const Sectiontree = () => {
  return (
   <div className={styles.treeContainerHead}>
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.boxs}>
            <div className={styles.treeImg}>
                    <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg" alt="womenlogo" />
                </div>
                <div className={styles.ipsum}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae, odio at voluptatibus, ratione voluptas, omnis veniam quae dignissimos quisquam officiis aut nihil natus nostrum ducimus magni voluptate sint eius.</p>
                    <span style={{color:'purple'}}>-ALLIE SMITH</span>
                </div>
            </div>
            <div className={styles.boxs}>
            <div className={styles.treeImg}>
                <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg" alt="womenlogo" />
                </div>
                <div className={styles.ipsum}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae, odio at voluptatibus, ratione voluptas, omnis veniam quae dignissimos quisquam officiis aut nihil natus nostrum ducimus magni voluptate sint eius.</p>
                    <span style={{color:'purple'}}>-COLLIN MILLER</span>
                </div>
            </div>
            <div className={styles.boxs}>
            <div className={styles.treeImg}>
                    <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="menlogo" />
                </div>
                <div className={styles.ipsum}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae, odio at voluptatibus, ratione voluptas, omnis veniam quae dignissimos quisquam officiis aut nihil natus nostrum ducimus magni voluptate sint eius.</p>
                    <span style={{color:'purple'}}>-HARLEY PERKINS</span>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Sectiontree