//  import { Grid } from "@mui/material/Grid";
import axios from "axios";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import search from '../image/search.png'
// import { useNavigate } from "react-router-dom";

function LogFetch() {
  
    const [APIData, setAPIData] = useState([]);
    // const navigate = useNavigate();


  //   const getData = () => {
        
  //       axios.get(`http://localhost:5000/login`)
  //           .then((getData) => {
  //               setAPIData(getData.data);
  //           })
  // }
  

  const getDataId = () => {
    let id = document.getElementById("val").value; 
      axios.get(`http://localhost:5000/login/${id}`)
          .then((getData) => {
              setAPIData(getData.data);
          })
  }

    return (
        <>
  
          <br></br>
          <br></br>
          <div className="card-body shadow bg-body-tertiary rounded card " style={{ width: "20rem" }}>
            <div className='row'>
              <input id="val" type="text" className="form-control" style={{ width: "11rem" }} />
                {/* <img src={search} style={{ width: "2rem" }}  alt="logo"  /> */}
                <br></br>
                <br></br>
                <button className="btn btn-primary d-flex justify-content-center" style={{ width: "5rem" }} onClick={getDataId}>Fetch </button>
            </div>
          </div>
          <br></br>
          <br></br> 
<TableContainer>
<Table sx={{'width':'90%'}} aria-label="customized table">
<TableHead>
   {/* table column heading */}
  <TableRow sx={{'backgroundColor':'#2962ff'}}>
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">Id</TableCell>
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">Email</TableCell>
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">Password</TableCell>
  </TableRow>
</TableHead> 
<TableBody>
  {APIData.map((APIData) => (
    <TableRow key={APIData.id}>
      {/* table datas for the respective column */}
      <TableCell align="right">{APIData.id}</TableCell>
      <TableCell align="right">{APIData.email}</TableCell>
      <TableCell align="right">{APIData.password}</TableCell>
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer> 
             
   {/* <button onClick={getData}>Datas</button> */}
    </>
    )
}

export default LogFetch;












