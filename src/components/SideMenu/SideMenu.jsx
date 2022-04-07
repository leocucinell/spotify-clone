import "./SideMenu.css"
import React, {useEffect, useState} from "react"
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc, faHome, faMagnifyingGlass, faList, faPlus, faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import spotify from "../../api/spotify";

const SideMenu = ({userToken}) => {

    const [playingLoader, setPlayingLoader] = useState(false);
    const [albumUrl, setAlbumUrl] = useState("");

    useEffect(() => {
        //retrieve currently playing track
        spotify.get("me/player", {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        }).then((res) => {
            // if status = 200 -> supply data to bottom display box
            if(res.status === 200){
                setPlayingLoader(true);
                setAlbumUrl(res.data.item.album.images[1].url)
            }
        });
    }, [])

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
            <div className="SideMenu-playing-display">
                <CSSTransition
                    in={playingLoader}
                    timeout={300}
                    classNames="SideMenu-image"
                    mountOnEnter={true}
                >
                    <img src={albumUrl} alt="Loading..." className="SideMenu-image-loading" />
                </CSSTransition>
            </div>
        </div>
    );
}

export default SideMenu;