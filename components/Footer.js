import styles from "../styles/Footer.module.css";

function FooterPage() {
  return (
    <div className={styles.main}>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_column}>
          <div className={styles.footer_menu}>
            <h2 className={styles.footer_menu_name}>Nos Ateliers</h2>
            <p className={styles.footer_texte}> Notre atelier de création</p>
            <p className={styles.footer_texte}> Notre atelier de production</p>
            <p className={styles.footer_texte}>
              {" "}
              Notre atelier de personnalisation
            </p>
          </div>
        </div>
        <div className={styles.footer_content_column}>
          <div className={styles.footer_menu}>
            <h2 className={styles.footer_menu_name}>
              Notre structure et ses valeurs
            </h2>
            <p className={styles.footer_texte}> Notre entreprise adaptée</p>
            <p className={styles.footer_texte}> Notre équipe</p>
          </div>
        </div>
        <div className={styles.footer_content_column}>
          <div className={styles.footer_menu}>
            <h2 className={styles.footer_menu_name}>Nos informations</h2>
            <p className={styles.footer_texte}>Contactez-nous</p>
            <p className={styles.footer_texte}>Suivez nous sur les réseaux</p>
            <div className={styles.content_social}>
              <div>
                <a
                  href="https://www.facebook.com/ateliers102"
                  className={styles.Facebook}
                >
                  <img
                    className={styles.logoFacebook}
                    src="Facebook-blanc.png"
                    alt="Facebook-blanc"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/ateliers102/"
                  className={styles.Instagram}
                >
                  <img
                    className={styles.logoInstagram}
                    src="Instagram-blanc.png"
                    alt="Instagram-blanc"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/ateliers-102/"
                  className={styles.Linkedin}
                >
                  <img
                    className={styles.logoLinkedin}
                    src="Pinterest-blanc.png"
                    alt="Pinterest-blanc"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_content2}>
        <div className={styles.footer_content_column2}>
          <div className={styles.footer_menu2}>
            <h2 href="" className={styles.footer_menu_name2}>
              Mentions légales
            </h2>
            <div className={styles.séparateur}></div>
            <h2 href="" className={styles.footer_menu_name2}>
              CGU
            </h2>
            <div className={styles.séparateur}></div>
            <h2 href="" className={styles.footer_menu_name2}>
              CGV
            </h2>
          </div>
          <div className={styles.footer_menu2}>
            <h2 href="" className={styles.footer_menu_name3}>
              Rgaa4
            </h2>
          </div>
        </div>
        <div className={styles.footer_content_column2}>
          <div className={styles.footer_content}>
            <p className={styles.footer_texte2}>
              {" "}
              Une création encrée Atelier 102
            </p>
          </div>
        </div>
        <div className={styles.footer_content_column2}>
          <div className={styles.footer_content}>
            <p className={styles.footer_texte2}> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
