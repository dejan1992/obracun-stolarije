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


const DUMMY_BASE = [
  // {
  //   id: 1,
  //   height: 3200,
  //   width: 1200,
  //   blinds: 1,
  //   area: 1.22,
  //   price: 150
  // },

  // {
  //   id: 2,
  //   height: 1400,
  //   width: 1400,
  //   blinds: 1,
  //   area: 2.22,
  //   price: 250
  // },
  // {
  //   id: 3,
  //   height: 1200,
  //   width: 1200,
  //   blinds: 1,
  //   area: 1.22,
  //   price: 150
  // },
  // {
  //   id: 4,
  //   height: 1200,
  //   width: 1200,
  //   blinds: 1,
  //   area: 1.22,
  //   price: 150
  // }

]

const App = props => {
  const [windowsBase, setBase] = useState(getWindows())
  const [windowsTable, setwindowsTable] = useState('')
  const [price, setPrice] = useState('')
  const [suma, setSuma] = useState('')


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
      return ([...prevPrice, wPrice])
    })
    console.log(price)
    if (price == '') {
      setSuma(price)
    } else {
      let reducer = (previousValue, currentValue) => previousValue + currentValue;
      setSuma(price.reduce(reducer))

    }
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
  }


  return (
    <>
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

          <Input windows={windowsBase} TableItem={addNewWindowInTable} WindowPrice={WindowPrice} />
          <Table addWindowToTable={windowsTable} />
          <Results sum={suma} />
          {/* 
      {windowsBase.map((window, key) => {
        return <div>{window.width}</div>
      })} */}
          {/* <Input2 windows={windowsBase} /> */}
        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </>
  );
}

export default App;
