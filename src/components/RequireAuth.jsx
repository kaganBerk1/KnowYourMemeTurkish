import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ()=>{
    const {auth} = useAuth();
    const location = useLocation();
    return(
        auth?.userName && auth.token
        ?  <Outlet/>
        :
        <Navigate to="/home" state={{from:location}} replace></Navigate>
    )
}
export default RequireAuth;