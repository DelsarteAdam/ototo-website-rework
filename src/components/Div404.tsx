import styles from "./Div404.module.scss";

function Div404() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <img src="/images/NotFound404.png" alt="image not found" />
      <h3>Page inconnue</h3>
    </div>
  );
}

export default Div404;
