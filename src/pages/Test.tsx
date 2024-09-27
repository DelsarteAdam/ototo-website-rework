import SearchElement from "../components/SearchElement";
import styles from "./Test.module.scss";

function Test() {
  return (
    <div className={styles.container}>
      <SearchElement
        height={"10vh"}
        color={"#fff"}
        fill={"#f0c345"}
        searchIconSize={60}
        maxWidth={"1000px"}
        leftPosition={false}
      />
    </div>
  );
}

export default Test;
