import styles from "../styles/Personnalisation.module.css";

function Personnalisation() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2>Gourde </h2>
          <p>
            A lightweight formula that packs a punch with avocado protein
            extract to strengthen skin's own moisture barrier, sealing in
            hydration to protect, nourish and soften skin.
          </p>
          <a href="#" className={styles.card}>
            <button className={styles.button}> Detail</button>
          </a>
        </div>
        <div className={styles.article1}>
          <img
            className={styles.gourde}
            src="./gourde-ateliers102.png"
            alt="Pixel Facial Cream"
          />
        </div>
      </div>
      <div className={styles.wrapper2}>
        <div className={styles.article2}>
          <img
            className={styles.usb}
            src="./usb.png"
            alt="Pixel Facial Cream"
          />
        </div>
        <div className={styles.text}>
          <h2>Usb </h2>
          <p>
            A lightweight formula that packs a punch with avocado protein
            extract to strengthen skin's own moisture barrier, sealing in
            hydration to protect, nourish and soften skin.
          </p>
          <a href="#" className={styles.card}>
            <button className={styles.button}> Detail</button>
          </a>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2>Plan de travail </h2>
          <p>
            A lightweight formula that packs a punch with avocado protein
            extract to strengthen skin's own moisture barrier, sealing in
            hydration to protect, nourish and soften skin.
          </p>
          <a href="#" className={styles.card}>
            <button className={styles.button}> Detail</button>
          </a>
        </div>
        <div className={styles.article1}>
          <img
            className={styles.plandetravail}
            src="./plan de travail.png"
            alt="Plan de travail"
          />
        </div>
      </div>
    </div>
  );
}

export default Personnalisation;
