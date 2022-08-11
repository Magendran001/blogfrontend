import { Box } from "@chakra-ui/react";
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Fetchblogbyid from "../../redux/ownblogs/ownblogaction";
import Ownbloglist from "./ownblogtemplate";

function Myblogs()
{
    let dispatch = useDispatch();
    let userdetails  = useSelector(state=>state.loginreducer.userdetails);
    let id = userdetails?.user?._id;

    console.log(userdetails?.user?._id,"iddss")
    let isAuth  = useSelector(state=>state.loginreducer.isAuth)
  

    
    
    let data  = useSelector(state=>state.ownblogreducer?.data);

    // console.log(data,"userdetails")
      
   

    return (<Box w="80%" m="30px auto">
               {data?.length?data.map(e=><Ownbloglist data={e} />):<h1>Empty Blog Post</h1>}
               
               

    </Box>)
}

export default Myblogs