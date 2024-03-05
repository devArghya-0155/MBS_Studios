import Video from "../components/Video";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { DiscordLogo } from "phosphor-react";

import trailer from "../assets/Riders Republic_ Cinematic Premiere _ Ubisoft Forward 2020 _ Ubisoft [NA].mp4";
import gameplay from "../assets/Skate_gameplay.mp4";
import communityBg from "../assets/community-bg.png";
import communityBgRight from "../assets/community-bg-right.png";
import styles from "./Home.module.css";

gsap.registerPlugin(ScrollTrigger);
const text =
  "Shred & Roll: Get Ready for Skater Republic, the Epic Skateboarding Odyssey!";

const Home = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.reference}`,
          start: "top bottom",
          stop: "bottom bottom",
          scrub: true,
        },
      })
      .to(`.${styles.video}`, {
        scale: 0.7,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.refToGame}`,
          start: "top bottom",
          stop: "bottom bottom",
          scrub: true,
        },
      })
      .to(`.${styles.videoGame}`, {
        scale: 1.1,
      });
  }, []);

  return (
    <div style={{ background: "black" }}>
      <header>
        <div className={styles.content}>
          <p className={styles.heading}>Skate</p>
          <p className={styles.subHeading}>{text}</p>
        </div>
        <div className={styles.video}>
          <Video link={trailer} />
        </div>
        <div className={styles.whitespace} />
        <div className={styles.reference} />
      </header>
      <section className={styles.gameplaySection}>
        <div className={styles.container}>
          <div className={styles.videoGame} style={{ scale: "0.7" }}>
            <Video link={gameplay} />
          </div>
        </div>

        <div className={styles.refToGame}></div>
      </section>

      <section className={styles.community}>
        {/* <div className={styles.leftImgBlock}>
          <img src={communityBg} />
          <div />
        </div>
        <div className={styles.communityTextBlock}>
          <div className={styles.communityContent}>
            <div className={styles.rightImgBlock}>
              <img src={communityBgRight} />
            </div>
            
          </div>
        </div> */}
        <div>
          <div className={styles.communityOverlay} />
          <img src={communityBg}></img>
        </div>
        <div>
          <div
            className={`${styles.communityOverlay} ${styles.communityContent}`}
          >
            <div>
              <h1 className={styles.communityMain}>Join Our Community</h1>
              <div className={styles.communityMain}>
                Gear up and join the Skater Republic Discord Community! Connect
                with passionate skaters, share tips and tricks, and be the first
                to hear about exciting updates. Whether you're a seasoned pro or
                just starting out, there's a spot for you in our Discord family!
              </div>
              <button className={styles.communityMain}>
                Join <DiscordLogo />
              </button>
            </div>
          </div>
          <img src={communityBgRight}></img>
        </div>
      </section>
    </div>
  );
};

export default Home;
