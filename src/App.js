import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from "./Main";
import "./App.css"
import ChemistRegistration from './ChemistRegistration/ChemistRegistration'
import Login from "./Login/Login";
import LogFetch from "./Login/LogFetch";
import ChemistFetch from "./ChemistRegistration/ChemistFetch";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Admin from "./Admin/Admin";
import Operator from "./Operator/Operator";
import Chemist from "./ChemistRegistration/Chemist";
import Landingpage from "./LandingScreen/LandingPage";
import AddingOperator from "./Operator/AddingOperator";
import OperatorRegister from "./Operator/OperatorRegister";
import OperatorFetch from "./Operator/OperatorFetch";

import ChemistApproval from "./ChemistRegistration/ChemistApproval";


// import LoginPeople from "./Operator/LoginPeople";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}/> 
        {/* <Route path="/" element={<Main />}> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/chemistapproval" element={<ChemistApproval />} />
        <Route path="/ChemistRegistration" element={<ChemistRegistration/>} />
        <Route path="chemfetch" element={<ChemistFetch />} />
        <Route path="chemist" element={<Chemist />} />
        <Route path="operator" element={<Operator />} />
       
          <Route path="admin" element={<Admin />} >
             <Route path="loginfetch" element={<LogFetch />} />
             <Route path="OperatorRegister" element={<OperatorRegister />} />
             <Route path="OperatorFetch" element={<OperatorFetch/>}/>
             <Route path="AddingOperator" element={<AddingOperator />} />
          </Route>
     
       
      </Routes>
    </BrowserRouter>

   
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
