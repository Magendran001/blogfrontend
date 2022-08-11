import { Box, Button, Flex, Grid,Image,Spacer,Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMINGETDATA } from "../../redux/adminreducer/adminaction";
 import { Blockuser } from "../../redux/adminreducer/adminaction";

function Adminpage(){

    let userdetails = useSelector(state=>state.loginreducer.userdetails);
    let data = useSelector(state=>state.adminreducer?.data)

    let isloading = useSelector(state=>state.adminreducer.isloading)
    console.log(data,"datassssss")
   

     let dispatch = useDispatch();

    

    const Blocksubmit = (id)=>{

             console.log(id,"id")
             let config = {
                headers:{
                    Authorization:'Bearer ' + userdetails?.token,
                }
             }

             dispatch(Blockuser(id,config))
       
            
    }
    return (
          
         <Grid w="60%" m="30px auto" gap={30}>
            {data.length!=0&& data.map(e=> <Flex gap={"100px"}>
                <Box>
                <Image w="100px" src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"/>
                <Text >{e.firstname}</Text>
                <Text >{e.email}</Text>
                </Box>
                <Spacer/>
                <Box>
                    {e.banned?<Button onClick={()=>{Blocksubmit(e._id)}} >UnBlock </Button>:<Button  onClick={()=>{Blocksubmit(e._id)}} >Block </Button>}
                    
                </Box>

              </Flex>)} 
             
         </Grid>

    )

}
export default Adminpage