import React from 'react'
import styles from "../../styles/Detectbox/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.heading1}>A Progressive</h1>
        <h1 className={styles.heading2}>Bug Bounty Platform.</h1>
        <p className={styles.para1}>Get your code reviewed from an extensive community of developers, hackers, pen-testers and auditors trusted by all major blockchains.</p>
        <button className={styles.button}>Login <span className={styles.button1}>to</span> Detect<span className={styles.button1}>box</span></button>
      </div>
      <img class={styles.subtract} src='Subtract.png' />
      <div class={styles.dashboarddiv}>
        <img class={styles.dashboard} src='Dashboard.png' />
      </div>
    </div>
  )
}

export default Intro