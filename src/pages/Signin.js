import * as React from 'react';
import { useContext,useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NoteContext from '../context/noteContext';
import Axios from 'axios'
import { Outlet } from "react-router-dom"
import { Modal } from '@mui/material';
import {Snackbar  } from '@mui/material'
import { Alert} from '@mui/material';


const theme = createTheme();

function setSessionToken(userToken) {
  sessionStorage.setItem('token', userToken);
  console.log("storage")
}

export default function SignIn() {
  const a = useContext(NoteContext)

  const [open, setOpen] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)
  const [show, setSignup] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    Axios.post("https://hulkmerndb.herokuapp.com/login", {
      email: data.get('email'),
      password: data.get('password')
    
    }).then((response) => {
      console.log(response)
      console.log(response.data.token)
      a.setToken(response.data.token)
      setOpenSnack(true)
      setSessionToken(response.data.token)
     
    });
  };

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Button onClick={()=>setOpen(true)}>Open</Button>
        <Modal
          open={open}
          onClose={()=>setOpen(false )}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
>
  <Box position="absolute" top="40%" left="40%" backgroundColor="blue"  padding="10px">
    <Typography id="modal-modal-title" variant="h6" color="white" component="h2">
      Logged in
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>

        <Button onClick={() => setSignup(!show)}><Link sx={{textDecoration: 'none'}} to='/signin/signup'>Signup</Link></Button>
        { show==true? <Outlet></Outlet>:" "}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Snackbar open={openSnack} autoHideDuration={6000} onClose={()=>setOpenSnack(false)}>
  <Alert onClose={()=>{setOpenSnack(false)}} severity="success" variant="filled" sx={{ width: '100%' }}>
    Logged in successfully
  </Alert>
</Snackbar>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
        
       
      </Container>
  
  );
}