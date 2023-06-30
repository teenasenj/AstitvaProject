//  import { Grid } from "@mui/material/Grid";
import axios from "axios";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



  
function OperatorFetch() {
  
 const [APIData, setAPIData] = useState([]);
    // const navigate = useNavigate();


//     const getData = () => {
        
//         axios.get(`http://localhost:5000/adding_operator`)
//             .then((getData) => {
//                 setAPIData(getData.data);
//             })
//   }
  

const getDataId = () => {
let ido = document.getElementById("valu").value; 
axios.get(`http://localhost:5000/adding_operator/${ido}`)
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
            <div className='col-sm-3'>
              <input id="valu" type="text" className="form-control" style={{ width: "14rem" }} />
            </div>&nbsp;&nbsp;
            <div className='col-sm-4'>
               {/* <img src={search} style={{ width: "2rem" }} alt="logo" /> */}
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

    
<TableContainer>
<Table aria-label="customized table">
<TableHead>
   {/* table column heading */}
  <TableRow sx={{'backgroundColor':'#2962ff'}}>
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">Id</TableCell>
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">First Name</TableCell>
    <TableCell sx={{'fontSize': '20px', 'color': 'white' }} align="right">Last Name</TableCell>
    <TableCell sx={{ 'fontSize': '20px', 'color': 'white' }} align="right">DOB</TableCell> 
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">Qualification</TableCell> 
    <TableCell sx={{'fontSize':'20px', 'color':'white'}} align="right">Email</TableCell> 
    <TableCell sx={{ 'fontSize': '20px', 'color': 'white' }} align="right">Address</TableCell>
    <TableCell sx={{'fontSize': '20px', 'color': 'white' }} align="right">Phoneno</TableCell>                   
  </TableRow>
</TableHead>
<TableBody>
  {APIData.map((APIData) => (
    <TableRow key={APIData.id}>
      {/* table datas for the respective column */}
      <TableCell align="right">{APIData.id}</TableCell>     
      <TableCell align="right">{APIData.firstname}</TableCell>
      <TableCell align="right">{APIData.lastname}</TableCell>
      <TableCell align="right">{APIData.dob}</TableCell>
      <TableCell align="right">{APIData.qualification}</TableCell>
      <TableCell align="right">{APIData.email}</TableCell>
      <TableCell align="right">{APIData.address}</TableCell>
      <TableCell align="right">{APIData.phoneno}</TableCell>
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer> 
             
   {/* <button onClick={getData}>Datas</button> */}
    </>
    )
}

export default OperatorFetch;












