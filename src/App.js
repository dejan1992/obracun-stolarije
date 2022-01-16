import './App.css';
import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Input from "./components/Input/Input"
import Table from "./components/Table/Table"
import Results from "./components/Results/Results"
import NewWindow from "./components/Module/NewWindow"
import DeleteWindow from "./components/Module/DeleteWindow"

function App() {

  const windowsBase = [
    {
      id: 1,
      height: 1200,
      width: 1200,
      blinds: 1,
      area: 1.22,
      price: 150
    },

    {
      id: 2,
      height: 1400,
      width: 1400,
      blinds: 1,
      area: 2.22,
      price: 250
    },
    {
      id: 3,
      height: 1200,
      width: 1200,
      blinds: 1,
      area: 1.22,
      price: 150
    },
    {
      id: 4,
      height: 1200,
      width: 1200,
      blinds: 1,
      area: 1.22,
      price: 150
    },
    {
      id: 5,
      height: 1200,
      width: 1200,
      blinds: 1,
      area: 1.22,
      price: 150
    },
  ]

  const saveNewWindowHandler = (newWindowData) => {
    const windowData = {
      ...newWindowData,
      id: Math.random().toString()
    }
    console.log(windowData)
  }


  return (
    <>
      <NewWindow onSaveNewWindow={saveNewWindowHandler} />
      {/* <DeleteWindow /> */}
      <Navbar />
      <Input />
      <Table windowsBase={windowsBase} />
      <Results />
    </>
  );
}

export default App;
