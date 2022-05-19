import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import "./Header.css";
import Axios from "axios";

const apiUrl =
  "https://api.nomics.com/v1/currencies/ticker?key=77882cf11b2fa15b9446a784e3a66147fa9da562&ids=BTC,ETH&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1";

const Header = () => {
  const getPrices = () => {
    Axios.get(apiUrl).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="container-header">
      <div className="container-prices">
        <table className="prices-table">
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </table>
      </div>
      <div className="container-button">
        <button onClick={getPrices}>Get Prices</button>
      </div>
      <div className="container-search-dark">
        <div className="placeholder-container">
          <input type="text" placeholder="Search.." />
        </div>
        <div className="darkmode-container">
          <button>
            <BsFillSunFill />
          </button>
          <button>
            <BsFillMoonFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
