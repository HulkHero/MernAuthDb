import { Axios } from 'axios';
import '../App.css';
export const Card=({udata})=>{
   // const {name,age,email,image}=user

   const deleteUser=(id)=>{
      Axios.delete('')
   }
    return(
         <>
         <div style={{width:'300px',height:'200px'}}>
         <div className='cerd' style={{margin:"15px" ,padding:"10px" }} >
         <div><img src={"https://picsum.photos/250/100"} ></img></div>
            <div>Name: {udata.name}</div>
            <div>Age: {udata.age}</div>
            <div>Email: {udata.username}</div>
            <div><button className="btn" style={{minHeight:'40px',position:'center',borderRadius:'10px'}}  onClick={deleteUser(udata._id)}>Delete</button></div>
         </div>
         </div>
         </>
    )
 }