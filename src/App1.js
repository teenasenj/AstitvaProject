// import React from 'react';
// import Dropdown from './dummy/Dropdown';

// function App1() {
//   return (
//     <div>
//       <h1>Dynamic Dropdown</h1>
//       <Dropdown />
//     </div>
//   );
// }

// export default App1;
// const App = () => {
//     // State variable for the options array
//     const [options, setOptions] = useState([]);
  
//     // State variable for the selected value
//     const [selected, setSelected] = useState("");
  
//     // State variable for the input value
//     const [input, setInput] = useState("");
  
//     // Fetch data from an API using Axios and update the options state
//     useEffect(() => {
//       axios
//         .get("https://example.com/api/states")
//         .then((response) => {
//           setOptions(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }, []);
  
//     // Handle the change event of the dropdown and update the selected state
//     const handleChange = (event) => {
//       setSelected(event.target.value);
//     };
  
//     // Handle the change event of the input field and update the input state
//     const handleInput = (event) => {
//       setInput(event.target.value);
//     };
  
//     // Handle the click event of the button and update the options state with the input value
//     const handleClick = () => {
//       setOptions([...options, input]);
//       setInput("");
//     };
  
//     return (
//       <div>
//         <h1>Dynamic Dropdown in React</h1>
//         <p>Select a state:</p>
//         <Dropdown options={options} onChange={handleChange} />
//         <p>You selected: {selected}</p>
//         <p>Add a new state:</p>
//         <input type="text" value={input} onChange={handleInput} />
//         <button onClick={handleClick}>Add</button>
//       </div>
//     );
//   };
  
//   export default App;

import React, { useState, useEffect } from "react";
// import axios from "axios";
import axios from "axios";

import Dropdown from "./dummy/Dropdown.js"; // import the dropdown component

// Parent component that holds the state for the options and the selected value
const App1 = () => {
  // State variable for the options array
  const [options, setOptions] = useState([]);

  // State variable for the selected value
  const [selected, setSelected] = useState("");

  // State variable for the input value
  const [input, setInput] = useState("");

  // Fetch data from an API using Axios and update the options state
  useEffect(() => {
    axios
      .get("https://example.com/api/states")
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Handle the change event of the dropdown and update the selected state
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  // Handle the change event of the input field and update the input state
  // const handleInput = (event) => {
  //   setInput(event.target.value);
  // };

  // Handle the click event of the button and update the options state with the input value
  const handleClick = () => {
    setOptions([...options, input]);
    setInput("");
  };

  return (
    <div>
      <h1>Dynamic Dropdown in React</h1>
      <p>Select a state:</p>
      <Dropdown options={options} onChange={handleChange} /> // use the dropdown component
      <p>You selected: {selected}</p>
      <p>Add a new state:</p>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default App1;
