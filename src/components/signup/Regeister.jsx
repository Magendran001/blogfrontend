import { Center, FormControl, FormLabel, Grid, Input,Box, Button,Text } from "@chakra-ui/react"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import Spinnerload from "../spinner/spinner";

import SIGNUPPOST from "../../redux/signupreducer/signupaction";
function Regeister()
{

    let dispatch = useDispatch();
    let redirect = useSelector(state=>state.Signupreducer.done_newuser);
    let isloading = useSelector(state=>state.Signupreducer.isloading);
    let nav = useNavigate();
    

    let [signupobj,setsignupobj] = useState({});

    const signuphandler =(event)=>{
        
        let {name,value} = event.target;

        setsignupobj({...signupobj,[name]:value})

    }

    const Submithandler =()=>{
            //   console.log(signupobj)
         
        dispatch(SIGNUPPOST({...signupobj}))



    }


    useEffect(()=>{
           if(redirect)
           {
            nav("/")
           }
       

    },[redirect])
    return ( <><Grid w="500px" m="30px auto" gap={"20px"}>
         <FormControl isRequired>
        
        <FormLabel>First Name</FormLabel>
        <Input type={"text"} placeholder='First Name' name="firstname"  onChange={signuphandler} />
      </FormControl>
      <FormControl >
        
        <FormLabel>Last Name</FormLabel>
        <Input type={"text"} placeholder='Last Name' name="lastname"  onChange={signuphandler} />
      </FormControl>
    <FormControl isRequired>
        
        <FormLabel>Email</FormLabel>
        <Input type={"email"} placeholder='Email' name="email"  onChange={signuphandler} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input type={"password"} placeholder='Password' name="password"  onChange={signuphandler}/>
      </FormControl>
      
      <Button bg={"teal"} color="white" onClick={Submithandler}>Submit</Button>
      
      
      </Grid>
       {isloading&&<Spinnerload/>}
      </>)
}

export default Regeister