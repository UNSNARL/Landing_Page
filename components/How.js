import React from "react";
import styles from "../styles/How.module.css";
import { useState } from "react";
import axios from "axios";

const How = () => {

  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>How do we work</h1>
      <h1 className={styles.heading2}>Our System and Journey</h1>

      <div class="row">
        <div class="col-12 col-md-6 mb-3 order-sm-1 order-md-0">
          <div class={styles.box2}>
            <h1 className={styles.heading3}>We build a Trusted </h1>
            <h1 className={styles.heading3}>community of Developers, </h1>
            <h1 className={styles.heading3}>Ethical Hackers and Auditors.</h1>
          </div>
          <button className={styles.button}>Learn More</button>
        </div>
        <div class="col-12 col-md-6 mb-3 order-sm-0 order-md-1">
          <div>
            <img className={styles.img} src="Chart.svg" />
          </div>
          <div>
            <img className={styles.img1} src="carbon_add.svg" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 mb-3 ">
          <div>
            <img className={styles.img4} src="Group 113.png" />
          </div>
        </div>

        <div class="col-12 col-md-6 mb-3">
          <div class={styles.box1}>
            <h1 className={styles.heading4}>Our team of experts review all</h1>
            <h1 className={styles.heading4}>the recent hacks/exploits and</h1>
            <h1 className={styles.heading4}>devise healthy security </h1>
            <h1 className={styles.heading4}>practices.</h1>
          </div>
          <button className={styles.button1}>Learn More</button>
        </div>
      </div>

      <div class="row mt-5 ">
        <div class="col-12 col-md-6 mb-3">
          <div class={styles.box2}>
            <h1 className={styles.heading3}>We secure web3 Enterprises </h1>
            <h1 className={styles.heading3}>by building tools using</h1>
            <h1 className={styles.heading3}>cutting-edge technologies.</h1>
          </div>
          <button className={styles.button}>Learn More</button>
        </div>
        <div class="col-12 col-md-6 mb-3">
          <table id="customers" className="text-white">
           <tbody className={styles.table}>
            <tr className='ml-3'>
              <td className={styles.ele}>
                <h6>Smart Contract Auditing</h6>
              </td>
              <td className={styles.ele1}>Coming<br/> Soon </td>
              <td className={styles.ele2}>Learn More</td>
            </tr>
            <tr className={styles.ele4}>
              <td className={styles.ele3}>
                <img className={styles.img2} src="detect-box.png" />
                <h4 className={styles.ele6}>Detect<br/>Box</h4>
                <div className={styles.ele5}>100K <br/>Users</div>
              </td>
              <td className={styles.ele1}>Bug Bounty</td>
              <td className={styles.ele2}>Prices and <br/>Pricing</td>
            </tr>
            <tr>
              <td className={styles.ele}>
                <h6>Automated <br/>Anomaly Detection</h6>
              </td>
              <td className={styles.ele1}>Coming <br/>Soon </td>
              <td className={styles.ele2}>Learn More</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-md-6 mb-3 ">
          <div>
            <img className={styles.img5} src="Group112.png" />
          </div>
        </div>

        <div class="col-12 col-md-6 mb-3">
          <div class={styles.box1}>
            <h1 className={styles.heading4}>We try to build a secure </h1>
            <h1 className={styles.heading4}>development pipeline for web3</h1>
            <h1 className={styles.heading4}>development. </h1>
          </div>
          <button className={styles.button1}>Learn More</button>
        </div>
      </div>

      <div className={styles.newsletter}>
        <div className={styles.newslettercontainer}>
          <div className={styles.newsletterbox}>
            <div>
              <h1 class={styles.headingd}>Start Detecting Now</h1>
              <p class={styles.parad1}>Join now with UNSNARL to get the latest </p>
              <p class={styles.parad2}>news and an early access to DetectBox</p>
            </div>
            <div>
              <input id="inputID" 
              size="30" class={styles.input1} 
              type='text' 
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder='Enter your email' />
            </div>
            <div>
              <button type="button" disabled={state==='LOADING'} onClick={subscribe} class={styles.subscribe}>Subscribe</button>
              {state === "ERROR" && (
              <p className={styles.error}>{errorMessage}</p>
            )}
            {state === "SUCCESS" && (
              <p className={styles.error}>Success!</p>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
