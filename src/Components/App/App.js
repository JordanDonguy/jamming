import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App () {
  const [searchResults, setSearchResults] = useState(
    [
      {
        name: "Track 1",
        artist: "Artist 1",
        album: "Album 1",
        id: 1,
      },
      {
        name: "Track 2",
        artist: "Artist 2",
        album: "Album 2",
        id: 2,
      }
    ]
  );

  const [playlistName, setPlaylistName] = useState("Playlist 1");
  const [playlistTracks, setPlaylistTracks] = useState(searchResults);

  function addTrack(track) {
    const isTrack = playlistTracks.find((tracks) => tracks.id === track.id);
    if (!isTrack) {
      setPlaylistTracks(prevTrack =>  [...prevTrack, track])
    } else if (isTrack) {
      console.log("track already exist");
    }
  };

  function removeTrack(track) {
    const newPlaylist = playlistTracks.filter((tracks) => tracks.id !== track.id);
    setPlaylistTracks(newPlaylist)
  };

    return (
        <div >
        <h1>
          Ja<span className={styles.highlight}>mm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles['App-playlist']}>
            <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} />
          </div>
        </div>
      </div>
        );
}

export default App;