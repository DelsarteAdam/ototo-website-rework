import SearchElement from "../components/SearchElement";
import styles from "./Test.module.scss";

function Test() {
  return (
    <div className={styles.container}>
      <h1>test</h1>
      <SearchElement
        height={"10vh"}
        color={"#f0c345"}
        fill={"#c0c0c0"}
        searchIconSize={60}
        maxWidth={"1000px"}
        leftPosition={false}
      />
    </div>
  );
}

export default Test;
