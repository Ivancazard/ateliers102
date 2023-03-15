import styles from "../styles/MenuPro.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

function MenuPro() {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <img
        className={styles.logomenu}
        src="logo-rouge.png"
        alt="logo-rouge"
        onClick={() => router.push("/")}
      />
      <input
        className={styles.menuicon}
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <div className={styles.content_info}>
            <div className={styles.content_row}>
              <div className={styles.content_icon}>
                <a href="/contact">
                  <span className={styles.image_icon_map}>
                    <img
                      className={styles.icon}
                      src="map-blanc.png"
                      alt="icon-map"
                    />
                  </span>
                </a>
              </div>
              <div className={styles.content_texte}>
                <div className={styles.texte}>
                  Centre d'Affaires "Les Vallins", route d'Arles, 13270
                  Fos-sur-Mer
                </div>
              </div>
            </div>
            <div className={styles.content_row}>
              <div className={styles.content_icon}>
                <a href="/contact">
                  <span className={styles.image_icon_tel}>
                    <img
                      className={styles.icon}
                      src="téléphone.png"
                      alt="icon-tel"
                    />
                  </span>
                </a>
              </div>
              <div className={styles.content_texte}>
                <div className={styles.texte}>04 90 56 30 31</div>
              </div>
            </div>

            <div className={styles.content_row}>
              <div className={styles.content_icon}>
                <a href="/contact">
                  <span className={styles.image_icon_mail}>
                    <img
                      className={styles.icon}
                      src="mail-blanc.png"
                      alt="icon-map"
                    />
                  </span>
                </a>
              </div>
              <div className={styles.content_texte}>
                <div className={styles.texte}>commandes@ateliers102.com</div>
              </div>
            </div>
          </div>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Studio</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MenuPro;
