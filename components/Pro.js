import styles from "../styles/pro.module.css";
import React from "react";
import { useState } from "react";

function Pro() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.soustitre}>Bienvenue dans nos</div>
          <div className={styles.content_logo}>
            <img
              className={styles.logo}
              src="ateliers102.png"
              alt="logo-ateliers"
            />
          </div>
          <div className={styles.soustitre2}>Entreprise adaptée</div>
          <div className={styles.content_fleche}>
            <div className={styles.texte_fleche}>C'est parti !</div>
            {/* <img
              className={styles.fleche}
              src="button-bas.png"
              alt="button-bas"
            /> */}
            <a href="#section2">
              <div className={styles.scroll_down_arrow}></div>
            </a>
          </div>
        </div>
        <div>
          <div className={styles.section2} id="section2">
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
          </div>
        </div>
        <div>
          <div className={styles.section3}>
            <div className={styles.content_section3}>
              <div className={styles.paragraphe_section3}>
                Chez Ateliers 102, nous vous accompagnons
              </div>
              <div className={styles.centre_texte3}>
                <img
                  alt="gif brouillon"
                  src="du brouiilon blanc 3.png"
                  width="950px"
                  height="auto"
                />
                {/* <div className={styles.personnalise3}>
                  du brouillon
                  <p className={styles.personnalise3_2}> au</p>
                  <p className={styles.gras_texte3_3}>produit fini</p>
                </div> */}
              </div>
              <div className={styles.centre_texte3_2}>
                <img alt="gif brouillon" src="brouillon tel 600.png" />
                {/* <div className={styles.personnalise3}>
                  du brouillon
                  <p className={styles.personnalise3_2}> au</p>
                  <p className={styles.gras_texte3_3}>produit fini</p>
                </div> */}
              </div>
              <div>
                <a href="/Creation" className={styles.card3}>
                  <button className={styles.button1}>
                    Découvrez l'atelier de création
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.section4}>
            <div className={styles.content_section4}>
              À travers un processus de gestion de projet et de création
              <p className={styles.mesure}>sur-mesure</p>
              <div className={styles.etape}>
                <p className={styles.regle}>
                  <img
                    className={styles.image_regle}
                    src="regle.png"
                    alt="regle"
                  />
                </p>
                <div className={styles.grid}>
                  <a className={styles.mesure2}>Prise de brief et conseils</a>
                  <a className={styles.mesure3}>Conception creation</a>
                  <a className={styles.mesure4}>Production pose</a>
                  <a className={styles.mesure5}>
                    livraison suivi service apres-vente
                  </a>
                </div>
              </div>
              <div>
                <a href="/Production" className={styles.card}>
                  <button className={styles.button2}>
                    Découvrez notre atelier de production
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.section5}>
            <div className={styles.content_section5}>
              <div className={styles.paragraphe_section5}>
                Pour vous permettre de faire vivre l'Histoire de votre marque,
                nous confectionnons pour vous des supports
              </div>
              <div className={styles.centre_texte}>
                <div className={styles.personnalise}>
                  personnalisés
                  <p className={styles.personnalise2}>et</p>
                  <p className={styles.gras_texte5}>impactants</p>
                </div>
              </div>
              <div>
                <a href="/Personnalisation" className={styles.card5}>
                  <button className={styles.button3}>
                    Découvrez l'atelier de personnalisation
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.section6}>
            <div className={styles.content_section6}>
              <div className={styles.paragraphe_section6}>
                Notre objectif va au-delà de votre communication, à travers
                notre entreprise adaptée, nous tenons à valoriser l'insertion de
                nos collaborateurs en situation de l'handicap,{" "}
                <p className={styles.gras_texte6}>
                  en levant des tabous, et en brisant les stéréotypes,
                </p>{" "}
                Associant le tout pour (re)donner du sens à vos projets
              </div>
              <div>
                <a href="/Entreprise" className={styles.card}>
                  <button className={styles.button1_2}>
                    Découvrez notre entreprise adaptée
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.section7}>
            <div className={styles.content_section7}>
              En optant pour une expérience à taille humaine alliant passion et
              professionnalisme
              <a href="/Equipe" className={styles.card}>
                <button className={styles.button2_jaune}>
                  Découvrez notre équipe
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.section8}>
            <div className={styles.text_section8}>
              Ils font deja partis de l'aventure
            </div>
            <div className={styles.grid2}>
              <img
                className={styles.logo_img_kemone}
                src="Kemone.png"
                alt="Kemone"
              />
              <img
                className={styles.logo_img}
                src="Eiffage.png"
                alt="Eiffage"
              />
              <img className={styles.logo_img_edf} src="Edf.png" alt="Edf" />
              <img
                className={styles.logo_img}
                src="Ascometal.png"
                alt="Ascometal"
              />
              <img className={styles.logo_img} src="cogex.png" alt="cogex" />
              <img
                className={styles.logo_img}
                src="fos-provence-basketball.png"
                alt="fos-provence-basketball"
              />
              <img
                className={styles.logo_img}
                src="Fos-sur-mer.png"
                alt="Fos-sur-mer"
              />
              <img className={styles.logo_img} src="GCA.png" alt="GCA" />
              <img className={styles.logo_img} src="geodis.png" alt="geodis" />
              <img
                className={styles.logo_img}
                src="Lorenove.png"
                alt="Lorenove"
              />
              <img
                className={styles.logo_img}
                src="Martial.png"
                alt="Martial"
              />
              <img className={styles.logo_img} src="Mase.png" alt="Mase" />
              <img className={styles.logo_img} src="CER.png" alt="CER" />
              <img className={styles.logo_img} src="ATEC.png" alt="Atec" />
              <img
                className={styles.logo_img}
                src="Atalian.png"
                alt="Atalian"
              />
              <img
                className={styles.logo_img}
                src="La-plage.png"
                alt="La-plage"
              />
              <img className={styles.logo_img} src="McDo.png" alt="McDonal" />
              <img
                className={styles.logo_img}
                src="Mission-Locale.png"
                alt="Mission-Local"
              />
              <img className={styles.logo_img} src="Ortec.png" alt="Ortec" />
              <img className={styles.logo_img} src="SNEF.png" alt="SNEF" />
              <img
                className={styles.logo_img}
                src="Port-navy-service.png"
                alt="Port-navy-service"
              />
              <img
                className={styles.logo_img}
                src="Port-Saint-Louis.png"
                alt="Port-Saint-Louis"
              />
              <img
                className={styles.logo_img}
                src="Pharmacie.png"
                alt="Pharmacie"
              />
              <img className={styles.logo_img} src="SNSM.png" alt="SNSM" />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.section9}>
            <div className={styles.content_section9}>
              <div className={styles.gras_texte9}>
                Envie de nous confier votre projet?
              </div>
              <a href="/Contact" className={styles.card}>
                <button className={styles.button3_rouge}>
                  Remplir le formulaire de contact
                </button>
              </a>
              <div className={styles.gras_texte9_bis}>
                Suivez notre actualité
              </div>
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

export default Pro;
