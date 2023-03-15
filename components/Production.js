import styles from "../styles/Production.module.css";

function Production() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <img src="Atelier Digital.png" />
        </div>
        <div className={styles.card_title}>
          <h3>Digital</h3>
        </div>
      </div>
      <div className={styles.card2}>
        <div className={styles.card_image}>
          <img src="Atelier de Création.png" />
        </div>
        <div className={styles.card_title}>
          <h3>Imprimerie</h3>
        </div>
      </div>
      <div className={styles.card3}>
        <div className={styles.card_image}>
          <img src="Covering.png" />
        </div>
        <div className={styles.card_title}>
          <h3>Covering</h3>
        </div>
      </div>
      <div className={styles.card4}>
        <div className={styles.card_image}>
          <img src="Entreprise Adaptée.png" />
        </div>
        <div className={styles.card_title}>
          <h3>Ateliers</h3>
        </div>
      </div>
    </div>
  );
}

export default Production;
