
// import Grid from '@mui/material/Grid';

// function Demogrid() {
//     return (<>
        
//         <Grid container spacing={1}>
//             <Grid container sm={6}>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>

//             </Grid>

//             <Grid container sm={6}>
//  <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//                 <Grid sm={1}>1</Grid>
//             </Grid>
//     </Grid>


//     </>
        
//     )
// }
// export default Demogrid;



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGridPro } from '@mui/x-data-grid-pro';
// import { useDemoData } from '@mui/x-data-grid-generator';

// export default function Demogrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100000,
//     editable: true,
//   });

//   return (
//     <Box sx={{ height: 520, width: '100%' }}>
//       <DataGridPro
//         {...data}
//         loading={data.rows.length === 0}
//         rowHeight={38}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// }








// () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [isOpen, setIsOpen] = useState(false);
//   const handleChange = (e) => {
//     setIsOpen(!isOpen);
//     setStartDate(e);
//   };
//   const handleClick = (e) => {
//     e.preventDefault();
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <button className="example-custom-input" onClick={handleClick}>
//         {format(startDate, "dd-MM-yyyy")}
//       </button>
//       {isOpen && (
//         <DatePicker selected={startDate} onChange={handleChange} inline />
//       )}
//     </>
//   );
// };



import { states } from '../ChemistRegistration/states';
import React, { useState } from 'react';
import { Select, MenuItem, InputLabel } from "@material-ui/core";

const ChemistSignup = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const renderStates = () => {
    return states.map((state) => (
      <MenuItem value={state.name} key={state.code}>
        {state.name}
      </MenuItem>
    ));
  };

  return (
    <div>
      <InputLabel>State</InputLabel>
      <Select value={selectedState} onChange={handleStateChange}>
        <MenuItem value="" disabled>
          Select State
        </MenuItem>
        {renderStates()}
      </Select>
    </div>
  );
};

export default ChemistSignup;
