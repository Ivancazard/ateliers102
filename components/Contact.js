import styles from "../styles/Contact.module.css";
import { useState } from "react";
import React from "react";
function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.header_dessin}>
            <img
              className={styles.image_header1}
              src="header2-1.png"
              alt="dessin"
            />
            <div className={styles.double_ecriture}>
              <div className={styles.soustitre}>Contact</div>
              <div className={styles.soustitre2}>Contact</div>
            </div>
            <img
              className={styles.image_header2}
              src="header2-2.png"
              alt="dessin"
            />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.login_box}>
            <h2>Nous contacter</h2>
            <form>
              <div className={styles.user_box}>
                <input type="société" name="" required="" />
                <label>Société</label>
              </div>
              <div className={styles.user_box}>
                <input type="nom et prénom" name="" required="" />
                <label>Nom et prénom</label>
              </div>
              <div className={styles.user_box}>
                <input type="téléphone" name="" required="" />
                <label>Téléphone</label>
              </div>
              <div className={styles.user_box}>
                <input type="Email" name="" required="" />
                <label>Email</label>
              </div>
              <div className={styles.user_box}>
                <textarea
                  className={styles.textarea}
                  cols="40"
                  rows="3"
                  name="comments"
                  placeholder="Ecrire votre message"
                ></textarea>
              </div>
            </form>
            <a className={styles.content_button}>
              <button className={styles.button1}> Envoyer</button>
            </a>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.container_map}>
            {/* <div id="loader" className={styles.loader}>
            <div id="shadow" className={styles.shadow}></div>
            <div id="box" className={styles.box}></div> */}
            <iframe
              width="100%"
              height="500px"
              frameborder="0"
              allowfullscreen
              src="//umap.openstreetmap.fr/fr/map/carte-ateliers-102_884254?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=null&onLoadPanel=undefined&captionBar=false"
            ></iframe>

            <div className={styles.loader} />
          </div>
        </div>
        <div className={styles.footer_content}>
          <div className={styles.footer_content_column}>
            <div className={styles.footer_menu}>
              <h2 className={styles.footer_menu_name}>Nos Ateliers</h2>
              <p className={styles.footer_texte}> Notre atelier de création</p>
              <p className={styles.footer_texte}>
                {" "}
                Notre atelier de production
              </p>
              <p className={styles.footer_texte}>
                {" "}
                Notre atelier de personnalisation
              </p>
            </div>
          </div>
          <div className={styles.footer_content_column}>
            <div className={styles.footer_menu2}>
              <h2 className={styles.footer_menu_name}>
                Notre structure et ses valeurs
              </h2>
              <p className={styles.footer_texte}> Notre entreprise adaptée</p>
              <p className={styles.footer_texte}> Notre équipe</p>
            </div>
          </div>
          <div className={styles.footer_content_column}>
            <div className={styles.footer_menu3}>
              <h2 className={styles.footer_menu_name}>Nos informations</h2>
              <p className={styles.footer_texte}>Contactez-nous</p>
              <p className={styles.footer_texte}>Suivez nous sur les réseaux</p>
              <div className={styles.content_social2}>
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
            <div className={styles.footer_menu4}>
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
            <div className={styles.footer_menu4}>
              <h2 href="" className={styles.footer_menu_name3}>
                Rgaa4
              </h2>
            </div>
          </div>
          <div className={styles.footer_content_column2}>
            <div className={styles.footer_content3}>
              <p className={styles.footer_texte2}>
                {" "}
                Une création encrée Atelier 102
              </p>
            </div>
          </div>
          <div className={styles.footer_content_column2}>
            <div className={styles.footer_content4}>
              <p className={styles.footer_texte2}> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
