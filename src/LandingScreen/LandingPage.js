import { useNavigate } from "react-router-dom";
import logo from '../image/logo.png'
// import deliver_img from '../image/deliver_img.png'
import deliver_img2 from '../image/deliver_img2.png'
import styled from 'styled-components'
import Button from '@mui/material/Button'; 

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

const Deliver = styled.h1   
` {
  width: 1450px;
  height: 300px;
  text-align: center;
  font: 35px sans-serif;
  color: orange;
  text-shadow: 0px 0px 1px black;
  background-image: url(${deliver_img2});
  background-position: bottom left;
  // border: 1px solid black;
  animation: move 10s ease 1s 2 forwards;
}

@keyframes move {
	100% {
	  background-position: bottom center;
	}
}
`

function Landingpage() {
    const navigate = useNavigate();
    return (
        <>
          <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
            <AnimationDelay></AnimationDelay>
          </nav>
          {/* {Login} */}
          <Button variant="contained" style={{ marginLeft: '1rem' }} onClick={() => navigate("/Login")} >Login</Button> 
          <br></br>&nbsp;&nbsp;&nbsp;
          <br></br>&nbsp;&nbsp;&nbsp;
          {/* {Chemist Registration} */}
          <Button variant="contained" onClick={() => navigate("/ChemistRegistration")}>Chemist  Registration</Button>
          <Deliver>Welcome to ASTITVA </Deliver>
  
        </>)
}

export default Landingpage;





