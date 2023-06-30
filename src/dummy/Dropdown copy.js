// import React, { useState } from 'react';

// function Dropdown() {
//   const [selectedValue, setSelectedValue] = useState('Option 1');
  
//   // Dropdown options
//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   // Event handler for selecting an option
//   const handleSelect = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <select value={selectedValue} onChange={handleSelect}>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default Dropdown;
// import React from "react";

// Dropdown component that takes an array of options and a callback function as props
// /




// import React, { useState, useEffect } from 'react';

// const Dropdown = () => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);

//   useEffect(() => {
//     // Fetch countries
//     fetch('https://api.example.com/countries')
//       .then(response => response.json())
//       .then(data => setCountries(data))
//       .catch(error => console.log(error));

//     // Fetch states
//     fetch('https://api.example.com/states')
//       .then(response => response.json())
//       .then(data => setStates(data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h2>Countries:</h2>
//       <ul>
//         {countries.map(country => (
//           <li key={country.id}>{country.name}</li>
//         ))}
//       </ul>

//       <h2>States:</h2>
//       <ul>
//         {states.map(state => (
//           <li key={state.id}>{state.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dropdown;




import React, { Component } from 'react';
import { countries } from './countries';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.getCountry = this.getCountry.bind(this);
  }

  getCountry() {
    return countries.map((country) => (
      <option value={country.dial_code} key={country.name}>
        {country.name}
      </option>
    ));
  }

  handleChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    return (
      <div>
        <select
          className="form-control"
          aria-label="Floating label select example"
          onChange={this.handleChange}
          value={this.state.selectValue}
        >
          <option value="choose" disabled>
            -- Select country --
          </option>
          {this.getCountry()}
        </select>
      </div>
    );
  }
}

export default App;


