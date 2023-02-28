import React from 'react'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'

function Coincard(props) {
  return (
    <div>
     <div className="card">
            <img src={props.data.image} alt="" />
            <p>{props.data.name}</p>
            <p>${props.data.price_change_24h.toLocaleString()}</p>
            <p>{props.data.price_change_percentage_24h < 0 ? <span className='red'>
               <FiArrowDownLeft className='icon' />
              {props.data.price_change_percentage_24h.toFixed(2)}%
            </span> : <span className='green'>
              <FiArrowUpRight  className='icon' />
              {props.data.price_change_percentage_24h.toFixed(2)}%
            </span> }</p>
          </div>
    </div>
  )
}

export default Coincard