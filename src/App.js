import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Input from "./components/Input/Input"
import Table from "./components/Table/Table"
import Results from "./components/Results/Results"
import NewWindow from "./components/Modals/NewWindow"
import DeleteWindow from "./components/Modals/DeleteWindow"

const DUMMY_BASE = [
  {
    id: 1,
    height: 3200,
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
  }

]

const App = props => {
  const [windowsBase, setBase] = useState(DUMMY_BASE)


  const saveNewWindowHandler = w_base => {
    setBase(prevBase => {
      return [w_base, ...prevBase]
    })
  }

  // local strorage

  useEffect(() => {
    const temp = JSON.stringify(windowsBase)
    localStorage.setItem('window', temp)
  }, [windowsBase])


  const [modalStatus, setModalStatus] = useState(false)
  const [modalStatusDelete, setModalStatusDelete] = useState(false)

  //Modal ADD
  const openModalHandler = () => {
    setModalStatus(true)
  }

  const closeModalHandler = () => {
    setModalStatus(false)
  }

  //Modal DELETEs

  const openModalDeleteHandler = () => {
    setModalStatusDelete(true)
  }

  const closeModalDeleteHandler = () => {
    setModalStatusDelete(false)
  }

  // const saveNewWindowHandler = (newWindowData) => {
  //   const windowData = {
  //     ...newWindowData,
  //     id: Math.random().toString()
  //   }
  //   console.log(windowData)
  // }


  return (
    <>
      {modalStatus && < NewWindow
        onSaveNewWindow={saveNewWindowHandler} closeModal={closeModalHandler} />}

      {modalStatusDelete && <DeleteWindow closeModalDelete={closeModalDeleteHandler} />}
      <Navbar openModal={openModalHandler} openModalDelete={openModalDeleteHandler} />


      <Input />
      <Table windows={windowsBase} />
      <Results />
    </>
  );
}

export default App;
