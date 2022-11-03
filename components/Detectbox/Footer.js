import React from 'react'
import styles from "../../styles/Detectbox/Footer.module.css";

const Footer = () => {
  return (
    <div>
    <div className={styles.container}>
      <div class="row mt-5">

        <div class={`col-12 col-md-6 col-lg-6 ${`cont1`}`}>
          <div class={styles.heading}>
            <img className={styles.img} src="detect-box-about1.svg" />
            <h1 className={styles.headingtext}>UNSNARL</h1>
          </div>
          <p className={styles.para}>POWERED BY <img class={styles.img2} src='Unsnarl_WEB.svg' />NSNARL</p>
          <p class={styles.footerpara}>DetectBox is built by an experienced team of youngsters who want to make the web3 ecosystem more secure by leveraging the power of community.</p>
        </div>

        <div class={`col-12 col-md-6 col-lg-2 text-white ${`cont1`}`}>
          <div className='d-flex flex-column'>
            <h6 className={styles.footer11}>Home</h6>
            <h6 className={styles.footer1}>Section One</h6>
            <h6 className={styles.footer1}>Section Two</h6>
            <h6 className={styles.footer1}>Section Three</h6>
          </div>
        </div>

        <div class={`col-12 col-md-6 col-lg-2 text-white ${`cont1`}`}>
          <div className='d-flex flex-column'>
            <h4 className={styles.footer211}> Home</h4>
            <h6 className={styles.footer22}>Section One</h6>
            <h6 className={styles.footer22}>Section Two</h6>
            <h6 className={styles.footer22}>Section Three</h6>
          </div>
        </div>

        <div class={`col-12 col-md-6 col-lg-2 text-white ${`cont1`}`}>
        <div className='d-flex flex-column'>
            <h4 className={styles.footer211}> Home</h4>
            <h6 className={styles.footer22}>Section One</h6>
            <h6 className={styles.footer22}>Section Two</h6>
            <h6 className={styles.footer22}>Section Three</h6>
          </div>
        </div>



        <div class="col-12 col-md-6 mt-5">
          <div class="d-flex flex-column">
             <p className={styles.rights1}>
          ©2022 UNSNARL. All rights reserved
             </p>
          </div>
        </div>

        <div class="col-12 col-md-6 mb-5 mt-5">
          <div class="d-flex flex-column ">
            <div className={`ml-auto ${styles.rights2}`}>
            <img class='mr-3' src='facebook-f 1.svg' />
            <img class='mr-3' src='instagram 1.svg' />
            <img class='mr-3' src='linkedin 1.svg' />
            <img class='mr-3' src='twitter 1.svg' />
            <img class={styles.youtube} src='youtube 1.svg' />
          </div>
          </div>
        </div>

      </div>
    </div>
    </div>

  )
}

export default Footer