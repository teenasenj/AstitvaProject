import Button from '@mui/material/Button';
import logo from '../image/logo.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
 import {NavLink, Outlet } from "react-router-dom";

const AnimationDelay = styled.div 
  `
  width: 300px;
  height: 250px;
  background: url(${logo}) no-repeat bottom center / 60%;
  animation: moveBg 3s ease 1s 1 forwards;
}

@keyframes moveBg {
  100% {
    background: url(${logo}) no-repeat bottom center / 100%;
    }
    `
    
function Admin() {
  const navigate = useNavigate();
    return (
        <>
        <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
          <AnimationDelay> </AnimationDelay>

           {/* //Logout */}
           <Button variant="contained"
            style={{ marginLeft: '65rem', marginTop: '1rem' }} 
            onClick={() => navigate("/Login")}>
            Logout
           </Button>
           <br></br>
         </nav>
 
       
   {/* <Button variant="contained" */}
{/* //             style={{marginLeft:'1rem'}}
//             onClick={() => navigate("/AddingOperator")} >
//             Add Operator
//            </Button> */}

<Grid container> 
  <Grid item xs={4} sm={6} md={6}>
          <Button variant="contained">
            <NavLink to="loginfetch" style={{textDecoration:'none',color:'white'}}  >LogFetch</NavLink> 
          </Button>
           <br></br>
           <br></br>
           {/* <Button variant="contained">
           <NavLink to="chemfetch" style={{textDecoration:'none',color:'white'}}>ChemistFetch</NavLink> 
           </Button>
           <br></br>
           <br></br>   */}
           {/* <Button variant="contained">
           <NavLink to="Operator" style={{textDecoration:'none',color:'white'}}>View Operators</NavLink> 
           </Button>
           <br></br>
           <br></br> */}
           <Button variant="contained">
              <NavLink to="OperatorFetch" style={{textDecoration:'none',color:'white'}}> OperatorFetch</NavLink> 
           </Button>
           <br></br>
           <br></br>
           <Button variant="contained">
              <NavLink to="AddingOperator" style={{textDecoration:'none',color:'white'}}>AddingOperator</NavLink> 
           </Button>
           <br></br>
           <br></br>
           <Button variant="contained">
               <NavLink to="OperatorRegister" style={{textDecoration:'none',color:'white'}}>OperatorRegister</NavLink> 
          </Button>
            <br></br>
            <br></br>
  </Grid>
          
  <Grid item xs={6} sm={6} md={6}>
      <Outlet />
  </Grid>
       
            {/* <Grid item xs={6} sm={6} md={6}>
           <Typography 
            sx={{ 'color': '#3f51b5', fontSize: '2rem' }}>
            Admin
          </Typography>
          </Grid> */}
          </Grid>
        </>)
}
export default Admin;



