import React from 'react'
import styles from '../styles/Home.module.css'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark ">
  <a className={styles.heading} href="#">
    <img className={styles.img} src="Unsnarl_WEB.svg" />
    <h1 className={styles.headingtext}>UNSNARL</h1>
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item text-center">
        <a className="nav-link mx-2 text-white" href="#">Products </a>
      </li>
      <li className="nav-item text-center">
        <a className="nav-link mx-2 text-white" href="#">About </a>
      </li>
      <li className="nav-item text-center">
        <a className="nav-link mx-2 text-white" href="#">Newsletter </a>
      </li>
      <li className="nav-item text-center">
        <a className="nav-link mx-2 text-white" rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/unsnarl/?viewAsMember=true">Follow Us </a>
      </li>
    </ul>
    <div class={styles.center}>
      <button className={styles.button}>Coming Soon</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header