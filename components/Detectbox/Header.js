import React from 'react'
import styles from "../../styles/Detectbox/Home.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div class={styles.heading1}>
    <a class={styles.heading2} href="#">
      <img  class={styles.heading3} src="detect-box-about1.svg" />
      <h1 class={styles.heading4}>Detect<span class={styles.span1}>Box</span></h1>
    </a>
    <p className={styles.para}>POWERED BY <img class={styles.img2} src='Unsnarl_WEB.svg' />NSNARL</p>
  </div>
  
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item text-center">
        <a className={`nav-link mx-3 ${styles.headertext} `} href="#">Home </a>
      </li>
      <li className="nav-item text-center">
        <a className={`nav-link mx-3 ${styles.headertext} `} href="#">Pricing </a>
      </li>
    </ul>
    <div>
      <button className={styles.button}>Login <span className={styles.button1}>to</span> Detect<span className={styles.button1}>box</span></button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header