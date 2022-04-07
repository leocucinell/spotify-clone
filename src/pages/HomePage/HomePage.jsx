import "./HomePage.css";
import React, {useEffect} from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

import spotify from "../../api/spotify";
import SideMenu from "../../components/SideMenu/SideMenu";

const HomePage = () => {

    const userToken = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if(!userToken){
            navigate('/');
        }

        //NOTE: Example spotify api interaction
        // spotify.get("me/tracks", {
        //     headers: {
        //         'Authorization': 'Bearer ' + userToken
        //     }
        // }).then((res) => {
        //     console.log(res);
        // });
        
    }, [navigate, userToken]);

    return(
        <div className="HomePage-container">
            <SideMenu userToken={userToken} />
        </div>
    );
}

export default HomePage;