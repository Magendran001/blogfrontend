import { Box ,Center,Heading,Image,Text} from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Loginpostdata } from "../../redux/loginreducer/loginaction";

function Home()
{
     
   


    let userdetails = useSelector(state=>state.loginreducer.userdetails?.user );
    

    return (<Box w="80%" m="30px auto">
           
           <h1>Hi,{userdetails?.firstname}
          </h1>

           <Center gap={"30px"}>
          <Link to="/myblogs">
          
             <Image w="400px" h="400px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5fIaKBcBnD5Ej1o7QQ53-2-dDsTHGW467A&usqp=CAU"/>
             <Heading>My BLogs</Heading>
             </Link>
              <Link to="/addblogs">
            
             
             <Image w="400px" h="400px"  src="https://image.shutterstock.com/image-photo/blogging-concept-top-view-text-260nw-1496752340.jpg"/>
             <Heading>Post New Blog</Heading>
             </Link>

             </Center>


        




    </Box>)
}

export default Home