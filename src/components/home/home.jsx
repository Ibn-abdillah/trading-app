import React from 'react'
import hero from '../../assets/hero.png'

import './home.css'

function Home() {
  return (
    <div className='home' id='home'>
      <div className="content">
        <div className="col-1">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in <br /> Cryptocurrency with <br /> your IRA</h1>
          <p>Buy, Sell and store hundreds of Cryptocurrencies</p>
          <div className="email">
          <input type="email" required placeholder='Enter your email' />
          <button>Learn More</button>
        </div>
      </div>

      <div className="col-2">
        <img src={hero} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Home