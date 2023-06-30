import logo from '../image/logo.png'
import styled from 'styled-components'
  
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


function Chemist() {
    return (
        <>
             <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
            <AnimationDelay> </AnimationDelay></nav>
            <p>
            Chemist
            </p></>
    )
}
export default Chemist;






// import React from 'react';
// import {useNavigate} from "react-router-dom"

// const Operator = () => {
// const navigate = useNavigate();
	
// return (
// 	<>
// 		<h1 style={{color:"blue"}}>Operator</h1>
// 		<button onClick={()=>navigate("/Admin")}>Admin</button>
// 	</>
// )
// };

// export default Operator;






