import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Coincard from './coincard'

import './feature.css'

function Feature() {

    const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"

    const [data, setData] = useState("")
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    console.log(data);

  return (
    <div className='feature' id='feature'>
      <div className="content">
        <div className="col-1">
            <h3>Explore top Crypto's Like Bitcoin, Ethereum and Dogecoin</h3>
            <p>See all available assets: Cryptocurrencies and NFT's</p>
            <button>See More Coins</button>
        </div>
        
        <div className="col-2">
          {data.map(data => {
             return <Coincard key={data.id} data={data} />
           })}
          </div>
      </div>
    </div>
  )
}

export default Feature