import styles from "./SearchBar.module.scss";

import { useEffect, useState } from "react";

async function fetchInputData(input: string) {
  console.log(input);
  if (input == "") return [""];
  return ["link1", "link2", "link3"];
}

function SearchBar() {
  const [inputText, setInputText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string[]>([""]);
  const [click, setClick] = useState(false);

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.currentTarget.value.toLowerCase());
  }

  function clickHandler() {
    setClick(!click);
  }

  useEffect(() => {
    fetchInputData(inputText)
      .then((data) => setSearchResult(data))
      .catch(() => {
        setSearchResult(["Failed to search"]);
      });
  }, [inputText]);

  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          onChange={(e) => inputHandler(e)}
          placeholder="Search..."
          className={!click ? styles.invisible : ""}
        />
        <img
          src={click ? "/icons/cross.svg" : "/icons/searchIcon.svg"}
          alt="search icon"
          onClick={() => clickHandler()}
        />
      </div>
      <div
        className={`${styles.result} ${
          searchResult[0] == "" || !click ? styles.invisible : ""
        }`}
      >
        {searchResult.map((link, i) => (
          <a href="#" key={i}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
