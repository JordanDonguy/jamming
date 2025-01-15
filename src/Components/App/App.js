import React from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App () {
    return (
        <div >
        <h1>
          Ja<span className={styles.highlight}>mm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles['.App-playlist']}>
            {/* <!-- Add a SearchResults component --> */}
            {/* <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
        );
}

export default App;