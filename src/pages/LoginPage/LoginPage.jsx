import "./LoginPage.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = () => {
        console.log(email, password);
        
        setEmail("");
        setPassword("");
    }

    return(
        <div className="LoginPage-container">
            <div className="LoginPage-logo-container">
                <span className="LandingPage-logo-span"><FontAwesomeIcon className="disk-icon" icon={faCompactDisc}></FontAwesomeIcon><span className="logo-text">Spotify</span></span>
            </div>
            <div className="LoginPage-form-container">
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => {submitLogin()}} className="Login-button"><span>login</span></button>
            </div>
        </div>
    );
}

export default LoginPage;