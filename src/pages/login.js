 import { useContext } from "react";
 import { Link,Outlet } from "react-router-dom";
import NoteContext from "../context/noteContext";
const Login=()=>{
   const a=useContext(NoteContext)

    return(
         <>
       <div>Login  {a.token} </div>
        
        <br/>

        <Link to='contact'>contact</Link>

        <br/>
        <div>
        <Outlet></Outlet>
        </div>
       </>
    )

}
export default Login;