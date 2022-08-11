import { Center ,Box, Flex, Button} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { ADMINGETDATA } from "../../redux/adminreducer/adminaction";
import { Loginpostdata } from "../../redux/loginreducer/loginaction";
import Fetchblogbyid from "../../redux/ownblogs/ownblogaction";
import { Publicblogdata } from "../../redux/publicblogreducer/publicblogaction";
import Logout from "../login/logout";



function Navbar()
{
   let dispatch = useDispatch();
    let isAuth = useSelector(state=>state.loginreducer.isAuth);
    

    let token = useSelector(state=>state.loginreducer.token);
    let userdetails = useSelector(state=>state.loginreducer.userdetails);
    let id = userdetails?.user?._id;

    let config = {
      headers:{
          Authorization:"Bearer"+" "+userdetails?.token,
      }
  }
    

      useEffect(()=>{
        if(token?.token)
        {
            dispatch(Loginpostdata(token))
        }

      },[token])

       
    useEffect(()=>{
       dispatch(Publicblogdata())
          dispatch(ADMINGETDATA(config))
  },[])

  useEffect(()=>{

    if(isAuth)
    {
        dispatch(Fetchblogbyid(config,id))
    }
},[])
  
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