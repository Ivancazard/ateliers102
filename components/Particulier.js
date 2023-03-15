import styles from "../styles/particulier.module.css";

function Particulier() {
  return (
    <div className={styles.container}>
      <a href="#top" className={styles.returnButton}>
        Retour en haut
      </a>
      <div className={styles.background}>Particulier</div>
      <h1>Particulier</h1>
    </div>
  );
}

export default Particulier;
