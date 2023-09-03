import React from 'react'
import {loader} from "../utils/constant"
const Loader = () => {
  return (
    <div className='loader-box'>
    <img src={loader} alt="Loader" />
    </div>
  )
}

export default Loader