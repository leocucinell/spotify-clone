import "./HomePage.css";
import React, {useEffect} from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 

import { setSong } from "../../features/currentSongSlice";
import spotify from "../../api/spotify";
import SideMenu from "../../components/SideMenu/SideMenu";
import Player from "../../components/Player/Player";

const HomePage = () => {

    const userToken = useUser();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        //check if the user has a token
        if(!userToken){
            navigate('/');
        }
        //find the current Song from the users spotify
        spotify.get("me/player", {
            headers: {
                "Authorization": "Bearer " + userToken
            }
        }).then((res) => {
            dispatch(setSong(res.data));
        });
    }, [navigate, userToken, dispatch]);

    return(
        <div className="HomePage-container">
            <SideMenu />
            <Player />
        </div>
    );
}

export default HomePage;