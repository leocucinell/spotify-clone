import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const useUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.user.value);

    if(!currentUser){
        const savedUser = localStorage.getItem("spotify-front-end-access_token");
        if(savedUser){
            //add the user to store
            dispatch(addUser(savedUser));
            return savedUser;
        } else {
            //Neither saved or state has a user
            navigate('/')
        }
    }
    return currentUser;
}
export default useUser;