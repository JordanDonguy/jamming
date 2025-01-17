import Reat from "react";

const clientId = "afc65549b8d34973bc35a0edaac876ad";
const redirectURI = "http://locolhost:3000";

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
        } else if (!accessToken && !tokenInURL) {
            const redirectURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
            window.location = redirectURL;
        }
    }
}