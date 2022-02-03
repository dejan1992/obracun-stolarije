import React, { useState } from 'react'
import style from "./Input.module.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const Input = props => {
  const [searchWindow, setSearchWindow] = useState("")
  const windows = props.windows;
  const searchWindowHandler = e => {
    setSearchWindow(e.target.value)
  }

  const AddWindowToTlist = e => {
    e.preventDefault();
    if (searchWindow == '') {
      Store.addNotification({
        title: "Greška!",
        message: "Ispuni polje",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false
        }
      });
      return
    }

    const windowToAdd = searchWindow.split(" ");
    props.TableItem(windowToAdd);
    props.WindowPrice(parseInt(windowToAdd[4]));
    props.WindowArea(((Math.floor(windowToAdd[0] * windowToAdd[2]) / 1000000)))

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
                  {windows.height} x {windows.width}
                </Box>
              )}
              renderInput={(parms) => <TextField {...parms} label="Pretraži h x š" onSelect={searchWindowHandler} />}
            />
          </Stack>
        </div>
        <div>
          <button className={style.button}>Dodaj</button>
        </div>
      </form>
    </div>
  )
}

export default Input
