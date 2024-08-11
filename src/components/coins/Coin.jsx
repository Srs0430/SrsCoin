import React from 'react'
import "./coin.css"

const Coin = ({name, price, symbol, marketcap, volume, image, priceChange}) => {
    return (
        <div className="cryptoCoin">
            <img src={image} alt={`${name}`} className="coinLogo" />
            <div className="coinNameWrap">
                <h1 className="coinName">
                    {name}
                </h1>
                <p className="coinSymbol">{symbol}</p>
            </div>
                <p className="coinPrice">${price.toLocaleString()}</p>
                <p className="coinMarketCap">Market Cap: ${marketcap.toLocaleString()}</p>
                <p className="coinVolume">Volume(24H): ${volume.toLocaleString()}</p>

                {priceChange < 0 ? (
                    <div className="priceContainerDown">
                        <i className="fas fa-angele-down fa-2x"></i>
                        <p className="priceChange">{priceChange.toFixed(2)}%</p>
                    </div>
                ):(
                    <div className="priceContainerUp">
                        <i className="fas fa-angele-up fa-2x"></i>
                        <p className="priceChange">{priceChange.toFixed(2)}%</p>
                    </div>
                )}
            
        </div>
    )
};

export default Coin
