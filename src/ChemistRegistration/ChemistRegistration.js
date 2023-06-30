import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
// Country & State
import {countries} from './countries';
import {states} from './states'
//React date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
function ChemistRegistration ()   {

    const [shopname, setshopname]=useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [dob, setdob] = useState(null);
    const [licenceno, setlicense] = useState("") 
    const [qualification, setqualification] = useState("")
    const [email, setemail] = useState("")
    const [phoneno, setphoneno] = useState("")
    const [drivinglicenceno, setdrivinglicenceno] = useState("")
    const [address, setaddress] = useState("")
    const [state, setstate] = useState("")
    const [country, setcountry] = useState('');
    const [chemistlicence, setchemistlicence] = useState("")
    const [drivinglicence, setdrivinglicence] = useState("")
    const [chemistphoto, setchemistphoto] = useState("")
    
  // country
    const getCountry = () => {
      return countries.map((country) => {
        return (
          <option value={country.name} key={country.dial_code}>
            {country.name}
          </option>
        );
      });
    };

   
  //state
    const getState = () => {
      return states.map((state) => {
        return (
          <option value={state.name} key={state.dial_code}>
            {state.name}
          </option>
        );
      });
    };

    const navigate = useNavigate();
    
    const handleshopname =(e)=>{
        setshopname(e.target.value);
    }

    const handlefirstname =(e)=>{
        setfirstname(e.target.value);
    }
    const handlelastname =(e)=>{
        setlastname(e.target.value);
    }

    // const handledob =(e)=>{
    //     setdob(e.target.value);
    // }
    const handlelicense =(e)=>{
        setlicense(e.target.value);
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
    const handledrivinglicenceno =(e)=>{
        setdrivinglicenceno(e.target.value);
    }
    const handleaddress =(e)=>{
        setaddress(e.target.value);
    }

    const handlestate =(e)=>{
        setstate(e.target.value);
    }
   
    const handlecountry = (e) => {
      setcountry(e.target.value);
    };

    const handlechemistlicence =(e)=>{
        setchemistlicence(e.target.value);
    }

    const handledrivinglicence =(e)=>{
        setdrivinglicence(e.target.value);
    }

    const handlechemistphoto =(e)=>{
        setchemistphoto(e.target.value);
  }
  



  const postData = () => {
    axios.post(`http://localhost:5000/signup`, 
        {
           shopname,
            firstname,
            lastname,
            dob,
            licenceno,
            qualification,
            email,
            phoneno,
            drivinglicenceno,
            address,
            state,
            country,
            chemistlicence,
            drivinglicence,
            chemistphoto
  
    }).then(() => {
    navigate.push('/read')
    })
             }

 
  return (
      

    <>
    <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
        <AnimationDelay> </AnimationDelay>
      </nav>
      <form>
        <div className="d-flex justify-content-center">
          <div className="shadow p-2 mb-2 bg-body-tertiary rounded card align-middle" 
           style={{ width: "50rem" }}>
            <div className="card-body">
              
               {/* //1st row */}
              <div className="d-flex flex-row">
                {/* shop name */}
                <div>
                  <label For="shop_name" 
                  className="form-label">
                  Chemist shop name
                  </label>
                  <input type="text" 
                    className="form-control"
                    onChange= { handleshopname }                
                    required/>
                </div> &nbsp; &nbsp; &nbsp;
              
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

                {/* <div>
                  <label For="dob"
                   className="form-label">
                    DOB
                  </label>
                  <input type="date"
                   onChange= { handledob } 
                   className="form-control"
                   required />
                </div> &nbsp; &nbsp; &nbsp; */}
              
                 {/* licence_no */}
                <div>
                  <label For="licence_no"
                   className="form-label">
                    Licence no
                  </label>
                  <input type="text"
                   onChange= { handlelicense } 
                   className="form-control" 
                   required/>
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
              
                  {/* register_no */}
                <div>
                  <label For="driving_"
                   className="form-label">
                    Driving Licence no
                  </label>
                  <input type="number" 
                   onChange= { handledrivinglicenceno} 
                   className="form-control " 
                   required/>
                </div>
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
              
                {/* state */}
                <div>
                  <label For="state" 
                    className="form-label ">
                    State</label>
                  <select
                    onChange= { handlestate} 
                    className="form-control"
                    value={state}
                  >
                  <option value="" disabled>
                    Select state 
                  </option>
                    {getState()}
                  </select>
                </div> &nbsp; &nbsp; &nbsp;
              


              
                 {/* country */}
                <div>
                <label For="country" 
                  className="form-label ">
                  Country</label>
                <select
                  className="form-control"
                  onChange={handlecountry}
                  value={country}
                >
                <option value="" disabled>
                 Select country 
                </option>
                  {getCountry()}
                </select>
                </div>
              </div>  
              

              {/* Chemist Licence Photo */}
                <div>
                <label for="formFileMultiple" 
                  class="form-label"> 
                  Chemist Licence Photo
                </label>
                <input class="form-control "
                  onChange= { handlechemistlicence}  
                  type="file"
                  id="formFileMultiple"
                  multiple
                  required/>
                </div>  

               {/* Driving Licence Photo */}
                <div>
                <label for="formFileMultiple" 
                  class="form-label"> 
                 Driving Licence Photo</label>
                <input class="form-control"
                  onChange= { handledrivinglicence}                
                  type="file"
                  id="formFileMultiple" 
                  multiple
                  required/>
                 </div> 
              
              {/* Chemist Photo */}
                <div>
                <label for="formFileMultiple" 
                  class="form-label"> 
                Chemist Photo</label>
                <input class="form-control"
                  onChange= { handlechemistphoto}             
                  type="file" 
                  id="formFileMultiple" 
                  multiple
                  required/>
                </div>    
            </div>

            <a onClick={()=>navigate("/Login")}>
             <button 
                type="submit"
                onClick={postData}
               className="btn btn-primary d-flex justify-content-center"
               style={{ width: "5rem" }}>
                 Submit
            </button></a>
          </div>
        </div>
        
        <button onClick={() => navigate("/chemfetch")}>
         get data
        </button>
      </form>
      </>
    );
  }


export default ChemistRegistration;
 

// <a  onClick={()=>navigate("/Login")} >Login</a>
