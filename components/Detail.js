import React from "react";
import styles from "../styles/Detail.module.css";

const Detail = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          We are Backed by Polygon Technology !
        </h1>
      </div>
      <div className="text-center">
        <img className={styles.img} src="partnership.png" />
      </div>
      <div className={styles.container1}>
        <h1 className={styles.header1}>
          DetectBox is absolutely Free for a year for Startups.
        </h1>
        <h1 className={styles.header2}>
          Contribute to the Detect-Community and earn rewards.
        </h1>

        <div class="row mx-5">

            <div class="col-12 col-md-4">
            <div className={styles.region2}> 
                <div className='text-center'>
                    <img className={styles.img1} src='detect-box-about1.svg' />
                </div>
                <h1 className={styles.head}>DetectBox</h1>
                <p className={styles.para}>POWERED BY <img class={styles.img2} src='Unsnarl_WEB.svg' />NSNARL</p>
                <p className={styles.para1}>
                A Non-Traditional Bug-Bounty Platfrom that is extremely seamless and reliable.             
                </p>

                <button class={styles.trial}>
                    <p className={styles.trialtext}>Free Trial</p>
                    <div>
                        <img src='Group 16.svg' />
                    </div>
                </button>

            </div>
            </div>

        <div class="col-12 col-md-4">
            <div className={styles.region3}> 
               <div className='text-center'>
                   <img className={styles.img3} src='icons1.png' />
               </div>
               <h1 className={styles.head1}>D-Community</h1>
               <p className={styles.para2}>
                    Detect-Community thrives to be the strongest community of developers, hackers and auditors all over the world.               
                </p>
               <img class={styles.arrow} src='ArrowRight.svg' />
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div className={styles.region4}> 
               <img className={styles.img4} src='UNSNARL_logo1.svg' />
               <h1 className={styles.head2}>U-Articles</h1>
               <p className={styles.para3}>
                    Unsnarl-Articles is a set of deeply researched and most simplistically presented information on hacks and audits.
               </p>
               <img class={styles.arrow1} src='ArrowRight.svg' />
            </div>
          </div>



        </div>





      </div>
    </div>
  );
};

export default Detail;
