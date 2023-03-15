import styles from "../styles/FooterBleu.module.css";

function FooterBleuPage() {
  return (
    <div className={styles.main}>
      <div className={styles.wave}></div>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_column}>
          <div className={styles.footer_logo}>
            <a className={styles.footer_logo_link} href="#">
              <img
                className={styles.logo}
                src="logo-blanc.png"
                alt="logo-blanc"
              />
            </a>
          </div>
        </div>
        <div className={styles.footer_content_column}>
          <div className={styles.footer_menu}>
            <h2 className={styles.footer_menu_name}>Get start</h2>
            <ul id="menu-get-start" className={styles.menu_list}>
              <li className={styles.menu_item}>
                <a href="#"> start</a>
              </li>
              <li className={styles.menu_item}>
                <a href="#"> document</a>
              </li>
              <li className={styles.menu_item}>
                <a href="#"> installation</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_content_column}>
          <div className={styles.footer_menu}>
            <h2 className={styles.footer_menu_name}>Compagny</h2>
            <ul id="menu-get-start" className={styles.menu_list}>
              <li className={styles.menu_item}>
                <a href="#"> Contact</a>
              </li>
              <li className={styles.menu_item}>
                <a href="#"> News</a>
              </li>
              <li className={styles.menu_item}>
                <a href="#"> Legal</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_content_column}>
          <div className={styles.footer_menu}>
            <h2 className={styles.footer_menu_name}>Quick links</h2>
            <ul id="menu-get-start" className={styles.menu_list}>
              <li className={styles.menu_item}>
                <a href="#"> sécurity</a>
              </li>
              <li className={styles.menu_item}>
                <a href="#"> blog</a>
              </li>
              <li className={styles.menu_item}>
                <a href="#"> customme</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_content_column}>
          <div className={styles.footer_menu}>
            <h2 className={styles.footer_menu_name}>Let's chat</h2>
            <p className={styles.footer_texte}> Have a support question?</p>
            <a className={styles.footer_button}> Get in touch </a>
          </div>
        </div>
        <div className={styles.footer_content_column}>
          <div className={styles.footer_menu}>
            <h2 className={styles.footer_menu_name}>Nous contactez</h2>
            <p className={styles.footer_tel}> 04 90 56 30 31</p>
          </div>
        </div>
      </div>
      <div className={styles.footer_content}>
        <p className={styles.footer_texte2}> by Ateliers 102 ® . 2023</p>
      </div>
    </div>
  );
}

export default FooterBleuPage;
