import React from "react";
import styles from "./Playlist.module.css";

function Playlist(props) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}
      <button className="Playlist-save">
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;