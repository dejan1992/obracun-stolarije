import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";

const Input2 = props => {
  const windows = props.windows;
  console.log(windows);


  return <div>
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        id="windows"
        getOptionLabel={(windows) => `${windows.height} ${windows.width}`}
        options={windows}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) =>
          option.width === value.width
        }
        noOptionsText={"nema u bazi"}
        renderOption={(props, windows) => (
          <Box component="li" {...props} key={windows.id}>
            {windows.height} {windows.height}
          </Box>
        )}
        renderInput={(parms) => <TextField {...parms} label="Search for Window" />}
      />
    </Stack>
  </div>;
};

export default Input2;
