import "./LandingPage.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {

    const navigate = useNavigate();

    const handleSpotifyLogin = () => {
        const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
        const REDIRECT_AFTER_LOGIN = "http://localhost:3000/"
        const SPACE_DELIMETER = "%20"
        const SCOPES = ["user-library-read", "user-read-currently-playing", "user-read-playback-state", "user-read-email", "user-read-private"]
        const SCOPES_URL = SCOPES.join(SPACE_DELIMETER);
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_AFTER_LOGIN}&scope=${SCOPES_URL}&response_type=token&show_dialog=true`
    }

    const retrieveReturnParamsFromSpotifyAuth = (hash) => {
        const stringAfterHashtag = hash.substring(1)
        const urlParams = stringAfterHashtag.split('&');
        const splitUpParams = urlParams.reduce((accumulator, currentValue) => {
            const [key, val] = currentValue.split("=");
            accumulator[key] = val
            return accumulator
        }, {})
        return splitUpParams;
    }

    useEffect(() => {
        if(window.location.hash){
            const {access_token, token_type, expires_in} = retrieveReturnParamsFromSpotifyAuth(window.location.hash);
            localStorage.setItem("spotify-front-end-access_token", access_token);
            navigate("Home");
        }
    })

    return(
        <div className="LandingPage-container">
            <nav className="LandingPage-navbar">
                <span className="LandingPage-logo-span"><FontAwesomeIcon className="disk-icon" icon={faCompactDisc}></FontAwesomeIcon><span className="logo-text">Spotify</span></span>
                <ul className="LandingPage-ul">
                    <li>Premium</li>
                    <li>Support</li>
                    <li>Download</li>
                    <li onClick={() => {
                        // navigate("login");
                        handleSpotifyLogin();
                    }}>Login</li>
                </ul>
            </nav>

            <main className="LandingPage-main">
                <FontAwesomeIcon className="center-disk" icon={faCompactDisc}></FontAwesomeIcon>
                <div className="LandingPage-main-content">
                    <span className="main-content-title">Jump back in</span>
                    <div onClick={() => {
                        // navigate("login");
                        handleSpotifyLogin();
                    }} className="login-button">Log in</div>
                </div>
            </main>

            <footer className="LandingPage-footer">
                <ul>
                    <li>About</li>
                    <li>Legal</li>
                    <li>Support</li>
                    <li><FontAwesomeIcon className="footer-brand" icon={faInstagram}></FontAwesomeIcon></li>
                    <li><FontAwesomeIcon className="footer-brand" icon={faTwitter}></FontAwesomeIcon></li>
                    <li><FontAwesomeIcon className="footer-brand" icon={faFacebook}></FontAwesomeIcon></li>
                </ul>
            </footer>
        </div>
    );
}

export default LandingPage;