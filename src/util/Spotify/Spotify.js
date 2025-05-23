const clientId = "5df898c178294bb4ba401a44f07cec2b";
const redirectURI = "https://jordandonguy.github.io/jamming";

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;

        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);

        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access token", null, "/")
            return accessToken;
        }
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = redirect;
    },

    search(term) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: "GET",
            headers: { 'Authorization': `Bearer ${accessToken}` },
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (!jsonResponse) {
                console.log("Response error")
            }
            return jsonResponse.tracks.items.map(t => ({
                id: t.id,
                name: t.name,
                artist: t.artists[0].name,
                album: t.album.name,
                uri: t.uri,
            }))
        })
    },

    savePlaylist(name, trackURIs) {
        if(!name || !trackURIs) return;
        const accToken = Spotify.getAccessToken();
        const header = { 'Authorization': `Bearer ${accToken}` };
        let userId; 
        let playlistId;
        return fetch(`https://api.spotify.com/v1/me`, { headers: header })
            .then((response) => response.json())
            .then((jsonResponse) => {
                userId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: header,
                    method: "post",
                    body: JSON.stringify({name: name}),
                })
            }) 
            .then((response) => response.json())
            .then(jsonResponse => {
                playlistId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: header,
                    method: "post",
                    body: JSON.stringify({uris: trackURIs}),
                })
            })
    }
};

export default Spotify;