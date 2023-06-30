import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import { useState } from "react";
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


// import { useNavigate } from "react-router-dom";
// import search from '../image/search.png'



function ChemistFetch() {
   
    // const navigate = useNavigate();
  
  //   const getData = () => {
        
  //       axios.get(`http://localhost:5000/signup`)
  //           .then((getData) => {
  //               setAPIData(getData.data);
  //           })
  // }
  
  const [APIData, setAPIData] = useState([]);
  const getDataId = () => {
    let id = document.getElementById("val").value; 
      axios.get(`http://localhost:5000/signup/${id}`)
          .then((getData) => {
              setAPIData(getData.data);
          })
  }

    return (
        <>
        <>
        <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
            <AnimationDelay></AnimationDelay>
          </nav>
          <br></br>
          <br></br>
          
            <div className="card-body shadow bg-body-tertiary rounded card " style={{ width: "18rem", marginLeft: '35rem' }}>
              <div className='row'>
                <div className='col-sm-3'>
                <input id="val" type="text" className="form-control" style={{ width: "12rem" }} />
                </div>&nbsp;&nbsp;
                 <div className='col-sm-4'>
                 {/* <img src={search} style={{ width: "2rem" }}  alt="logo"  /> */}
              </div>
              <div className='col-sm-4'>
                  <button className="btn btn-primary d-flex justify-content-center" style={{ width: "5rem" }} onClick={getDataId}>Fetch </button>
              </div>
                <br></br>
                <br></br>
              
              </div>
            </div>
         
          <br></br>
          <br></br> 
<div className='d-flex justify-content-center'>           
<TableContainer>
<Table sx={{ minWidth: 700 }} aria-label="customized table">
{/* //Table heading columns*/}
<TableHead>
  <TableRow sx={{'backgroundColor':'#2962ff'}}>  
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Id</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Shop name</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">First Name</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Last Name</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">DOB</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Licence No</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Qualification</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Email</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}}align="right">Phone no</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Driving Licenceno</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Address</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">State</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Country</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Chemist Licence Photo</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">Driving Licence Photo</TableCell>
    <TableCell sx={{'fontSize':'18px', 'color':'white'}} align="right">ChemistPhoto</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {APIData.map((APIData) => (
    <TableRow >
      {/* table data  */}
    <TableCell align="right" key={APIData.id}>{APIData.id}</TableCell>  
    <TableCell align="right"key={APIData.id} >{APIData.shopname}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.firstname}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.lastname}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.dob}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.licenceno}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.qualification}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.email}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.phoneno}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.drivinglicenceno}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.address}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.state}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.country}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.chemistlicence}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.drivinglicence}</TableCell>
    <TableCell align="right" key={APIData.id}>{APIData.chemistphoto}</TableCell>  
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer> 
</div>  
</>
</>
  );
};

export default ChemistFetch;
















