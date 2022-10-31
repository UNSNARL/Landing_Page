import React from 'react'
import styles from "../../styles/Detectbox/Performer.module.css";

const Performer = () => {
  return (
    <div class={styles.container}>
      <div class="row">
          <div class="col-12 col-md-5">
            <div className={styles.performer}>
              <h1 className={styles.performerheading}>Our Top Performers</h1>
              <p className={styles.performerpara}>We showcase our top-performers from our leaderboard and help them build a credibility in the industry.</p>
              <form>
                <input class={styles.name} type="text" id="name" name="yourname" placeholder="Full Name" />
                <br />
                <input class={styles.email} type="text" id="email" name="youremail" placeholder="Your Email" />
                <br />

                <input class={styles.password} type="text" id="password" name="yourpassword" placeholder="Password" />
                <br />

                <input class={styles.repeatpassword} type="text" id="repeatpassword" name="yourrepeatpassword" placeholder="Repeat Password" />
                <br /> 

                <button class={styles.button}>Signup Now</button>

                <div class={styles.register}>
                  <img class={styles.google} src='Group 260.png' />
                  <img class={styles.twitter} src='Group 279.png' />
                </div>
              </form>
            </div>
          </div>

          <div class="col-12 col-md-7">
            <div>

            </div>
          </div>


      </div>


      <div class={styles.companylist}>
        <div class={styles.companydiv}>
          <h1 class={styles.companyheader}>Companies we Worked With Since 2022</h1>
          <div class={styles.companylistdiv}>
            <img src='Group 280.png' class={styles.img1} />
            <img src='Group 282.png' class={styles.img1} />
            <img src='Rectangle 32.png' class={styles.img1} />
            <img src='Group 284.png' class={styles.img1} />
            <img src='Group 285.png' class={styles.img1} />
            <img src='Group 286.png' class={styles.img1} />
          </div>
        </div>

        <div>

        </div>

        <div class="row">
          <div class="col-12 col-md-6">
            <div class={styles.contactdiv}>
              <img src='Group 133.png' class={styles.contact} />
            </div>
          </div>

          <div class="col-12 col-md-6">

            <div className={styles.performer1}>
              <h1 className={styles.performerheading}>Get In Touch</h1>
              <p className={styles.performerpara}>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
              <form>
                <input class={styles.email} type="text" id="email" name="youremail" placeholder="Your Email" />
                <br />
                <input class={styles.name} type="text" id="name" name="yourname" placeholder="Your Name" />
                <br />

                <textarea id="query" rows="8" cols="50" name="yourquery" class={styles.query} placeholder="Your Query">
                  Your Query
                </textarea>
                <br /> 

                <button class={styles.button}>Get in Touch</button>
              </form>
            </div>
          </div>


        </div>

        
        <div class={styles.contactfootdiv}>
          <h1 class={styles.contactsection}>More Sections</h1>
          <div>
            <button class={styles.button1}>Go to UNSNARL</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Performer