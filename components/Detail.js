import React from "react";
import styles from '../styles/Detail.module.css' 

const Detail = () => {
  return (
    <div>
        <div className={styles.container}>
            <h1 className='text-white text-center'>We are Backed by Polygon Technology !</h1>
        </div>
        <div className='text-center'>
            <img className={styles.img} src='partnership.png' />
        </div>
        <div className={styles.container1}>
            <h1 className={styles.header1}>DetectBox is absolutely Free for a year for Startups.</h1>
            <h1 className={styles.header2}>
            Contribute to the Detect-Community and earn rewards.
            </h1>


            <div class="row">
                <div class="col-12 col-md-4 ">

                </div>
            </div>


        </div>
    </div>
  )
}

export default Detail