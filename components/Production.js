import styles from "../styles/Production.module.css";
import React from "react";
import { useState } from "react";

function Production() {
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
              <div className={styles.soustitre}>
                Notre atelier de production
              </div>
              <div className={styles.soustitre2}>
                Notre atelier de production
              </div>
            </div>
            <img
              className={styles.image_header2}
              src="header2-2.png"
              alt="dessin"
            />
          </div>
          <div className={styles.soustitre3}>
            <p className={styles.texte_normal}>
              Des impressions
              <a className={styles.texte_gras}> qui font la différence, </a>
            </p>
            <p className={styles.texte_normal}>
              petits ou grands formats
              <a className={styles.texte_gras}>
                {" "}
                on n'a pas fini de vous surprendre!
              </a>
            </p>
          </div>
          <div className={styles.content_fleche}>
            <div className={styles.texte_fleche}>ça se passe par-là</div>
            <a href="#section2">
              <div className={styles.scroll_down_arrow}></div>
            </a>
          </div>
        </div>
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
          <div className={styles.titre2}>L'atelier grands formats</div>
          <p className={styles.soustitre_section2}>
            Nos propositions de supports :
          </p>
          <p className={styles.texte_normal_section2}>
            <a className={styles.texte_gras_section2}>
              Conception de signalétique intérieure et extérieure :
            </a>
          </p>
          <p className={styles.texte_normal_section2}>
            Nous concevons et installons des systèmes de signalétique adaptés à
            tous les types de bâtiments, tels que des panneaux de direction, des
            plaques de signalisation, des banderoles, etc ...
          </p>
          <p className={styles.texte_normal_section2}>
            Conception d'enseignes lumineuses: nous pouvons également concevoir
            et installer des enseignes lumineuses pour améliorer la visibilité
            de votre entreprise de jour comme de nuit. Nous pouvons créer des
            enseignes LED, des enseignes néon, des enseignes rétro-éclairées,
            etc ...
          </p>
          <p className={styles.texte_normal_section2}>
            Marquage de véhicules : notre équipe est également experte dans la
            personnalisation pour votre flotte de véhicules avec un marquage
            adhésif de haute qualité.
          </p>
          <p className={styles.texte_normal_section2}>
            Nous pouvons imprimer et poser des stickers, des adhésifs imprimés,
            votre logo découpé à la forme logos, des textes, etc...
          </p>
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
            <div className={styles.titre5}>L'atelier enseigniste</div>
            <p className={styles.soustitre_section5}>
              Nos propositions de supports :
            </p>
            <p className={styles.texte_normal_section2}>
              Nous pouvons également vous accompagner sur vos projets de
              conception et d'installations d'enseignes.
            </p>
            <p className={styles.texte_normal_section2}>
              Qu'il s'agit d'une enseigne standard sur panneau ou qu'elle soit
              enseignes lumineuses pour améliorer votre visibilité de jour comme
              de nuit, plusieurs solutions s'offrent à vous comme des enseignes
              LED, des enseignes néons, des enseignes rétro-éclairées, etc...
            </p>
          </div>
        </div>

        <div className={styles.section9}>
          <div className={styles.content_section9}>
            <div className={styles.gras_texte9}>
              <p>« L'impression c'est comme la magie :</p>
              <p>Ici on donne vie à vos idées les plus folles ! »</p>
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

        <div className={styles.section5}>
          <div className={styles.content_section5}>
            <div className={styles.titre5}>L'atelier marquage véhicules</div>
            <p className={styles.soustitre_section5}>
              Nos propositions de supports :
            </p>

            <p className={styles.texte_normal_section2}>
              Notre équipe s'est également spécialisée dans la personnalisation
              de véhicules.
            </p>
            <p className={styles.texte_normal_section2}>
              Que vous souhaitiez marquer un seul véhicule ou l'ensemble de
              votre flotte nous vous proposons un marquage adhésif ( en partiel,
              semi-partiel ou full covering ) de haute qualité et entièrement
              personnalisé.
            </p>
          </div>
        </div>

        <div className={styles.section5}>
          <div className={styles.content_section5}>
            <div className={styles.titre5}>L'atelier gravure</div>
            <p className={styles.soustitre_section5}>industrielle ou laser</p>

            <p className={styles.texte_normal_section2}>
              En effet nous pouvons graver sur tous types de matériaux tels que
              le gravoply, plastique, le verre et bien plus encore.
            </p>
            <p className={styles.texte_normal_section2}>
              Nous proposons une large gamme de gravures, allant de la simple
              gravure de texte à la gravure de motifs complexes et détaillés ou
              au besoinn de la découpe de support au format.
            </p>
          </div>
        </div>
        <div className={styles.section6}>
          <div className={styles.gras_texte6}>
            Pour se faire il existe plusieurs techniques :
          </div>
          <div className={styles.section6_grid}>
            <div className={styles.content6}>
              <p className={styles.texte_normal_section6}>
                La gravure mécanique
              </p>
            </div>
            <div className={styles.content6}>
              <p className={styles.texte_normal_section6}>La gravure laser</p>
            </div>
          </div>
          <div className={styles.section6_grid}>
            <div className={styles.content6}>
              <p className={styles.texte_normal_section6}>
                La découpe et l'usinage
              </p>
            </div>
            <div className={styles.content6}>
              <p className={styles.texte_normal_section6}>
                La gravure en brail
              </p>
            </div>
          </div>
          <div className={styles.texte_normal_section6_2}>
            * Selon vos besoins nous serons en capacité de vous proposer des
            solutions de découpe-gravure laser. Celles-ci permettent
            essentiellement la découpe des matériaux organiques tels que le
            bois, les cartons, les tissus, le cuir, le caoutchouc et les
            plastiques en général ( PMMA, PET, PETG, PP, PS, mousses PS et PE,
            etc...) exceptés les plastiques de type PVC, téflons, etc...
          </div>
          <div className={styles.texte_normal_section6_2}>
            * Pour répondre à des besoins plus spécifiques, il existe aussi des
            techniques de gravures industrielles et de marquage pour des
            supports tels que l'aluminium, le laiton, le cuivre, l'acier,
            l'inox, le bronze, et les métaux non-ferreux.
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
        <div>
          <div className={styles.section8}>
            <div className={styles.text_section8}>
              Ils font deja partis de l'aventure
            </div>
            <div className={styles.grid2}>
              <img className={styles.logo_img} src="Kemone.png" alt="Kemone" />
              <img
                className={styles.logo_img}
                src="Eiffage.png"
                alt="Eiffage"
              />
              <img className={styles.logo_img} src="Edf.png" alt="Edf" />
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
        <div className={styles.section9}>
          <div className={styles.content_section9}>
            <div className={styles.gras_texte6_bis}>
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

export default Production;
