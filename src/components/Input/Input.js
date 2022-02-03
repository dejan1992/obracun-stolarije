import React, { useState } from 'react'
import style from "./Input.module.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";

const Input = props => {
  const windows = props.windows;

  const [searchWindow, setSearchWindow] = useState("")


  const searchWindowHandler = e => {
    setSearchWindow(e.target.value)
  }

  const AddWindowToTlist = e => {
    e.preventDefault();
    if (searchWindow == '') {
      alert('Unesi dimenzije!')
      return
    }

    const windowToAdd = searchWindow.split(" ");


    props.TableItem(windowToAdd);
    props.WindowPrice(parseInt(windowToAdd[4]))

  }


  return (
    <div className={style.input}>
      <h1>Obračun stolarije</h1>
      <form onSubmit={AddWindowToTlist}>
        <div>
          {/* <label>Unesi dimenzije</label> */}
          {/* <input type="number" placeholder='1200 x 1200' />*/}
          <Stack className={style.stack} sx={{ width: 300 }}>
            <Autocomplete
              id="windows"
              getOptionLabel={(windows) => `${windows.height} x ${windows.width}  ${windows.price} KM`}
              options={windows}
              sx={{ width: 300 }}
              isOptionEqualToValue={(option, value) =>
                option.width === value.width
              }
              noOptionsText={"nema u bazi"}
              renderOption={(props, windows) => (
                <Box component="li" {...props} key={windows.id}>
                  {windows.height} x {windows.height}
                </Box>
              )}
              renderInput={(parms) => <TextField {...parms} label="Pretraži h x š" onSelect={searchWindowHandler} />}
            />
          </Stack>
          {/* <div className={style.roletne}>
            <label>ROLETNE:</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </div> */}
        </div>
        <div>
          <button className={style.button}>Dodaj</button>
        </div>
      </form>
    </div>
  )
}

export default Input
