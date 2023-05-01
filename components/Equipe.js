import styles from "../styles/Equipe.module.css";
import React from "react";
import { useState } from "react";
function Equipe() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.header_dessin}>
            <div className={styles.double_ecriture}>
              <div className={styles.soustitre}>Notre équipe</div>
              <div className={styles.soustitre2}>Notre équipe</div>
            </div>
            <img
              className={styles.image_header1}
              src="header2-1.png"
              alt="dessin"
            />
            <img
              className={styles.image_header2}
              src="header2-2.png"
              alt="dessin"
            />
          </div>
          <div className={styles.soustitre3}>
            <p className={styles.texte_normal}>
              La différence
              <a className={styles.texte_gras}> est une force,</a>
            </p>
            <p className={styles.texte_normal}>
              et chez nous, c'est
              <a className={styles.texte_gras}>
                {" "}
                là où la passion rime avec diversité,
              </a>
            </p>
          </div>
          <div className={styles.content_fleche}>
            <div className={styles.texte_fleche}>
              Découvrez tout ce qu'il faut savoir sur notre atelier protégé
            </div>
            <img
              className={styles.fleche}
              src="button-bas.png"
              alt="button-bas"
            />
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.section2_slogan}>
            <div className={styles.slogan}>
              Ensemble encrons votre communication
            </div>
            <div className={styles.slogan2}>
              Ensemble encrons votre communication
            </div>
            <div className={styles.slogan3}>
              Ensemble encrons votre communication
            </div>
            <div className={styles.slogan4}>
              Ensemble encrons votre communication
            </div>
          </div>
          <div className={styles.titre2}>Notre equipe</div>
          <p className={styles.soustitre_section2}>
            « Le design est dans les details. »
          </p>

          <div className={styles.container_equipe}>
            <div className={styles.row_equipe}>
              <div className={styles.col_equipe}>
                <div className={styles.profile_card}>
                  <img
                    src="image_employeur.png"
                    className={styles.img_equipe}
                  />
                  <div className={styles.profile_equipe}>
                    <div className={styles.name_equipe}>
                      Ivan<p>Cazard</p>
                    </div>
                    <div className={styles.text_equipe}>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.col_equipe}>
                <div className={styles.profile_card}>
                  <img
                    src="image_employeur.png"
                    className={styles.img_equipe}
                  />
                  <div className={styles.profile_equipe}>
                    <div className={styles.name_equipe}>
                      Ivan<p>Cazard</p>
                    </div>
                    <div className={styles.text_equipe}>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.col_equipe}>
                <div className={styles.profile_card}>
                  <img
                    src="image_employeur.png"
                    className={styles.img_equipe}
                  />
                  <div className={styles.profile_equipe}>
                    <div className={styles.name_equipe}>
                      Ivan<p>Cazard</p>
                    </div>
                    <div className={styles.text_equipe}>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default Equipe;
