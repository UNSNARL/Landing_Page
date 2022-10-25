import React from "react";
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-3">
        <div class={styles.heading}>
        <img className={styles.img} src="Unsnarl_WEB.svg" />
        <h1 className={styles.headingtext}>UNSNARL</h1>
        </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3 text-white">
          <div className='d-flex flex-column'>
            <h4 className={styles.footer11}> Quick Link</h4>
            <h6 className={styles.footer1}>Home</h6>
            <h6 className={styles.footer1}>Products</h6>
            <h6 className={styles.footer1}>About</h6>
            <h6 className={styles.footer1}>Features</h6>
            <h6 className={styles.footer1}>Contact</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3 text-white">
          <div className='d-flex flex-column'>
            <h4 className={styles.footer21}> Resources</h4>
            <h6 className={styles.footer22}>Download Whitepaper</h6>
            <h6 className={styles.footer22}>Smart Token</h6>
            <h6 className={styles.footer22}>Blockchain Explorer</h6>
            <h6 className={styles.footer22}>Crypto API</h6>
            <h6 className={styles.footer22}>Interest</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3 ">
          <div className={styles.footer2}>
            <h3 className={styles.footerhead}>We accept following payment systems</h3>
            <div className={styles.footercont1}>
              <img class={styles.visa} src="Visa.png" />
              <img class={styles.visa} src="Mastercard.png" />
              <img class={styles.visa} src="Bitcoin.png" />
            </div>
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
  );
};

export default Footer;
