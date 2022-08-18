import { Center, FormControl, FormLabel, Grid, Input,Box, Button,Text, Spinner } from "@chakra-ui/react"
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Toast from "../toast/toast";
import { Loginpostdata } from "../../redux/loginreducer/loginaction";

import { POSTLOGINERROR,POSTLOGINSUCCESS,POSTLOGINREQ} from "../../redux/loginreducer/loginaction";

import Logout from "./logout";

import axios from "axios"
import { useEffect } from "react";
import Spinnerload from "../spinner/spinner";
import Googleauthentication from "../googleauthentication/authentication";

function Login()
{

    let nav = useNavigate();

    let dispatch = useDispatch();
    let selector = useSelector(state=>state);
    let isAuth = useSelector(state=>state.loginreducer.isAuth);
    let isloading = useSelector(state=>state.loginreducer.isloading);
    let username = useSelector(state=>state.loginreducer.userdetails?.user?.firstname);
    let toastauth = useSelector(state=>state.toastreducer.active);
    console.log(username,"isloading")
    
    
    let [loginobj,setloginobj] = useState({});

    const Loginhandler =(event)=>{
        
        let {name,value} = event.target;

        setloginobj({...loginobj,[name]:value})

    }

    const Submithandler =()=>{

        
       
         dispatch(Loginpostdata(loginobj))
    }

    useEffect(()=>{

 
      
    },[])
    useEffect(()=>{

        if(isAuth)
        {
            nav("/")
        }

    },[isAuth])

     


    return (
        <Box>
     <Grid w={{base:"300px",md:"500px"}} m="30px auto"  gap={"20px"}>
    <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' name="email"  onChange={Loginhandler} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder='password' name="password"  onChange={Loginhandler}/>
      </FormControl>
      <Box>
        if you are  new user? click here to <Text as={"span"} color={"blue"}><Link to="/regeister">Regeister</Link></Text> 
      </Box>
      <Button bg={"teal"} color="white" onClick={Submithandler}>Submit</Button>
      
      
      </Grid>
       {isloading&& <Spinnerload/>}
       {toastauth&&<Toast title= {`Welcome ${username}`} status  ="success" />}
       <Googleauthentication/>
      </Box>)
} 

export default Login