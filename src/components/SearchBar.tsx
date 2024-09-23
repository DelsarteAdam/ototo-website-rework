import styles from "./SearchBar.module.scss";

import { useState } from "react";

function SearchBar() {
  const [inputText, setInputText] = useState<string>("");

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.currentTarget.value.toLowerCase());
  }

  return (
    <div>
      <div className={styles.container}>
        <img src="/icons/searchIcon.svg" alt="search icon" />
        <input
          type="text"
          onChange={(e) => inputHandler(e)}
          placeholder="Search..."
        />
      </div>
      <div>search result</div>
    </div>
  );
}

export default SearchBar;
