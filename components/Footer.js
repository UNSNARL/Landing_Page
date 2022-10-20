import React from "react";
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div>
      <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-3">
        <img className={styles.img} src="Unsnarl_WEB.svg" />
        <h1 className={styles.headingtext}>UNSNARL</h1>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div className='d-flex flex-column'>
            <h4 > Quick Link</h4>
            <h6 >Home</h6>
            <h6 >Products</h6>
            <h6 >About</h6>
            <h6 >Features</h6>
            <h6 >Contact</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div className='d-flex flex-column'>
            <h4 > Resources</h4>
            <h6 >Download Whitepaper</h6>
            <h6 >Smart Token</h6>
            <h6 >Blockchain Explorer</h6>
            <h6 >Crypto API</h6>
            <h6 >Interest</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div className='d-flex flex-column'>
            <h3 >We accept following</h3>
            <h3 >payment systems</h3>
            <div className='d-flex'>
              <img src="Visa.png" />
              <img src="Mastercard.png" />
              <img src="Bitcoin.png" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
