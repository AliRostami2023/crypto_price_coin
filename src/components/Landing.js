import React, {useEffect, useState} from 'react';

// Component
import { getCoins } from '../Service/Api'
import Coin from './Coin'
import Loading from './Loding'

import styles from './Landing.module.css'


const Landing = () => {

    const [coins, SetCoins] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoins();
            SetCoins(data)
        }

        fetchAPI()
    }, [])


    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <div>
            <input className={styles.input} type='text' placeholder='Search Coin' value={search} onChange={searchHandler} />

            { 
            
                coins.length ?
                <div className={styles.coinContainer}>
                    {searchedCoin.map(coin => <Coin
                     key={coin.id}
                     name={coin.name}
                     image={coin.image}
                     price={coin.current_price}
                     symbol={coin.symbol}
                     marketCap={coin.market_cap}
                     priceChange={coin.price_change_percentage_24h}
                    />)}
                </div> :
                     <Loading />   
            }
        </div>
    );
};

export default Landing;