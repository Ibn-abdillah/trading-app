import React from 'react'
import trade from '../../assets/trade.png'

import './earn.css'

function Earn() {
  return (
    <div className='earn' id='earn'>
      <div className="content">
        <div className="col-1">
            <img src={trade} alt="" />
        </div>

        <div className="col-2">
            <h3>Earn passive income with crypto.</h3>
            <p>Earn upto 12% annual rewards on 30+ digital assets. 
               Simply hold your assets in the opp to automatically 
               earn rewards at the end of each month with no lockups 
               and no limits.</p>
            <div className="email">
                <input type="email" required placeholder='Enter your email' />
                <button>Learn More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Earn