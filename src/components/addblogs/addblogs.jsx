import { Center, FormControl, FormLabel, Grid, Input,Box, Button,Text } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinnerload from "../spinner/spinner";
import { PostBlog } from "../../redux/ownblogs/ownblogaction";


function Addblogs(){
 
    let dispatch = useDispatch();
    let userdetails  = useSelector(state=>state.loginreducer.userdetails);
    let isloading = useSelector(state=>state.ownblogreducer.isloading);
    console.log(isloading,"isloading")
    let [blogdata,setblogdata] = useState({});

    

    const Bloghandler =(event)=>{
        let {name,value} = event.target;

         
        setblogdata ({...blogdata,[name]:value})

    }

    const Submithandler =()=>{
        // console.log(blogdata)
        let config = {
            headers:{
                Authorization:'Bearer ' + userdetails?.token,
            }
        }

         dispatch(PostBlog(blogdata,config))
       
    }
    
    return (<><Grid w="500px" m="30px auto" gap={"20px"}>
    <FormControl isRequired>
   
   <FormLabel>Title</FormLabel>
   <Input type={"text"} placeholder='Title' name="title"  onChange={Bloghandler} />
 </FormControl>
 <FormControl isRequired>
   
   <FormLabel>Description</FormLabel>
   <Input type={"text"} placeholder='Description' name="desc"  onChange={Bloghandler} />
 </FormControl>
<FormControl isRequired>
   
   <FormLabel>Image</FormLabel>
   <Input type={"email"} placeholder='Paste Image url' name="image"  onChange={Bloghandler} />
 </FormControl>
 
 
 <Button bg={"teal"} color="white" onClick={Submithandler}>Submit</Button>
 
 
 </Grid>
 { isloading&&<Spinnerload/>}
 </>)
}

export default Addblogs