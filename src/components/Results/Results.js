import React from 'react'
import style from "./Results.module.css"

const Results = props => {
  return (
    <div className={style.results_container}>
      <h3>UKUPNA CIJENA: <span>{props.sum}</span> KM</h3>
      <h3>UKUPNA POVRŠINA: <span>12.23</span> m<sup>2</sup></h3>
    </div>
  )
}

export default Results
