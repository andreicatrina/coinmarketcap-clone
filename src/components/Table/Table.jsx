import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./Table.css";

const apiUrl =
  "https://api.nomics.com/v1/currencies/ticker?key=77882cf11b2fa15b9446a784e3a66147fa9da562&ids=BTC,ETH,BNB,SOL,DOGE,ADA,USDT,USDC,UNI,MATIC,LINK,XLM,ICP,VET,XTZ,TRX,XRP,DOT,EGLD,SHIB&interval=1h,1d,30d&convert=EUR&per-page=100&page=1";

const Table = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = React.useState(null);

  useEffect(() => {
    getPrices();
  }, []);

  const getPrices = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(apiUrl);
      const serverPrices = response.data.map((priceItem) => {
        if (priceItem.name === "XRP") {
          return {
            ...priceItem,
            name: "Ripple",
          };
        }
        return priceItem;
      });
      setPrices(serverPrices);
      setLoading(false);
    } catch {
      setLoading(false);
    }
    // Axios.get(apiUrl).then((response) => {
    //   // console.log(response);
    //   setPrices(response.data);
    // });
  };

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container-header">
      <div className="container-search">
        <input type="text" placeholder="Search.." onChange={onInputChange} />
      </div>
      <div className="container-prices">
        {loading === true ? (
          <p>Loading</p>
        ) : (
          <table className="prices-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {prices
                .filter((priceObj) => {
                  if (
                    priceObj.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((priceObj, idx) => {
                  return (
                    <tr>
                      <th>{idx + 1}</th>
                      <th>{priceObj.name}</th>
                      <th>{parseFloat(priceObj.price).toFixed(1)}</th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
