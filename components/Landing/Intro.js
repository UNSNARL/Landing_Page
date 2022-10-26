import React from "react";
import styles from "../../styles/Landing/Intro.module.css";

const Intro = () => {
  return (
    <div class={styles.container}>
      <div class="row">
      <img class={styles.curve1} src='curve.svg' />
      <img class={styles.curve2} src='curve1.svg' />
        <div class="col-12 col-xl-6">
          <div class={styles.left1}>
            <div className={styles.box1}>
                <div className={styles.box2}>
                    SAVE 75%
                </div>
                <h1 className={styles.heading3}>
                    For the Black Friday weekend
                </h1>
            </div>
            <div class={styles.detectt}>
              <div className={styles.heading5}>Welcome to </div>
            <div className={styles.heading1}>
              <span>DetectBox</span>
              <span>DetectBox</span>
            </div>
            </div>
            <p className={styles.para1}>A <span className={styles.para2}>Progressive</span> Web3</p>
            <p className={styles.para11}>Bug-Bounty platform.</p>
            <p className={styles.para3}>Get your code reviewed from an extensive community of developers, </p>
            <p className={styles.para31}>hackers,pen-testers and auditors trusted by all major blockchains.</p>
            <button class={styles.trial}>
                    <p className={styles.trialtext}>Try For FREE</p>
                    <div>
                        <img src='Group 16.svg' />
                    </div>
            </button>
          </div>
        </div>

        

        <div class="col-12 col-xl-6">
          <img class={styles.bitcoin} src='Illustration.svg' />
        </div>

        <div class="col-12 col-md-4">
          <div className={styles.stats}>
            <img className={styles.statsicon} src='Icon.svg' />
            <div className={styles.statsfig}>
              <h1 className={styles.statshead}>$33B+</h1>
              <p className={styles.statspara}>Total Defi loss till date</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 ">
          <div className={styles.stats}>
            <img className={styles.statsicon} src='Icon (1).svg' />
            <div className={styles.statsfig}>
              <h1 className={styles.statshead}>50+</h1>
              <p className={styles.statspara}>No. of DeFi companies affected</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div className={styles.stats}>
            <img className={styles.statsicon} src='Icon (2).svg' />
            <div className={styles.statsfig}>
              <h1 className={styles.statshead}>200</h1>
              <p className={styles.statspara}>DeFi hacks reported till date</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <img class={styles.img2} src='Illustrations.svg' />
        </div>

        <div class="col-12 col-xl-6">
          <div class={styles.left2}>
            <h1 className={styles.heading2}> Why you should choose UNSNARL </h1>
            <p className={styles.para33}>Experience the next generation Ecosystem Based Auditing(EBA) platform leveraged by a world-wide trusted community. No project deployment delays, no extra costs, optimum security.</p>
            <button class={styles.trial1}>
                    <p className={styles.trialtext}>Learn More</p>
            </button>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default Intro;
