import React from 'react'
import styles from "../../styles/Detectbox/Feature.module.css";


const Feature = () => {
  return (
    <div class={styles.container}>
      <div class={styles.feature}>
        <h1 class={styles.header}>Feature Boxes</h1>
        <p class={styles.para}>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem. </p>
      </div>
      <div class="row">
          <div class="col-12 col-md-4">
            <div class={styles.box1}>
              <div class={styles.imgbox}>
                <img class={styles.img} src='Group 268.png' />
              </div>
              <h1 class={styles.header1}>Fully Customizable</h1>
              <p class={styles.para1}>Web3 enterprises submit their requirements to us and we create a customised dashboard as per their needs.</p>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class={styles.box2}>
              <div class={styles.imgbox}>
                <img class={styles.img} src='Group 269.png' />
              </div>
              <h1 class={styles.header1}>Classified Hacks</h1>
              <p class={styles.para1}>We classify recent hacks for you so that you can progress in bug search as new hacks keep on happening.</p>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class={styles.box3}>
              <div class={styles.imgbox}>
                <img class={styles.img} src='Group1.png' />
              </div>
              <h1 class={styles.header1}>Ecosystem-Based Audits</h1>
              <p class={styles.para1}>Our community trusted by all major blockchains scruitinizes your source code, finds bugs and submits report to the respective enterprise.</p>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class={styles.box4}>
              <div class={styles.imgbox}>
                <img class={styles.img} src='Group 273.png' />
              </div>
              <h1 class={styles.header1}>Dedicated Triage Team</h1>
              <p class={styles.para1}>We assign a personal accountability partner for each Bug-Bounty program. A Dedicated triage team processes and verifies all bug reports.</p>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class={styles.box5}>
              <div class={styles.imgbox}>
                <img class={styles.img} src='Group 272.png' />
              </div>
              <h1 class={styles.header1}>Credibility Partner</h1>
              <p class={styles.para1}>We help any hacker, developer and auditor who is an active member of our community to build their credibility and presence in the security market.</p>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class={styles.box6}>
              <div class={styles.imgbox}>
                <img class={styles.img} src='Group 271.png' />
              </div>
              <h1 class={styles.header1}>May-Day Support</h1>
              <p class={styles.para1}>We try our best to connect the web3 enterprises with the right people in our community in case they face any 
may-day exploit.</p>
            </div>
          </div>


        </div>

        <div class="row">
          <div class="col-12 col-md-6">
            <img class={styles.collab} src='collab.png' />
          </div>

          <div class="col-12 col-md-6">
            <div class={styles.featurebox}>
              <h1 class={styles.featureheader}>We are building a community trusted by all major chains.</h1>
              <p class={styles.featurepara}>Top developers, hackers, auditors and pen-testers all at one place. A perfect place to jump in for Ecosystem Based Audits.</p>
              <button class={styles.featurebut}>Join in Now</button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-6">
          <div class={styles.featurebox1}>
              <h1 class={styles.featureheader1}>Login to DetectBox For Enterprises</h1>
              <p class={styles.featurepara1}>Web3 enterprises can post their Bug-Bounty Programs on our platform in a structured format.</p>
              <div>
                <button class={styles.featurebut1}>Enterprise Login</button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class={styles.featurebox2}>
              <h1 class={styles.featureheader2}>Login to DetectBox For Community</h1>
              <p class={styles.featurepara2}>Community members can participate in several bug-bounty programs, earn rewards and build credibility.</p>
              <div>
                <button class={styles.featurebut2}>Community Login</button>
              </div>
            </div>
          </div>
        </div>

       <div>
        <div>
          <div>
            <h1 class={styles.bountymainheader}>Trending Bounties</h1>
          </div>

          <div class="row">
            <div class="col-12 col-md-4"> 
              <div class={styles.bounty1}>
                <div class='text-center'>
                  <img src='Group 276.png' class={styles.bountyicon1} />
                </div>
                <p class={styles.bountypara1}>OpenZeppelin</p>
                <hr class={styles.horizontalline} />
                <div class={styles.bountyboss1}>
                  <div class={styles.bountydiv1}>
                    <div class={styles.bountyimgdiv}>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                      OZ Smart Contract
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                      Category - Tools | Defi | Protocol
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                      Type - smart contract | blockchain
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                      Rewards on Multiple Critical Issues
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                    Standard Commission rules apply
                    </h1>
                  </div>

                  <hr class={styles.horizontalline1} />

                  <div class={styles.bountyfooter}>
                    <p className={styles.bountyfooterpara}>upto</p>
                    <h1 className={styles.bountyfooterheader}>$10M</h1>
                    <button className={styles.bountybutton}>Signup Now</button>
                  </div>

                </div>
              </div>
            </div>

            <div class="col-12 col-md-4"> 
              <div class={styles.bounty2}>
                <div class='text-center'>
                  <img src='Group 277.png' class={styles.bountyicon1} />
                </div>
                <p class={styles.bountypara1}>WormHole</p>
                <hr class={styles.horizontalline} />
                <div class={styles.bountyboss1}>
                  <div class={styles.bountydiv1}>
                    <div class={styles.bountyimgdiv}>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                    WormHole Smart Contract
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                    Category - Tools | Infra | Protocol
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                      Type - smart contract | blockchain
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                      Rewards on Multiple Critical Issues
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                    Standard Commission rules apply
                    </h1>
                  </div>

                  <hr class={styles.horizontalline1} />

                  <div class={styles.bountyfooter}>
                    <p className={styles.bountyfooterpara}>upto</p>
                    <h1 className={styles.bountyfooterheader}>$10M</h1>
                    <button className={styles.bountybutton}>Signup Now</button>
                  </div>

                </div>
              </div>
            </div>

            <div class="col-12 col-md-4"> 
              <div class={styles.bounty3}>
                <div class='text-center'>
                  <img src='Group 278.png' class={styles.bountyicon1} />
                </div>
                <p class={styles.bountypara1}>AAVE Protocol</p>
                <hr class={styles.horizontalline} />
                <div class={styles.bountyboss1}>
                  <div class={styles.bountydiv1}>
                    <div class={styles.bountyimgdiv}>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                    AAVE V3 Protocol
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                    Category - Protocol
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                      Type - smart contract | blockchain
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                      Rewards on Multiple Critical Issues
                    </h1>
                  </div>

                  <div class={styles.bountydiv1}>
                    <div>
                      <img src='Group 275.png' class={styles.bountyicon11} />
                    </div>
                    <h1 class={styles.bountypara11}>
                    Standard Commission rules apply
                    </h1>
                  </div>

                  <hr class={styles.horizontalline1} />

                  <div class={styles.bountyfooter}>
                    <p className={styles.bountyfooterpara}>upto</p>
                    <h1 className={styles.bountyfooterheader}>$10M</h1>
                    <button className={styles.bountybutton}>Signup Now</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Feature