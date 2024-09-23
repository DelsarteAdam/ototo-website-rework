import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <ul>
          <li>catalogue</li>
          <li>planning</li>
          <li>lecture en ligne</li>
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
        <p>japan FM</p>
        <p>subarashii</p>
      </section>
    </footer>
  );
}

export default Footer;
