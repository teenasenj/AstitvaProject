import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState} from 'react';


const OperatorRegister = () => {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [usertype,setusertype]=useState('')
// const [LoginPeoples, setLoginPeoples] = useState('');
   
    
 // LoginPeople
// const getLoginPeople = () => {
//         return LoginPeople.map((login) => {
//           return (
//             <option value={login.name} key={login.dial_code}>
//               {login.name}
//             </option>
//           );
//         });
//       };
  
      // const handleloginpeople = (e) => {
      //   setLoginPeoples(e.target.value);
      // };

// const getData = () => {
        
//  axios.get(`http://localhost:5000/login`)
//    .then((getData) => {
//    setData(getData.data);
//     })
//     }
 
const postData = () => {
    axios.post(`http://localhost:5000/login`, 
        {
            email,
            password,
            usertype
     }).then(() => {
    navigate('/read')
    })
             }



  return (
<>
    {/* <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary  rounded container-fluid">
    <AnimationDelay> </AnimationDelay></nav> */}
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

             <div className="mb-3">
                <label htmlFor="usertype"
                  className="form-label">
                usertype
                </label>
                <select
                type="usertype"
                className="form-control" 
                value={usertype}
                onChange={(e) => setusertype(e.target.value)}
                required
                >
                  <option value="" disabled> --Select--</option> 
                  <option value="Operator">Operator</option>
                  <option value="Chemist" disabled>Chemist</option>
                </select> 
             </div>

                {/* LoginPeople */}
                {/* <div>
                <label For="LoginPeople" 
                  className="form-label ">
                  Country</label>
                <select
                  className="form-control"
                  onChange={handleloginpeople}
                  value={LoginPeoples}
                >
                <option value="" disabled>
                 Login 
                </option>
                  {getLoginPeople()}
                </select>
                </div> */}
            

            <div className="d-flex flex-row">
              <button type="submit"
                className="btn btn-primary d-flex justify-content-center"
                style={{ width: '5rem' }}
                onClick={postData}
                 >
                Submit
              </button>
              &nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
     
      </form>
      </>
  );
};

export default OperatorRegister;
