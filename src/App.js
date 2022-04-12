import React, { useState, useEffect } from 'react'
import Navbar from "./components/Navbar/Navbar"
import Input from "./components/Input/Input"
// import Input2 from "./components/Input/Input2"
import Table from "./components/Table/Table"
import Results from "./components/Results/Results"
import NewWindow from "./components/Modals/NewWindow"
import DeleteWindow from "./components/Modals/DeleteWindow"
import { Route, Switch } from "react-router-dom"
import Info from "./pages/Info"
import { ReactNotifications, Store } from 'react-notifications-component'

const App = props => {
  const [windowsBase, setBase] = useState([])
  const [windowsTable, setwindowsTable] = useState('')
  const [price, setPrice] = useState(0)
  const [area, setArea] = useState(0)

  // show Table on button click

  const [table, setSTable]= useState(false);

  const showTableHandler = ()=> {
    setSTable(true)
  }


  const searchWindowShow = ()=> {
    setSTable(false)
  }

  async function saveNewWindowHandler (w_base) {
    const response = await fetch("https://rb-stolarija-default-rtdb.firebaseio.com/window.json",{
      method: 'POST',
      body: JSON.stringify(w_base),
      headers: {'Content-Type': 'application/json'}
    });

    const data = await response.json();

    // setBase(prevBase => {
    //   return [...prevBase, w_base]
    // })
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



  //get from localStorage
  // console.log(111)

  async function getWindows() {

    const response= await fetch("https://rb-stolarija-default-rtdb.firebaseio.com/window.json");
    if(!response.ok){
      console.log('nesto nije u redu');
    }

    const data = await response.json();

    // console.log(data)

    const inBaseWindows = [];
    for(const key in data){
      inBaseWindows.push({
        // id: data[key].id,
        id: key,
        area: data[key].area,
        height: data[key].height,
        width: data[key].width,
        price: data[key].price,
      })
      // console.log(inBaseWindows)
    }
// return(inBaseWindows)
    setBase(inBaseWindows)
    // console.log(inBaseWindows)

    // const temp2 = localStorage.getItem("window")
    // const inBaseWindows = JSON.parse(temp2)
  // return inBaseWindows || []
   }
  //  getWindows()


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

   const delBaseWindowHandler = async (key) => {

    const response = await fetch(`https://rb-stolarija-default-rtdb.firebaseio.com/window/${key}.json`,{
      method:"DELETE",
      body: JSON.stringify(),
      headers: {
        'Content-type': 'application/json'
    }
    })

    getWindows()
    const windowsBase = await response.json();


    Store.addNotification({
      title: "Prozor uspješno obrisan!",
      // message: "Prozor uspješno obrisan",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: false
      }
    });
  }

  useEffect(() => {
    getWindows()
  //   // const temp = JSON.stringify(windowsBase)
  //   // localStorage.setItem('window', temp)
  }, [modalStatus, modalStatusDelete])

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
          <Input windows={windowsBase} TableItem={addNewWindowInTable} WindowPrice={WindowPrice} WindowArea={WindowArea} showTable={showTableHandler} searchWindowShow={searchWindowShow}/>
          
          {table && <Table addWindowToTable={windowsTable}/>}
          {table && <Results price={price} area={area} />}

        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </>
  );
}

export default App;
