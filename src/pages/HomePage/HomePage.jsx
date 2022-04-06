import "./HomePage.css";
import React, {useEffect} from "react";

import spotify from "../../api/spotify";
import SideMenu from "../../components/SideMenu/SideMenu";

const HomePage = () => {

    useEffect(() => {
        const userToken = localStorage.getItem("spotify-front-end-access_token");
        console.log(userToken)
        spotify.get("me/tracks", {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        }).then((res) => {
            console.log(res);
        });
    }, [])

    return(
        <div className="HomePage-container">
            <SideMenu />
        </div>
    );
}

export default HomePage;