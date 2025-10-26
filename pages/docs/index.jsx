import Background from "@/components/Background";
import styles from "../../styles/construction.module.css";
import NavBar from "@/components/NavBar";

export default function () {

  return (
    <div className={styles.page}>
      <Background />
      <NavBar />
      <div className={styles.content}>
        <p>This page is under custruction</p>
      </div>
    </div>
  );
}
