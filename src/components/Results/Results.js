import React from 'react'
import style from "./Results.module.css"

const Results = () => {
  return (
    <div className={style.results_container}>
      <h3>UKUPNA CIJENA: <span>1200</span> KM</h3>
      <h3>UKUPNA POVRŠINA: <span>12.23</span> m<sup>2</sup></h3>
    </div>
  )
}

export default Results
