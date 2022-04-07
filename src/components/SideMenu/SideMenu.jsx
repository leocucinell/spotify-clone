import "./SideMenu.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc, faHome, faMagnifyingGlass, faList, faPlus, faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";

const SideMenu = () => {
    return(
        <div className="SideMenu-container">
            <div className="SideMenu-logo-container">
                <FontAwesomeIcon id="SideMenu-logo-icon" icon={faCompactDisc} />
                <span>Spotify</span>
            </div>
            <div className="SideMenu-options-container">
                <ul className="SideMenu-options-ul">
                    <li><FontAwesomeIcon className="SideMenu-option-icon" icon={faHome} /><span>Home</span></li>
                    <li><FontAwesomeIcon className="SideMenu-option-icon" icon={faMagnifyingGlass} /><span>Search</span></li>
                    <li><FontAwesomeIcon className="SideMenu-option-icon" icon={faList} /><span>Your Library</span></li>
                    <li id="SideMenu-options-halfway"><FontAwesomeIcon className="SideMenu-option-icon" icon={faPlus} /><span>Create Playlist</span></li>
                    <li><FontAwesomeIcon className="SideMenu-option-icon" icon={faHeart} /><span>Liked Songs</span></li>
                    <li><FontAwesomeIcon className="SideMenu-option-icon" icon={faBookmark} /><span>Your Episodes</span></li>
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;