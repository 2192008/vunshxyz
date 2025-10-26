import Background from "@/components/Background";
import styles from "../styles/404.module.css";
import NavBar from "@/components/NavBar";

export default function Custom404() {

  return (
    <div className={styles.page}>
      <Background />
      <NavBar />
      <div className={styles.content}>
        <h1>404</h1>
        <hr />
        <p>Page not found</p>
      </div>
    </div>
  );
}
