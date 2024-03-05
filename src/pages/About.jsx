import { Stack, Typography } from "@mui/material";
import styles from "./About.module.css";
import img from "../assets/man_with_skateboard.png";

const About = () => {
  return (
    <div className={styles.mainBlock}>
      <Stack className={styles.tagLine}>About Skate</Stack>
      <Stack className={styles.imgBlock}>
        <div />
        <img src={img} />
      </Stack>
      <Stack className={styles.textBlock}>
        <div className={styles.content}>
          Introducing <span>Skater Republic</span>, the thrilling upcoming
          arcade game that puts you right in the heart of a dynamic
          skateboarding adventure! Explore expansive skateparks, bustling
          cityscapes, and renowned real-life locations for an immersive
          experience like no other. Featuring intuitive controls, a
          sophisticated trick system, and a compelling progression framework,
          players will find themselves immersed in a world where every
          achievement feels truly gratifying. Keep an eye out as we work
          diligently to bring this extraordinary gaming experience to life!
        </div>
      </Stack>
    </div>
  );
};

export default About;
