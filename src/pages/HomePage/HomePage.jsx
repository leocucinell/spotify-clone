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