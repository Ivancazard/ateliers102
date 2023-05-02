import styles from "../styles/Personnalisation.module.css";
import React from "react";
import { useState } from "react";

function Personnalisation() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.header_dessin}>
            <div className={styles.double_ecriture}>
              <div className={styles.soustitre}>
                Notre atelier de personnalisation
              </div>
              <div className={styles.soustitre2}>
                Notre atelier de personnalisation
              </div>
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
              Là où on
              <a className={styles.texte_gras}> imprime votre image, </a>
            </p>
            <p className={styles.texte_normal}>dans les mémoires</p>
          </div>
          <div className={styles.content_fleche}>
            <div className={styles.texte_fleche}>
              Prêt à découvrir nos solutions de personnalisation?
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
          <div className={styles.titre2}>L'atelier textiles</div>
          <p className={styles.soustitre_section2}>
            Nos propositions de supports :
          </p>
          <p className={styles.texte_normal_section2}>
            Passionnés par la personnalisation textiles nous proposons des
            techniques d'impression et marquage de grande qualité et qui
            répondront à vos besoins. Pour vous aider voici un petit descriptif
            des différentes techniques qui vous sont offertes.
          </p>
          <div className={styles.section_image2}>
            <div className={styles.image_parralex}> </div>

            <div className={styles.content_texte2}>
              <div className={styles.content_image2}>
                <img
                  className={styles.image2}
                  src="craie croix.png"
                  alt="craie-croix"
                />
                <p className={styles.texte_image2}> Le Flocage / Flex</p>
              </div>
              <div className={styles.content_image2}>
                <img
                  className={styles.image2}
                  src="craie croix.png"
                  alt="craie-croix"
                />
                <p className={styles.texte_image2}> L'impression DTF</p>
              </div>
              <div className={styles.content_image2}>
                <img
                  className={styles.image2}
                  src="craie croix.png"
                  alt="craie-croix"
                />
                <p className={styles.texte_image2}> L'impression DTG</p>
              </div>
              <div className={styles.content_image2}>
                <img
                  className={styles.image2}
                  src="craie croix.png"
                  alt="craie-croix"
                />
                <p className={styles.texte_image2}> La sérigraphie</p>
              </div>
              <div className={styles.content_image2}>
                <img
                  className={styles.image2}
                  src="craie croix.png"
                  alt="craie-croix"
                />
                <p className={styles.texte_image2}> La broderie</p>
              </div>
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
        <div className={styles.section5}>
          <div className={styles.content_section5}>
            <div className={styles.titre5}>L'atelier goodies</div>
            <p className={styles.soustitre_section5}>
              Nos coups de coeurs et conseils
            </p>
            <p className={styles.soustitre_section5}>
              3 bonnes raisons d'utiliser les goodies
            </p>
            <p className={styles.texte_normal_section2}>
              Laisser un joli souvenir à vos clients ou collaborateurs en
              soignant votre Customer Care et rendant unique vos expérience
              intra-entreprise
            </p>
            <p className={styles.texte_normal_section2}>
              Encrer votre stratégie sur le long terme
            </p>
            <p className={styles.texte_normal_section2}>
              Réduire l'utilisation de supports de
              <a className={styles.texte_gras_section2}>
                {" "}
                communication « provisoire »
              </a>{" "}
              en optant pour
              <a className={styles.texte_gras_section2}>
                {" "}
                une régie plus durable
              </a>{" "}
              *
            </p>
            <p className={styles.texte_normal_section2_petit}>
              <a className={styles.texte_gras_section2_petit}>
                * Spoiler alert,
              </a>{" "}
              ne pas mélanger durable et écologie. Bien que nous souhaitons à
              terme proposer des solutions qui allieraient parfaitement les
              deux, il ne faut pas occulter la durabilité. Nous ne sommes pas
              sur un discours de greenwashing et dans nos ateliers ce n'est pas
              ce qu'on souhaite prôner. Il faut bien sûr favoriser la
              proposition de supports où la traçabilité sera la plus éthique et
              nous veillons à chercher des fournisseurs qui partagent le plus
              ses valeurs.
            </p>
          </div>
        </div>
        <div className={styles.section5}>
          <div className={styles.content_section5}>
            <p className={styles.soustitre_section5}>
              Les techniques de marquages
            </p>
          </div>
        </div>
        <div className={styles.section5}>
          <div className={styles.content_section5}>
            <p className={styles.soustitre_section5}>
              Nos coups de coeurs 2023
            </p>
          </div>
        </div>
        <div className={styles.section9}>
          <div className={styles.content_section9}>
            <div className={styles.gras_texte9}>
              <p>
                « Quand plaisir d'offrir et plaisir de recevoir ne font plus
                qu'un ! »
              </p>
            </div>
            <div className={styles.texte9_ateliers}>
              <p> Ateliers 102</p>
            </div>
          </div>
        </div>

        <div className={styles.section8}>
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
          <div className={styles.section10}>
            <div className={styles.content_section10}>
              <div className={styles.gras_texte10}>Suivez notre actualité</div>
              <div className={styles.content_social}>
                <div>
                  <a
                    href="https://www.facebook.com/ateliers102"
                    className={styles.Facebook}
                  >
                    <img
                      className={styles.logoFacebook}
                      src="Facebook-rouge.png"
                      alt="Facebook"
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
                      src="Instagram-rouge.png"
                      alt="Instagram"
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
                      src="Pinterest-rouge.png"
                      alt="Pinterest"
                    />
                  </a>
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

export default Personnalisation;
