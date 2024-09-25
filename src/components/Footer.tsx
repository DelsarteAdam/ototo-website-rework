import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section>
          <ul>
            <li>catalogue</li>
            <li>planning</li>
            <li>
              <Link to="/lecture/Love_me_for_who_I_am">lecture en ligne</Link>
            </li>
            <li>contact</li>
            <li>newsLetter</li>
          </ul>
        </section>
        <section className={styles.middle}>
          <ul>
            <li>code prix</li>
            <li>Diffuseur Makassar</li>
            <li>Distributeur MDS</li>
          </ul>
        </section>
        <section>
          <h3>partenaires</h3>
          <div className={styles.partenaires}>
            <img src="/images/JapanFM.png" alt="Japan F M" />
            <img src="/images/subarashii.png" alt="subarashii" />
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
