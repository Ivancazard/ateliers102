import styles from "../styles/pro.module.css";

function Pro() {
  return (
    <div className={styles.container}>
      <a href="#top" className={styles.returnButton}>
        Retour en haut
      </a>
      <div className={styles.background}>Professionnel</div>
      <h1>Professionnel</h1>
    </div>
  );
}

export default Pro;
