
import { useState,useEffect ,useContext} from "react";
import NoteContext from '../context/noteContext';


import Axios from 'axios';
export const Form=()=>{
   const a= useContext(NoteContext)

  const[text, setText]=useState(false)
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [user ,setuser]=useState({
        name:"",
        email:"",
        password:"",
        role:"",
    })
    
   const onChange1=(val)=>{
    console.log(val.target.value)
    setname(val.target.value)
   }
   const onChange4=(val)=>{
    console.log(val.target.value)
    setEmail(val.target.value)
   }

   const onChange2=(val)=>{
    console.log(val.target.value)
    setPassword(val.target.value)

}

const onChange3=(val)=>{
    console.log(val.target.value)
    setRole(val.target.value)
   
}
const onClick=()=>{
     
    

    console.log(user)
   
   }

useEffect(() => {
    setuser({
        name:name,
        email:email,
        password:password,
        role:role
    })

  return () => {
    
  }
}, [name,password,role,email])

const createUser = () => {
    Axios.post("https://hulkmerndb.herokuapp.com/login", {
      name,
      email,
      password,
      role,
    }).then((response) => {
      console.log(response)
      console.log(response.data.token)
      a.setToken(response.data.token)
     alert("login");
     setText(true)
    });
  };
 
    return(
         <>  
            <div style={{display:"flex",justifyContent:"center",alignItems:'center',flexWrap:'wrap'}}>
                   <div style={{borderStyle:"solid",borderRadius:"25px",padding:"25px",marginTop:"10px"}}>
                        <h4 style={{marginBottom:"10px",padding:"10px",marginTop:"10px"}}>Name:</h4>

                        <input type="text" placeholder="enter your name" onChange={onChange1} style={{minHeight:"25px",padding:"10px"}} ></input>
                        <h4 style={{marginBottom:"10px" ,padding:"10px"}}>Email:</h4>
                        <input type="email" placeholder="email" onChange={onChange4} style={{minHeight:"25px",padding:"10px"}} ></input>
                       
                        <h4 style={{marginBottom:"10px",padding:"10px"}}>password</h4>
                        <input type="password" placeholder="enter your password"  onChange={onChange2} style={{minHeight:"25px",padding:"10px"}} ></input>
                         <h4 style={{marginBottom:"10px" ,padding:"10px"}}>Role:</h4>
                        <input type="text" placeholder="Role" onChange={onChange3} style={{minHeight:"25px",padding:"10px"}} ></input>
                        <div style={{display:'flex',justifyContent:'center' , marginTop:'10px'}}>
                        <button className="btn info" disabled={text} style={{minHeight:'40px',position:'center'}}  onClick={createUser}>{text==true?'Saved':'Submit'}</button>
                        </div>
                   </div>
            </div>
         
         </>
    )
 
 
 }