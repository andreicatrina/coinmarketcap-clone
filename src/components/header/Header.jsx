import React from "react";
import "./Header.css";
import { FaBitcoin } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RiGasStationFill } from "react-icons/ri";

function Header() {
  return (
    <div className="section-container">
      <div className="header-container">
        <div className="left-container">
          <FaBitcoin className="logo-icon" />
          CoinMarketCap
        </div>
        <div className="right-container">
          <FiSearch className="magnify-icon" />
          <BsBellFill className="notification-icon" />
          <AiOutlineMenu className="menu-icon" />
        </div>
      </div>
      <div className="mini-info-container">
        <span>Cryptos: 19,720</span>
        <span>Exchanges: 520</span>
        <span>Market Cap: $1,214,374,345,102</span>
        <span>24h Vol: $70,241,323,410</span>
        <span>Dominance: BTC: 46.2% ETH: 17,6%</span>
        <span>
          <RiGasStationFill className="gas-icon" />
          ETH Gas: 63Gwei
        </span>
        <a href="#">
          <IoIosArrowDown />
        </a>
      </div>
      <div className="videos-container">
        <video className="video" width="300" height="140" controls>
          <source src="..Videos/Video1.mp4" type="video/mp4" />
        </video>
        <video className="video" width="300" height="140" controls>
          <source src="..Videos/Video1.mp4" type="video/mp4" />
        </video>
        <video className="video" width="300" height="140" controls>
          <source src="..Videos/Video1.mp4" type="video/mp4" />
        </video>
        <video className="video" width="300" height="140" controls>
          <source src="..Videos/Video1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Header;
