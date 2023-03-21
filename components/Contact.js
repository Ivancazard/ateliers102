import styles from "../styles/Contact.module.css";
import { useState } from "react";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
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
    </div>
  );
}

export default Contact;
