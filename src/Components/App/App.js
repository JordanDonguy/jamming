import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify/Spotify";

function App () {
  const [searchResults, setSearchResults] = useState([]);

  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

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

  function updatePlaylistName(name) {
    setPlaylistName(name)
  };

  function savePlaylist() {
    const trackURIs = playlistTracks.map((track) => track.uri);
    console.log(trackURIs);
    Spotify.savePlaylist(playlistName, trackURIs)
      .then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([])
      });
  };

  function search(term) {
    Spotify.search(term).then(result => setSearchResults(result))
  };

    return (
        <div >
        <h1>
          Ja<span className={styles.highlight}>mm</span>ing
        </h1>
        <div className={styles.App}>
          <SearchBar onSearch={search} />
          
          <div className={styles['App-playlist']}>
            <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
            <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            />
          </div>
        </div>
      </div>
        );
}

export default App;