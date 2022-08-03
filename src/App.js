
import React from 'react';




import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Form } from './pages/Form';
import Data from './pages/data';
import NoteState from './context/noteState';
import Login from './pages/login';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from './theme';
import SignIn from './pages/Signin';
import { CssBaseline } from '@mui/material';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
function App() {
     
   

  return (
    <ThemeProvider theme={theme}>
    <NoteState>
    <Router>
    <CssBaseline/>
    <ResponsiveAppBar/>
     <Routes >
      <Route exact path='/' element={<Data/>}> </Route>
      <Route path='login' element={<Form/>}>
        <Route path='contact' element={<Contact/>}></Route>
      </Route>
      <Route exact path='context' element={<Login/>}></Route>
      <Route exact path='signin' element={<SignIn/>}>
        <Route exact path='signup' element={<Signup/>}/>
     
      </Route>
     </Routes>
    </Router>
    </NoteState>
    </ThemeProvider>
    
  );
}

export default App;
