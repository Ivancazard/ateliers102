import styles from "../styles/Creation.module.css";
import React from "react";
import { useState } from "react";
function Creation() {
  return (
    <div className={styles.container}>
      {/* <a href="#top" className={styles.returnButton}></a> */}
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.header_dessin}>
            <div className={styles.double_ecriture}>
              <div className={styles.soustitre}>Notre atelier de creation</div>
              <div className={styles.soustitre2}>Notre atelier de creation</div>
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
              C'est ici que
              <a className={styles.texte_gras}> la magie opère</a>
            </p>
            <p className={styles.texte_normal}>
              et qu'on
              <a className={styles.texte_gras}> donne du sens à vos projets.</a>
            </p>
          </div>
          <div className={styles.content_fleche}>
            <div className={styles.texte_fleche}></div>
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
          <div className={styles.titre2}>L'atelier creatif</div>
          <p className={styles.soustitre_section2}>
            « Le design est dans les details. »
          </p>
          <p className={styles.texte_section2}>Paul B.</p>
          <p className={styles.texte_normal_section2}>
            De la conception de{" "}
            <a className={styles.texte_gras_section2}>votre logo</a>
            type, du
            <a className={styles.texte_gras_section2}> branding, naming, </a>
            (et encore beaucoup de mots en -ing qui hérisseront les poils de
            certains puristes de la communication), au déploiement de
            <a className={styles.texte_gras_section2}>
              {" "}
              vos supports print et web.
            </a>
          </p>
          <p className={styles.texte_normal_section2}>
            Nous vous accompagnons pour{" "}
            <a className={styles.texte_gras_section2}>
              encrer votre marque dans les mémoires.
            </a>
          </p>
          <p className={styles.texte_normal_section2}>
            En tenant compte de{" "}
            <a className={styles.texte_gras_section2}>vos attentes,</a>
            de
            <a className={styles.texte_gras_section2}> votre personnalité,</a>
            de
            <a className={styles.texte_gras_section2}>
              {" "}
              votre domaine d'activité,
            </a>{" "}
            des codes actuels et à venir ...
          </p>
          <p className={styles.texte_normal_section2}>
            Chaque détail sera pris en compte afin de vous concocter une
            identité visuelle
            <a className={styles.texte_gras_section2}> aux petits oignons...</a>
          </p>
        </div>
        <div className={styles.section3}>
          <div className={styles.content3}>
            <img
              className={styles.image_section3}
              src="main-dessin.png"
              alt="dessin2"
            />
            <p className={styles.texte_normal_section3}>
              Notre équipe de graphistes
              <a className={styles.texte_gras_section3}> talentueux</a> et
              <a className={styles.texte_gras_section3}> passionnés</a> est là
              pour vous aider à créer des supports visuels
              <a className={styles.texte_gras_section3}>
                {" "}
                impactants et cohérents avec votre image de marque.
              </a>
            </p>
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
            <div className={styles.titre5}>Les process de l'atelier</div>
            <p className={styles.soustitre_section5}>
              7 étapes clés pour votre projet:
            </p>
            <div className={styles.timeline}>
              <div className={styles.tl_node}>
                <details className={styles.details}>
                  <summary className={styles.summary}>
                    étape 1: la prise de brief{" "}
                    <i className={styles.arrow_down}></i>
                  </summary>
                  <p className={styles.summary_texte}>
                    Ce premier échange se fait par téléphone ou sur place, et
                    peut se réaliser en plusieurs échanges afin de préciser
                    votre demande et les attendus et spécificités que vous
                    pouvez avoir.
                  </p>
                </details>
              </div>
              <div className={styles.tl_node}>
                <details className={styles.details}>
                  <summary className={styles.summary}>
                    étape 2: le conseil et l'accompagnement{" "}
                    <i className={styles.arrow_down}></i>
                  </summary>
                  <p className={styles.summary_texte}>
                    Nous sommes à votre disposition pour vous conseiller et vous
                    accompagner dans votre projet d'enseignes et signalétique.
                    Nous pouvons vous aider à choisir les matériaux les plus
                    adaptés, à définir le positionnement de votre signalétique,
                    à respecter les normes d'accessibilité, etc...
                  </p>
                </details>
              </div>
            </div>
            <div className={styles.timeline2}>
              <div className={styles.tl_node2}>
                <details className={styles.details2}>
                  <summary className={styles.summary2}>
                    étape 3: le devis <i className={styles.arrow_down2}></i>
                  </summary>
                  <p className={styles.summary_texte2}>
                    Forcément qui dit commande, dit proposition commerciale, une
                    fois le besoin cerné, on vous soumet notre devis. Dès
                    validation de ce dernier et réception de votre paiement ou
                    accompte (selon nos CGV) nous passons à l'étape suivante.
                  </p>
                </details>
              </div>
              <div className={styles.tl_node2}>
                <details className={styles.details2}>
                  <summary className={styles.summary2}>
                    étape 4: la réception / vérification{" "}
                    <i className={styles.arrow_down2}></i>
                  </summary>
                  <p className={styles.summary_texte2}>
                    Il s'agit de la réception de vos supports, ou éléments qu'il
                    nous faudra vérifer pour être sûrs de la bonne résolution ou
                    de la conformité d'impression. Pour connaître les éléments
                    incontournables pour vous assurer la réussité de votre
                    projet d'impression, on vous invite à télécharger{" "}
                    <code className={styles.summary_texte_gras}>
                      notre guide du client parfait.
                    </code>
                  </p>
                </details>
              </div>
            </div>
            <div className={styles.timeline3}>
              <div className={styles.tl_node3}>
                <details className={styles.details3}>
                  <summary className={styles.summary3}>
                    étape 5: la conception / création{" "}
                    <i className={styles.arrow_down3}></i>
                  </summary>
                  <p className={styles.summary_texte3}>
                    Notre équipe de graphistes passionnés entre en scène et vous
                    crée des supports visuels impactantset cohérents avec votre
                    image de marque.
                  </p>
                  <p className={styles.summary_texte3}>
                    De la conception de votre logotype, du branding, naming, (et
                    encore beaucoup de mots en -ing qui hérisseront les poils de
                    certains puristes de la communication), au déploiement de
                    vos supports print et web.{" "}
                  </p>
                  <p className={styles.summary_texte3}>
                    Nous vous accompagnons pour encrer votre marque dans les
                    mémoires !
                  </p>
                </details>
              </div>
              <div className={styles.tl_node3}>
                <details className={styles.details3}>
                  <summary className={styles.summary3}>
                    étape 6: la production{" "}
                    <i className={styles.arrow_down3}></i>
                  </summary>
                  <p className={styles.summary_texte3}>
                    Une fois la conception de vos supports et/ou la vérification
                    de vos fichiers faite, on passe à la partie production.
                    Notre MC de la prod prendra possession de l'atelier et
                    viendra faire de vos rêves (de supports) une réalité.
                    Mettant son expertise de plus de 10 ans dans le domaine, au
                    service de vos projets de communication.
                  </p>
                </details>
              </div>
            </div>
            <div className={styles.timeline4}>
              <div className={styles.tl_node4}>
                <details className={styles.details4}>
                  <summary className={styles.summary4}>
                    étape 7: la pose / livraison{" "}
                    <i className={styles.arrow_down4}></i>
                  </summary>
                  <p className={styles.summary_texte4}>
                    Nous sommes spécialisés dans la fourniture et l'installation
                    de vos supports, tels que des enseignes, des panneaux
                    d'affichage et des présentoirs, qui correspondent à vos
                    besoins spécifiques.
                  </p>
                  <p className={styles.summary_texte4}>
                    Notre équipe d'experts dévoués et professionnels qui se
                    feront un plaisir de travailler avec vous pour créer la
                    solution idéale pour votre entreprise et organiser la pose
                    qui répondra à vos attentes.
                  </p>
                  <p className={styles.summary_texte4}>
                    Nous assurons également l'envoi ou la livraison de vos
                    commandes au besoin ou nous rendons disponibles pour une
                    réception de celles-ci en boutique.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section8}>
          <div className={styles.content_section8}>
            <div className={styles.card}>
              <button href="/" className={styles.button1}>
                Télécharger la check-list du parfait communicant
              </button>
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

export default Creation;
