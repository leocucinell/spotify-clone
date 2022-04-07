import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";


const useUser = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.user.value);

    if(!currentUser){
        const savedUser = localStorage.getItem("spotify-front-end-access_token");
        if(savedUser){
            //add the user to store
            dispatch(addUser(savedUser));
            return savedUser;
        } else {
            //Neither saved or state has a user
            return false;
        }
    }
    return currentUser;
}
export default useUser;