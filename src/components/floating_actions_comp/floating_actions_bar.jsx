import Login from "./floating_login";
import NotLogin from "./floating_not_login";

export default function Floating({status=true}){
    return(
        <>
            {status ? (
                <Login/>
                ):(
                <NotLogin/>
            )}
        </>
    )
}