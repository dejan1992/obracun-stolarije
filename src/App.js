import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Input from "./components/Input/Input"
import Input2 from "./components/Input/Input2"
import Table from "./components/Table/Table"
import Results from "./components/Results/Results"
import NewWindow from "./components/Modals/NewWindow"
import DeleteWindow from "./components/Modals/DeleteWindow"
import { Route, Switch } from "react-router-dom"
import Info from "./pages/Info"

import { ReactNotifications, Store } from 'react-notifications-component'


const App = props => {
  const [windowsBase, setBase] = useState(getWindows())
  const [windowsTable, setwindowsTable] = useState('')
  const [price, setPrice] = useState(0)
  const [area, setArea] = useState(0)


  const saveNewWindowHandler = w_base => {
    setBase(prevBase => {
      return [...prevBase, w_base]
    })
  }

  const addNewWindowInTable = wtable => {
    setwindowsTable(prevTable => {
      return ([...prevTable, wtable])
    })
  }

  const WindowPrice = wPrice => {
    setPrice(prevPrice => {
      return (prevPrice + wPrice)
    })
  }

  const WindowArea = wArea => {
    setArea(prevArea => {
      return (prevArea + wArea)
    })
  }

  // function getSum() {
  // if (price == '') {
  //   setSuma(0)
  // } else {
  //   let reducer = (previousValue, currentValue) => previousValue + currentValue;
  //   setSuma(price.reduce(reducer))
  //   setSuma(1)
  // }
  // console.log(suma)
  // }

  // getSum()

  // local strorage

  useEffect(() => {
    const temp = JSON.stringify(windowsBase)
    localStorage.setItem('window', temp)
  }, [windowsBase])

  //get from localStorage

  function getWindows() {
    const temp2 = localStorage.getItem("window")
    const inBaseWindows = JSON.parse(temp2)
    return inBaseWindows || []
  }


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

  // delete from base

  const delBaseWindowHandler = id => {
    setBase([
      ...windowsBase.filter(window => {
        return window.id !== id
      })
    ])

    Store.addNotification({
      title: "Uspjeh!",
      message: "Prozor uspješno obrisan",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: false
      }
    });
  }





  return (
    <>
      <ReactNotifications />
      <Navbar openModal={openModalHandler} openModalDelete={openModalDeleteHandler} />
      <Switch>
        <Route exact path="/">
          {modalStatus && < NewWindow
            onSaveNewWindow={saveNewWindowHandler} closeModal={closeModalHandler} />}

          {modalStatusDelete && <DeleteWindow
            closeModalDelete={closeModalDeleteHandler}
            // getWindows={getWindows}
            windows={windowsBase}
            deleteWindow={delBaseWindowHandler}
          />}

          <Input windows={windowsBase} TableItem={addNewWindowInTable} WindowPrice={WindowPrice} WindowArea={WindowArea} />
          <Table addWindowToTable={windowsTable} />
          <Results price={price} area={area} />

        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </>
  );
}

export default App;
