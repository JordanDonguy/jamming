import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar (props) {
  const [term, setTerm] = useState();

  function passTerm(term) {
    props.onSearch(term);
  };

function handleTermChange(event) {
  setTerm(event.target.value);
}

    return (
        <div className={styles.SearchBar}>
        <input
          onChange={handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className={styles.SearchButton} onClick={passTerm}>
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar;