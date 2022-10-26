import React from "react";
import styles from "../../styles/Landing/How.module.css";
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

      <div class="col justify-content-center align-items-center">
        <div class="row align-items-center">
          <div class="col-12 col-md-6 mb-3 order-1 order-md-0">
            <div class={styles.box2}>
              <h1 className={styles.heading3}>
                We build a Trusted community of Developers, Ethical Hackers and
                Auditors.
              </h1>
            </div>
            <button className={styles.button}>Learn More</button>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <div>
              <img className={styles.img} src="Chart.svg" />
            </div>
            <div>
              <img className={styles.img1} src="carbon_add.svg" />
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-12 col-md-6 mb-3">
            <div>
              <img className={styles.img4} src="Group 113.png" />
            </div>
          </div>

          <div class="col-12 col-md-6 mb-3 order-1">
            <div class={styles.box1}>
              <h1 className={styles.heading4}>
                Our team of experts review all the recent hacks/exploits and
                devise healthy security practices.
              </h1>
            </div>
            <button className={styles.button1}>Learn More</button>
          </div>
        </div>

        <div class="row mt-5  align-items-center">
          <div class="col-12 col-md-6 mb-3 mt-sm-5 order-1 order-md-0">
            <div class={styles.box2}>
              <h1 className={styles.heading3}>
                We secure web3 Enterprises by building tools using cutting-edge
                technologies.
              </h1>
            </div>
            <button className={styles.button}>Learn More</button>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <div>
              <img className={styles.table} src="Table.png" />
            </div>
          </div>
        </div>

        <div class="row mt-5  align-items-center">
          <div class="col-12 col-md-6 mb-3 mb-sm-5">
            <div>
              <img className={styles.img5} src="Group112.png" />
            </div>
          </div>

          <div class="col-12 col-md-6 mb-3 mt-sm-5">
            <div class={styles.box1}>
              <h1 className={styles.heading4}>
                We try to build a secure development pipeline for web3
                development.
              </h1>
            </div>
            <button className={styles.button1}>Learn More</button>
          </div>
        </div>
      </div>

      <div className={styles.newsletter}>
        <div className={styles.newslettercontainer}>
          <div className={styles.newsletterbox}>
            <div>
              <h1 class={styles.headingd}>Start Detecting Now</h1>
              <p class={styles.parad1}>
                Join now with UNSNARL to get the latest
              </p>
              <p class={styles.parad2}>news and an early access to DetectBox</p>
            </div>
            <div class={styles.inputbut}>
              <div>
                <input
                  id="inputID"
                  class={styles.input1}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <button
                  type="button"
                  disabled={state === "LOADING"}
                  onClick={subscribe}
                  class={styles.subscribe}
                >
                  Subscribe
                </button>
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
    </div>
  );
};

export default How;
