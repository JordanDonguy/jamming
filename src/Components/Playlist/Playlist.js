import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../TrackList/TrackList";

function Playlist(props) {
function handleNameChange(event) {
  props.onNameChange(event.target.value);
};

  return (
    <div className={styles.Playlist}>
      <input value={props.playlistName} onChange={handleNameChange} />
      <Tracklist userSearchResults={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
      <button className={styles['Playlist-save']} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;