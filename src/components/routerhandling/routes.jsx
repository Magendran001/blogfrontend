import Navbar from "../navbar/navbar";
import { Routes ,Route} from "react-router-dom";
import Login from "../login/login";
import Regeister from "../signup/Regeister";
import Home from "../home/home";
import Publicblogs from "../publicblogs/publicblogs";
import Authorization from "../authorization/authorization";
import Addblogs from "../addblogs/addblogs";
import Myblogs from "../myblogs/myblogs";
function Routerhandling()
{
  
    return(<>
    <Navbar/>
        <Routes>
        <Route path="/" element={<Authorization><Home/></Authorization>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/regeister" element={<Regeister/>}/>
            <Route path="/publicblogs" element={<Publicblogs/>}></Route>
            <Route path="/addblogs" element={<Authorization><Addblogs/></Authorization>}></Route>
            <Route path="/myblogs" element={<Authorization><Myblogs/></Authorization>}></Route>

            </Routes>
       
   
    </>)


}

export default Routerhandling