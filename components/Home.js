import styles from "../styles/Home.module.css";
import React from "react";
import { useState } from "react";
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
      <div className={styles.header}>
        <img
          className={styles.logomenu}
          src="logo-rouge.png"
          alt="logo-rouge"
          onClick={() => router.push("/")}
        />
        {/* <div className={styles.content_social}>
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
        </div> */}
        {/* <div className={styles.content2}>
          <input
            className={styles.input}
            type="text"
            placeholder="Recherche..."
          />
          <div className={styles.search}></div>
        </div> */}
      </div>

      <main className={styles.main}>
        <div className={styles.content_logo}>
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
        <p className={styles.soustitre}>Entreprise adaptée</p>
        <p className={styles.texte_choix}>
          Vous avez besoin de nos services pour:
        </p>
        <div className={styles.grid}>
          <a href="/pro" className={styles.card}>
            <button className={styles.button1}> votre travail</button>
          </a>
          <a href="/particulier" className={styles.card}>
            <button className={styles.button2}> votre vie perso</button>
          </a>
        </div>
      </main>
      <div className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_content_column}>
            <div className={styles.footer_menu}>
              <h2 href="" className={styles.footer_menu_name}>
                Mentions légales
              </h2>
              <div className={styles.séparateur}></div>
              <h2 href="" className={styles.footer_menu_name}>
                CGU
              </h2>
              <div className={styles.séparateur}></div>
              <h2 href="" className={styles.footer_menu_name}>
                CGV
              </h2>
            </div>
          </div>
          <div className={styles.footer_content_column1}>
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
                    src="Linkedin.png"
                    alt="Linkedin-blanc"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
