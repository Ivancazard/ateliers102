import styles from "../styles/Home.module.css";

import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHands, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// jamais utiliser npm sur ce projet

function Home() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.header}>
          <div className={styles.social}>
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
                  src="Linkedin.png"
                  alt="Linkedin-blanc"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <input
            className={styles.input}
            type="text"
            placeholder="Recherche..."
          />
          <div className={styles.search}></div>
        </div>
      </header>

      <main className={styles.main}>
        <p className={styles.soustitre}>Bienvenue sur l'agence adaptée</p>

        <div className={styles.content}>
          <img
            className={styles.logo}
            src="logo_contour.png"
            alt="logo-ateliers"
          />
          <img
            className={styles.logo}
            src="ateliers102.png"
            alt="logo-ateliers"
          />
        </div>
        <div className={styles.grid}>
          <a href="/pro" className={styles.card}>
            <button className={styles.button1}>
              {" "}
              Vous etes un profesionnel?
            </button>
          </a>
          <a href="/particulier" className={styles.card}>
            <button className={styles.button2}>
              {" "}
              Vous etes un particulier?
            </button>
          </a>
        </div>
        <div className={styles.card_contact}>
          <div className={styles.contact}>
            <h3>Nous contacter </h3>
          </div>
          <div className={styles.icons_contact}>
            <button className={styles.buttonMail}>
              <MailOutlined style={{ fontSize: "50px", color: "#f5483c" }} />
            </button>
            <button className={styles.buttonHands}>
              <FontAwesomeIcon
                icon={faHands}
                style={{ fontSize: "50px", color: "#f5483c" }}
              />
            </button>
            <button className={styles.buttonTel}>
              <PhoneOutlined style={{ fontSize: "50px", color: "#f5483c" }} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
