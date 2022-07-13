import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ()=>{
    const {auth} = useAuth();
    const location = useLocation();
    return(
        auth?.userName
        ?  <CreateMeme/>
        :
        <Navigate to="/login" state={{from:location}} replace></Navigate>
    )
}
export default RequireAuth;