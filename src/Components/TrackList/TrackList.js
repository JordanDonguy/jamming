import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";

function Tracklist (props) {
    return (
        <div className={styles.TrackList}>
          {props.userSearchResults.map((track) => 
            <Track track={track} key={track.id} />
          )}
      </div>
    );
}

export default Tracklist;