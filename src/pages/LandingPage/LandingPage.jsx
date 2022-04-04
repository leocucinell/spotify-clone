import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {

    const navigate = useNavigate();

    return(
        <div className="LandingPage-container">
            <nav className="LandingPage-navbar">
                <span className="LandingPage-logo-span"><FontAwesomeIcon className="disk-icon" icon={faCompactDisc}></FontAwesomeIcon><span className="logo-text">Spotify</span></span>
                <ul className="LandingPage-ul">
                    <li>Premium</li>
                    <li>Support</li>
                    <li>Download</li>
                    <li onClick={() => {
                        navigate("login");
                    }}>Login</li>
                </ul>
            </nav>

            <main className="LandingPage-main">
                <FontAwesomeIcon className="center-disk" icon={faCompactDisc}></FontAwesomeIcon>
                <div className="LandingPage-main-content">
                    <span className="main-content-title">Jump back in</span>
                    <div onClick={() => {
                        navigate("login");
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