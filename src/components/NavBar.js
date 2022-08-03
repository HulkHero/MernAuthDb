import { AppBar } from '@mui/material'
import {Link} from 'react-router-dom'

export const NavBar =()=>{


    return(
        <>
        <div style={{display:'flex',flex:"1",flexWrap:"wrap",backgroundColor:'blue',color:'white',textDecoration:'none'}}>
            <div className="nav" ><Link className='link'  to='/data'>Home </Link></div>
            <div className="nav"><Link  className='link'to='/context'>About</Link></div>
            <div className="nav"><Link  className='link'to='/contact'>Contact</Link></div>
            <div className="nav"><Link  className='link'to='/login'>Form</Link></div>
    
            <div className='sea nav' style={{position:'absolute',right:'5%',padding: "10px",}}>search</div>
 
        </div>
        </> 
    )
}
