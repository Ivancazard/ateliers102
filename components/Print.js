import styles from "../styles/Print.module.css";
import React from "react";
import { useState } from "react";
function Print() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.header_dessin}>
            <div className={styles.double_ecriture}>
              <div className={styles.soustitre}>Notre atelier print</div>
              <div className={styles.soustitre2}>Notre atelier print</div>
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
              C'est ici que la magie
              <a className={styles.texte_gras}> la magie opère</a>
            </p>
            <p className={styles.texte_normal}>
              et qu'on
              <a className={styles.texte_gras}> donne du sens à vos projets.</a>
            </p>
          </div>
          <div className={styles.content_fleche}>
            <div className={styles.texte_fleche}>
              Prêt à découvrir cet ateliers ?
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
          <div className={styles.titre2}>L'atelier papeterie</div>
          <p className={styles.soustitre_section2}>
            Nos propositions de supports :
          </p>
          <p className={styles.texte_normal_section2}>
            <a className={styles.texte_gras_section2}>
              Véritables atouts pour votre stratégie de communication,
            </a>
            ( bien que les stéréotypes cherchent à sous-entendre le contraire).
          </p>
          <p className={styles.texte_normal_section2}>
            Ces supports peuvent être{" "}
            <a className={styles.texte_gras_section2}>
              pensés intelligemment,{" "}
            </a>
            voire
            <a className={styles.texte_gras_section2}>éco-conçus, </a>dans une
            volonté de rendre votre expérience client unique, de marquer les
            esprits en imaginant un support durable !
          </p>
          <div className={styles.content3}>
            <img
              className={styles.image_section3}
              src="mockup.png"
              alt="dessin2"
            />
          </div>
        </div>

        <div className={styles.section4}>
          <div className={styles.content_section4}>
            <p className={styles.titre4}>zoom</p>
            <p className={styles.soustitre_section4}>sur nos projets clients</p>
            <div className={styles.card_section4}>
              <p className={styles.image_section4}>
                <img className={styles.image} src="BusAero.png" alt="busaero" />
                <img className={styles.image} src="LaPlage.png" alt="" />
                <img className={styles.image} src="PanneauBus.png" alt="" />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section5}>
          <div className={styles.content_section5}>
            <div className={styles.titre5}>L'atelier evenementiel</div>
            <p className={styles.soustitre_section5}>
              Soyez remarquables en toutes occasions :
            </p>
            <p className={styles.texte_normal_section2}>
              Afin de{" "}
              <a className={styles.texte_gras_section2}>
                vous rendre incontournables,{" "}
              </a>
              le tout en façonnant, et imaginant et concevant des produits, qui
              correspondent à{" "}
              <a className={styles.texte_gras_section2}>
                votre image de marque.{" "}
              </a>
            </p>
            <p className={styles.texte_normal_section2}>
              Nous vous accompagnons pour{" "}
              <a className={styles.texte_gras_section2}>
                l'élaboration de supports souples ou rigide,{" "}
              </a>
              telles que des affiches, de la signalétique, des étiquettes, des
              bâches évènementielles, des stands, de la PLV, des fonds de
              stands, des kakémonos ( ou enrouleurs ou roll-up ), des drapeaux (
              ou beachflag ), des comptoirs, des totems dynamiques, des stands
              pliables, des supports grands formats, des murs d'images, des
              banques d'accueil, des pop-up ...
            </p>
            <p className={styles.soustitre_section5_bis}>
              Quelques exemples de supports
            </p>
            <div className={styles.card_section5}>
              <div className={styles.card5_1}>
                <div className={styles.card_image}>
                  <img src="bloc-note.png" />
                </div>
                <div className={styles.card_title}>
                  <h3>affiches</h3>
                </div>
              </div>
              <div className={styles.card5_1}>
                <div className={styles.card_image}>
                  <img src="présentation1.png" />
                </div>
                <div className={styles.card_title}>
                  <h3>totems</h3>
                </div>
              </div>
              <div className={styles.card5_1}>
                <div className={styles.card_image2}>
                  <img src="affichage1.png" />
                </div>
                <div className={styles.card_title2}>
                  <h3>Panneaux</h3>
                </div>
              </div>
            </div>
            <div className={styles.card_section5}>
              <div className={styles.card5_2}>
                <div className={styles.card_title}>
                  <h3>Back- drop</h3>
                </div>
                <div className={styles.card_image}>
                  <img src="affichage2.png" />
                </div>
              </div>
              <div className={styles.card5_2}>
                <div className={styles.card_title}>
                  <h3>roll- up</h3>
                </div>
                <div className={styles.card_image}>
                  <img src="affichage3.png" />
                </div>
              </div>
              <div className={styles.card5_2}>
                <div className={styles.card_title}>
                  <h3>bâches</h3>
                </div>
                <div className={styles.card_image}>
                  <img src="affichage4.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section9}>
          <div className={styles.content_section9_bis}>
            <div className={styles.gras_texte9_bis}>
              <p>« Encrez vous dans les mémoires »</p>
            </div>
            <div className={styles.texte9_ateliers}>
              <p> Ateliers 102</p>
            </div>
          </div>
        </div>

        <div className={styles.section4}>
          <div className={styles.content_section4}>
            <p className={styles.titre4}>zoom</p>
            <p className={styles.soustitre_section4}>sur nos projets clients</p>
            <div className={styles.card_section4}>
              <p className={styles.image_section4}>
                <img className={styles.image} src="BusAero.png" alt="busaero" />
                <img className={styles.image} src="LaPlage.png" alt="" />
                <img className={styles.image} src="PanneauBus.png" alt="" />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section9}>
          <div className={styles.content_section9}>
            <div className={styles.gras_texte9}>
              Envie de nous confier votre projet?
            </div>
            <div className={styles.card}>
              <button href="/" className={styles.button2}>
                Remplir le formulaire de contact
              </button>
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

export default Print;
