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
            <h4 className='mb-5'> Quick Link</h4>
            <h6 >Home</h6>
            <h6 >Products</h6>
            <h6 >About</h6>
            <h6 >Features</h6>
            <h6 >Contact</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3 text-white">
          <div className='d-flex flex-column'>
            <h4 className='mb-5'> Resources</h4>
            <h6 >Download Whitepaper</h6>
            <h6 >Smart Token</h6>
            <h6 >Blockchain Explorer</h6>
            <h6 >Crypto API</h6>
            <h6 >Interest</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div className='d-flex flex-column '>
            <h3 className='text-white'>We accept following</h3>
            <h3 className='text-white'>payment systems</h3>
            <div className='d-flex mt-5 mb-5 '>
              <img class='mr-3' src="Visa.png" />
              <img class='mr-3' src="Mastercard.png" />
              <img class='mr-3' src="Bitcoin.png" />
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 mt-5">
          <div class="d-flex flex-column">
             <p className='text-white ml-5'>
          ©2022 UNSNARL. All rights reserved
             </p>
          </div>
        </div>

        <div class="col-12 col-md-6 mb-5 mt-5">
          <div class="d-flex flex-column ">
            <div className='ml-auto mr-5'>
            <img class='mr-3' src='facebook-f 1.svg' />
            <img class='mr-3' src='instagram 1.svg' />
            <img class='mr-3' src='linkedin 1.svg' />
            <img class='mr-3' src='twitter 1.svg' />
            <img class='mr-3' src='youtube 1.svg' />
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
