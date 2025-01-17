import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar (props) {
  const [term, setTerm] = useState();

  function passTerm() {
    props.onSearch(term);
  };  

function handleTermChange(event) {
  setTerm(event.target.value);
}

function enter(event) {
  if (event.key === "Enter") {
    passTerm()
  }
};

    return (
        <div className={styles.SearchBar}>
        <input
          onChange={handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
          onKeyDown={enter}
        />
        <button className={styles.SearchButton} onClick={passTerm}>
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar;