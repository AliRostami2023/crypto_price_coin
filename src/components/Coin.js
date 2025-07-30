import React from 'react';

import styles from './Coin.module.css'


const Coin = ({name, image, price, symbol, marketCap, priceChange}) => {
    
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol?.toUpperCase() ?? "N/A"}</span>
            <span className={styles.currentPrice}>
                $ {price != null ? price.toLocaleString() : "N/A"}
            </span>
            <span className={priceChange != null && priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>
                {priceChange != null ? priceChange.toFixed(2) : "N/A"}
            </span>
            <span className={styles.marketCap}>
                $ {marketCap != null ? marketCap.toLocaleString() : "N/A"}
            </span>
        </div>
    );
};

export default Coin;
