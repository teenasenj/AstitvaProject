import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//React date picker
import DatePicker from 'react-datepicker';

const AddingOperator = () => { 
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [dob, setdob] = useState(null);
    const [qualification, setqualification] = useState("")
    const [email, setemail] = useState("")
    const [phoneno, setphoneno] = useState("")
    const [address, setaddress] = useState("")
 
      const navigate = useNavigate();
      
      const handlefirstname =(e)=>{
          setfirstname(e.target.value);
      }
      const handlelastname =(e)=>{
          setlastname(e.target.value);
      }
     
      const handlequalification =(e)=>{
          setqualification(e.target.value);
      }
      const handleemail =(e)=>{
          setemail(e.target.value);
      }
      const handlephoneno =(e)=>{
          setphoneno(e.target.value);
      }
      
      const handleaddress =(e)=>{
          setaddress(e.target.value);
      }
  
    
      const postData = () => {
        axios.post(`http://localhost:5000/adding_operator`, 
            {
                firstname,
                lastname,
                dob,
                qualification,
                email,
                phoneno,
                address
      
        }).then(() => {
        navigate('/read')
        })
                 }
     
return (
	<>
	
     <form>
        <div className="d-flex justify-content-center">
          <div className="shadow p-2 mb-2 bg-body-tertiary rounded card align-middle" 
           style={{ width: "30rem" }}>
            <div className="card-body">
              
               {/* //1st row */}
              <div className="d-flex flex-row">
               
                {/* first_name */}
                <div>
                  <label For="first_name"
                   className="form-label">
                   First Name
                  </label>
                  <input type="text"
                    onChange= { handlefirstname } 
                    className="form-control" 
                    required/>
                </div> &nbsp; &nbsp; &nbsp;
              
                 {/* last_name */}
                <div>
                  <label For="last_name"
                   className="form-label">
                    Last Name
                  </label>
                  <input type="text"
                   onChange= { handlelastname } 
                   className="form-control " 
                   required/>
                </div>
              </div>&nbsp; &nbsp; &nbsp;
            {/* //2nd row */}
                {/* dob */}
                <div className="d-flex flex-row">
                <div>
                  <label For="dob"
                    className="form-label">
                   DOB
                  </label><br></br>
                  <DatePicker
                 selected={dob}
                 onChange={date => setdob(date)}
                 dateFormat="dd-MM-yyyy"
                 className="form-control"
                 required
                  />
              </div> &nbsp; &nbsp; &nbsp;

             
              
                 {/* qualification */}
                <div>
                  <label For="qualification"
                   className="form-label">
                    Qualification
                  </label>
                  <input type="text"
                   onChange= { handlequalification } 
                   className="form-control" 
                   required/>
                </div>
              </div>


              {/* //3nd row */}
              {/* email */}
              <div className="d-flex flex-row">
                <div>
                  <label For="email" 
                   className="form-label">
                    Email
                  </label>
                  <input type="email"
                   onChange= { handleemail } 
                   className="form-control " 
                   required/>
                </div> &nbsp; &nbsp; &nbsp;
              
                {/* phone_no */}
                <div>
                  <label For="phone_no" 
                   className="form-label">
                    Phone Number
                  </label>
                  <input type="number"
                   onChange={handlephoneno} 
                   className="form-control " 
                   required/>
                </div> &nbsp; &nbsp; &nbsp;
              </div>


              {/* //4th row */}
                {/* address */}
              <div className="d-flex flex-row">

                <div>
                  <label For="address" 
                  className="form-label">
                  Address</label>
                  <input type="text"
                   onChange= { handleaddress} 
                   className="form-control" 
                   required />
                </div>
                &nbsp; &nbsp; &nbsp;
                 </div>  
                  </div>

            {/* <a onClick={()=>navigate("/Login")}> */}
             <button 
                type="submit"
                onClick={postData}
               className="btn btn-primary d-flex justify-content-center"
               style={{ width: "5rem" }}>
                 Submit
                </button>
                {/* </a> */}
          </div>
        </div>
     
      </form>
	</>
)
};

export default AddingOperator;


