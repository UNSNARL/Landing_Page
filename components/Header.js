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
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link mx-2 text-white" href="#">Products </a>
      </li>
      <li className="nav-item">
        <a className="nav-link mx-2 text-white" href="#">About </a>
      </li>
      <li className="nav-item">
        <a className="nav-link mx-2 text-white" href="#">Newsletter </a>
      </li>
      <li className="nav-item">
        <a className="nav-link mx-2 text-white" target="_blank" href="https://www.linkedin.com/company/unsnarl/?viewAsMember=true">Follow Us </a>
      </li>
    </ul>
    <button className={styles.button}>Coming Soon</button>
  </div>
</nav>
    </div>
  )
}

export default Header