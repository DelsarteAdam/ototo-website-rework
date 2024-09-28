import SearchElement from "../components/SearchBar";
import styles from "./Test.module.scss";

function Test() {
  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <div className={styles.container}>
      <h1>test</h1>
      <SearchElement
        height={"50px"}
        color={"#f0c345"}
        fill={"#000000"}
        searchIconSize={60}
        maxWidth={"200px"}
        leftPosition={false}
        handleSearchInput={handleSearchInput}
      />
    </div>
  );
}

export default Test;
