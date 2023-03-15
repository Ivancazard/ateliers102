import styles from "../styles/Contact.module.css";
import { useState } from "react";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.login_box}>
          <h2>Contact</h2>
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
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Envoyer
            </a>
          </form>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.container_map}>
          <iframe
            width="100%"
            height="500px"
            frameborder="0"
            allowfullscreen
            src="//umap.openstreetmap.fr/fr/map/carte-ateliers-102_884254?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"
          ></iframe>
          <p>
            <a href="//umap.openstreetmap.fr/fr/map/carte-ateliers-102_884254">
              Voir en plein écran
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
