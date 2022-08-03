import { useContext, useEffect, useState } from "react"
import Axios from "axios"
import NoteContext from "../context/noteContext";
import theme from "../theme";
import { AppBar, makeStyles, useTheme } from '@mui/styles';
import MultiCard from '../components/Card2';
import { Card, keyframes } from "@mui/material";
import {styled }from "@mui/styles";
import { Box } from "@mui/system";


const useStyles = makeStyles({
  btn:{
    color: theme.status.color
  }
})

 function  getToken() {
    const tokenString = sessionStorage.getItem('token');
  console.log(tokenString);
 // const userToken = JSON.parse(tokenString);
//console.log(userToken);
   console.log(tokenString);
   
  return tokenString
}

const Data=({route})=>{
  const a=useContext(NoteContext);
  const classes=useStyles()
  const tekken=getToken();
  if(tekken){
    a.setToken(tekken)
   }
  console.log(tekken)
   console.log("tekken",tekken)
 
 const [listOfUsers, setListOfUsers] = useState([]);
 const [roll,setroll]=useState(false)

 
 useEffect(  () => {
  if  (tekken){
   
    console.log(tekken)
   
   Axios.get("https://hulkmerndb.herokuapp.com/data",{headers:{
    'Authorization':tekken
   }})
   .then((response) => {
    setListOfUsers(response.data);
    console.log(response)
   setTimeout(() => {
    setroll(true)
   }, 1000);

    
  });
}
}, []); 
  
 
  if(listOfUsers.length>0)
  {
    console.log(listOfUsers)
    
   return(
        <>
        <div style={{display:'flex',flexWrap:'wrap',alignContent:'center',justifyContent:"space-around"}}>
            { listOfUsers.map((element)=>{
                return(
                  
                  <MultiCard user={element} ></MultiCard>
                  
               
                )
            })
            }
        


        </div>
        </>


   )
          }
          else{
            return(<>
            <h1 className={classes.btn} >Login First</h1>
            
            </>)
          }
}
export default Data;
