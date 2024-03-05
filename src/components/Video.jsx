import styles from "./Video.module.css";
const Video = ({ link }) => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.overlay} />
      <video src={link} autoPlay loop muted />
    </div>
  );
};

export default Video;
