import React from 'react'
import styles from '../styles/How.module.css'

const How = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading1}>How to we work</h1>
        <h1 className={styles.heading2}>Our System and Journey</h1>

        <div class='row'>
            <div class="col-12 col-md-6 mb-3">
                <div>
                    <h1 className={styles.heading3}>We build a Trusted </h1>
                    <h1 className={styles.heading3}>community of Developers, </h1>
                    <h1 className={styles.heading3}>Ethical Hackers and Auditors</h1>
                    <button className={styles.button}>Learn More</button>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-3 ">
                <div>
                    <img className={styles.img} src="Chart.svg" />
                </div>
                <div>
                    <img className={styles.img1} src="carbon_add.svg" />
                </div>
            </div>
        </div>

        <div class='row'>
            <div class="col-12 col-md-6 mb-3 ">
                <div>
                    <img className={styles.img4} src="image21.png" />
                </div>
            </div>

            <div class="col-12 col-md-6 mb-3">
                <div>
                    <h1 className={styles.heading4}>Our team of experts review all</h1>
                    <h1 className={styles.heading4}>the recent hacks/exploits and</h1>
                    <h1 className={styles.heading4}>devise healthy security </h1>
                    <h1 className={styles.heading4}>practices.</h1>
                    <button className={styles.button1}>Learn More</button>
                </div>
            </div>
        </div>

        <div class='row mt-5'>
            <div class="col-12 col-md-6 mb-3">
                <div>
                    <h1 className={styles.heading3}>We secure web3 Enterprises </h1>
                    <h1 className={styles.heading3}>by building tools using</h1>
                    <h1 className={styles.heading3}>cutting-edge technologies.</h1>
                    <button className={styles.button}>Learn More</button>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-3 ">
                <table id="customers" className='text-white'>
                    <tr>
                        <td className={styles.ele}><h6>Smart Contract Auditing</h6></td>
                        <td className={styles.ele1}>Coming Soon </td>
                        <td className={styles.ele2}>Learn More</td>
                    </tr>
                    <tr className={styles.ele4}>
                        <td className={styles.ele3}>
                            <img className={styles.img2} src="detect-box.png" />
                            <h4 className={styles.ele6}>DetectBox</h4>
                            <div className={styles.ele5}>100K Users</div>
                        </td>
                        <td className={styles.ele1}>Bug Bounty</td>
                        <td className={styles.ele2}>Prices and Pricing</td>
                    </tr>
                    <tr>
                        <td className={styles.ele}><h6>Automated Anomaly Detection</h6></td>     
                        <td className={styles.ele1}>Coming Soon </td>
                        <td className={styles.ele2}>Learn More</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class='row mt-5'>
            <div class="col-12 col-md-6 mb-3 ">
                <div>
                    <img className={styles.img5} src="process.png" />
                </div>
            </div>

            <div class="col-12 col-md-6 mb-3">
                <div>
                    <h1 className={styles.heading4}>We try to build a secure </h1>
                    <h1 className={styles.heading4}>development pipeline for web3</h1>
                    <h1 className={styles.heading4}>development. </h1>
                    <button className={styles.button1}>Learn More</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default How