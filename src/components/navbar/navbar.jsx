import { Center ,Box, Flex, Button} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { Loginpostdata } from "../../redux/loginreducer/loginaction";
import Logout from "../login/logout";



function Navbar()
{
   let dispatch = useDispatch();
    let isAuth = useSelector(state=>state.loginreducer.isAuth);
    // console.log(isAuth,"selector")

    let token = useSelector(state=>state.loginreducer.token)
    // console.log(token)

      useEffect(()=>{
        if(token?.token)
        {
            dispatch(Loginpostdata(token))
        }

      },[token])

  
    return (<>
         <Center justifyContent={"space-between"} p="20px" bgColor={"blue.200"}>
             <Box><Link to="/">Home</Link></Box>
             <Flex gap={"30px"}>
                <Link to="/publicblogs">Public Blogs</Link>
                <Link to="/myblogs">My Blogs</Link>
                <Link to="/addblogs">ADD Blogs</Link>
               
             </Flex>
             <Box>
               {isAuth?<Logout/>: <Link to="/login"><Button>Login</Button></Link>}
             </Box>
         </Center>
    </>)


}

export default Navbar