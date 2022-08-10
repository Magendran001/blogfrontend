import { Box } from "@chakra-ui/react";
import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux";
import { Publicblogdata } from "../../redux/publicblogreducer/publicblogaction";
import ArticleList from "./blogtemplate";

function Publicblogs()
{

    let blogdata =useSelector(state=>state.Publicblogreducer.blogs);
    // console.log(blogdata) 
    let dispatch = useDispatch();
    useEffect(()=>{
       
        dispatch(Publicblogdata())
     
        
    },[])


    
    return (<Box w="80%" m="auto">   

{blogdata.map(e=><Box><ArticleList data={e}/></Box>)}
          
    </Box>)
}
export default Publicblogs