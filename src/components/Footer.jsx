import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  TwitchLogo,
  RedditLogo,
  DiscordLogo,
} from "phosphor-react";

import styles from "./Footer.module.css";
import ratingSvg from "../assets/esrb-rating-pending.svg";
import Logo from "../assets/Logo.png";

const Footer = () => {
  let date = new Date();
  return (
    <footer>
      <div className={styles.top}>
        <div className={styles.leftTop}>
          <span>FAQ</span>
          <span>Latest News</span>
          <span>Help Center</span>
          <span>Forums</span>
        </div>
        <div className={styles.rightTop}>
          <img src={ratingSvg} alt={"ratingPending"} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.leftBottom}>
          <img src={Logo} style={{ width: "80px", height: "60px" }} />
        </div>
        <div className={styles.middleBottom}>
          <span>©{date.getFullYear()} Skater Republic Inc.</span>
        </div>
        <div className={styles.socials}>
          <span>
            <FacebookLogo />
          </span>
          <span>
            <TwitterLogo />
          </span>
          <span>
            <InstagramLogo />
          </span>
          <span>
            <TwitchLogo />
          </span>
          <span>
            <DiscordLogo />
          </span>
          <span>
            <RedditLogo />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
