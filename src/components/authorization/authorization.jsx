import { useDispatch, useSelector } from "react-redux"
import Adminpage from "../admin/adminpage";

function Authorization({children})
{

    let dispatch = useDispatch();
    let admin = useSelector(state=>state.loginreducer.userdetails?.user?.role);
    // console.log(admin,"admins")
    let isAuth = useSelector(state=>state.loginreducer.isAuth);
    // console.log(isAuth,"authorization")

    if(!isAuth)
    {
           return (<><h1>You need to login first</h1></>)
    }
    else if(admin=="admin"){

        return (<Adminpage/>)
    }


    return (<>{children}</>)
}



export default Authorization