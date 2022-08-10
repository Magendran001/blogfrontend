import { Center ,Box, Flex, Button} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Logoutpostdata } from "../../redux/loginreducer/loginaction";
function Logout()
{
      
    
   
    let dispatch = useDispatch();
    const Logouthandler = ()=>{

        dispatch(Logoutpostdata())


    }

    return (<Button onClick={Logouthandler}>Logout</Button>)
}

export default Logout