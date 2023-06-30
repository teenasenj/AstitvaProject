
import React from 'react';
import {useNavigate} from "react-router-dom"

import Button from '@mui/material/Button';  
import styled from 'styled-components'
import logo from '../image/logo.png'


const AnimationDelay = styled.div
`{
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


 
const Operator = () => {
const navigate = useNavigate();
	
return (
	<>
   <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
            <AnimationDelay></AnimationDelay>
          </nav>

	
   <h1 style={{color:"blue"}}>Operator</h1>
	 <Button variant="contained"
     style={{marginLeft:'1rem'}}
     onClick={() => navigate("/chemfetch")} >
     Chemist Records
   </Button>
	<br></br>
  <br></br>
  

   <Button variant="contained"
     style={{marginLeft:'1rem'}}
     onClick={() => navigate("/chemistapproval")} >
     Chemist approval
   </Button>
	</>
)
};

export default Operator;




