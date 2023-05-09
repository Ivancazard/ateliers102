import styles from "../styles/MenuParticulier.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneFilled,
  PhoneOutlined,
} from "@ant-design/icons";

function MenuPro() {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.content_logo}>
        <img
          className={styles.logomenu}
          src="logo-bleu.png"
          alt="logo-bleu"
          onClick={() => router.push("/")}
        />
      </div>
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
            <div className={styles.texte_info}>Retrouvez-nous:</div>
            <div className={styles.texte_info2}>Contactez-nous</div>
            <div className={styles.content_row2}>
              <div className={styles.card_contact}>
                <div className={styles.icons_contact}>
                  <button className={styles.buttonPlan}>
                    <EnvironmentOutlined
                      style={{ fontSize: "40px", color: "#ff5642" }}

                      //   href = "http://u.osmfr.org/m/884254/"
                    />
                  </button>
                  <button className={styles.buttonMail}>
                    <MailOutlined
                      style={{ fontSize: "40px", color: "#ff5642" }}
                    />
                  </button>

                  <button className={styles.buttonTel}>
                    <PhoneOutlined
                      style={{ fontSize: "40px", color: "#ff5642" }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.content_row}>
              <div className={styles.content_texte}>
                <div className={styles.texte}>
                  Centre d'Affaires "Les Vallins", route d'Arles, 13270
                  Fos-sur-Mer
                </div>
              </div>
            </div>
            <div className={styles.content_row}>
              <div className={styles.content_texte}>
                <div className={styles.texte}>04 90 56 30 31</div>
              </div>
            </div>
            <div className={styles.content_row}>
              {/* <div className={styles.content_icon}>
                  <a href="/contact">
                    <span className={styles.image_icon_mail}>
                      <img
                        className={styles.icon}
                        src="mail-blanc.png"
                        alt="icon-map"
                      />
                    </span>
                  </a>
                </div> */}
              <div className={styles.content_texte}>
                <div className={styles.texte}>commandes@ateliers102.com</div>
              </div>
            </div>
          </div>
          <li className={styles.li}>
            <a href="/Creation">Notre atelier de creation</a>
          </li>
          <li>
            <a href="/Print">Notre atelier de print</a>
          </li>
          <li>
            <a href="/Production">Notre atelier de production</a>
          </li>
          <li>
            <a href="/Personnalisation">Notre atelier de personnalisation</a>
          </li>
          <li>
            <a href="/Entreprise">Notre entreprise adaptée</a>
          </li>
          <li>
            <a href="/Equipe">Notre equipe</a>
          </li>
          <li>
            <a href="/Contact">Nous contacter</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MenuPro;
