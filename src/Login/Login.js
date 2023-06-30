import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState} from 'react';
import logo from '../image/logo.png'
import styled from 'styled-components'
  
  const AnimationDelay = styled.div
  `
  width: 300px;
  height: 250px;
  background: url(${logo}) no-repeat bottom center / 60%;
  animation: moveBg 3s ease 1s 1 forwards;


@keyframes moveBg 
  100% {
    background: url(${logo}) no-repeat bottom center / 100%;
    }
    `

const Login = () => {


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const [data1, setData] = useState([]);
  
  
axios.get(`http://localhost:5000/login`)
.then((getData) => {
  setData(getData.data);
})




  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault()
 
    const account = data1.map((DataItem) => DataItem.email);
    const indexEmail = account.indexOf(email);
    
    console.log(account)
    
    console.log(indexEmail)

   
  
  if (indexEmail < 0) {
      alert("INVALID RECORDS")
    }
    else {
      const Emailpassword = (data1[indexEmail].password)

      const tableUserType = (data1[indexEmail].usertype)

          if (account.includes(email) && (Emailpassword === password)) {
              
        if (tableUserType === "Chemist")
        {
          navigate("/chemist");
          console.log("He is a chemist")
        }
        else if (tableUserType === "Operator")
        {
          navigate("/operator");
          console.log("He is a Operator")
        }
        else {
          console.log("He is an Admin")
          navigate("/admin");
        }
      }
else {
                console.log("fail")
                alert("Invalid credentials")
            }
     
    }
  }
 

  return (
  <>
    <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
    <AnimationDelay/> 
    </nav>
    <form >
      <div className="d-flex justify-content-center">
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded card align-middle" style={{ width: '40rem' }}>
          <div className="card-body">
            {/* //email */}
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             required
            />
            {/* {errors.email && <div className="invalid-feedback">{errors.email}</div>} */}

            {/* //password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* {errors.password && <div className="invalid-feedback">{errors.password}</div>} */}
            </div>

            <div className="d-flex flex-row">
              <button type="submit"
                className="btn btn-primary d-flex justify-content-center"
                style={{ width: '5rem' }}
                onClick={handleSubmit}
                 >
                Submit
              </button>
              &nbsp;&nbsp;
              {/* <button type="reset"
               className="btn btn-primary d-flex justify-content-center" 
               style={{ width: '5rem' }} 
               onClick={()}>
                Cancel
              </button> */}
            </div>
            {/* <a className="d-flex justify-content-end" href="#">
              Forgot password
            </a> */}
          </div>
        </div>
      </div>
     
      </form>
      </>
  )
          }
export default Login;
